import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import storage from "./storage";
import * as schema from "@shared/schema";
import { z } from "zod";
import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import { join, resolve, dirname, extname } from "path";
import multer from "multer";
import fs from "fs";
import { setupAuth, isAuthenticated, isAdmin } from "./auth";
import bcrypt from "bcryptjs";
import prisma from "./prisma"; // Import prisma instance
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

declare global {
  namespace Express {
    interface User {
      id: number;
      username: string;
      name?: string | null;
      email: string;
      isAdmin: boolean;
    }
  }
}

declare module "express-session" {
  interface SessionData {
    userId: number;
    isAdmin: boolean;
    returnTo?: string;
  }
}

interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup sessions
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "rural-homes-secret",
      resave: false,
      saveUninitialized: true,
      cookie: { 
        secure: process.env.NODE_ENV === "production", 
        maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week
      }
    })
  );

  // Setup authentication
  setupAuth(app);

  // Auth middleware (legacy - can be replaced with passport middleware)
  const requireAuth = isAuthenticated;
  const requireAdmin = isAdmin;

  // AUTHENTICATION ROUTES

  // Get current user
  app.get("/api/auth/me", (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json(null);
    }
    
    const user = req.user as any;
    return res.json({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar
    });
  });

  // Local login
  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err: Error | null, user: Express.User | false | null, info: { message: string }) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.json({
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
        });
      });
    })(req, res, next);
  });

  // Register new user
  app.post("/api/auth/register", async (req, res) => {
    try {
      const userSchema = z.object({
        username: z.string().min(3),
        password: z.string().min(6),
        email: z.string().email(),
        name: z.string().optional()
      });

      const userData = userSchema.parse(req.body);
      
      // Check if username or email already exists
      const existingUser = await storage.getUserByUsernameOrEmail(userData.username);
      if (existingUser) {
        return res.status(400).json({ 
          message: existingUser.username === userData.username 
            ? "Username already taken" 
            : "Email already registered" 
        });
      }
      
      // Hash password
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      
      // Create user
      const user = await storage.createUser({
        username: userData.username,
        password: hashedPassword,
        email: userData.email,
        name: userData.name || undefined,
        isAdmin: false
      });
      
      // Log in the user
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Error logging in after registration" });
        }
        
        // Set session variables for backward compatibility
        req.session.userId = user.id;
        req.session.isAdmin = user.isAdmin;
        
        return res.status(201).json({
          id: user.id,
          username: user.username,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        });
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid user data", errors: error.errors });
      }
      console.error("Error registering user:", error);
      return res.status(500).json({ message: "Failed to register user" });
    }
  });

  // Logout
  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Error logging out" });
      }
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({ message: "Error destroying session" });
        }
        res.json({ message: "Logged out successfully" });
      });
    });
  });

  // Google OAuth routes
  app.get(
    "/api/auth/google",
    (req, res, next) => {
      // Store the original URL in the session for redirection after authentication
      req.session.returnTo = req.headers.referer || '/';
      next();
    },
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      // Ensure user session is properly set
      if (req.user) {
        req.session.userId = (req.user as any).id;
        req.session.isAdmin = (req.user as any).isAdmin || false;
        req.session.save((err) => {
          if (err) {
            console.error("Error saving session:", err);
          }
          const returnTo = req.session.returnTo || '/';
          delete req.session.returnTo;
          res.redirect(returnTo);
        });
      } else {
        res.redirect("/login?error=google_auth_failed");
      }
    }
  );

  // Facebook OAuth routes
  app.get(
    "/api/auth/facebook",
    (req, res, next) => {
      // Store the original URL in the session for redirection after authentication
      req.session.returnTo = req.headers.referer || '/';
      next();
    },
    passport.authenticate("facebook", { scope: ["email"] })
  );

  app.get(
    "/api/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    (req: Request, res: Response) => {
      // Ensure user session is properly set
      if (req.user) {
        req.session.userId = (req.user as any).id;
        req.session.isAdmin = (req.user as any).isAdmin || false;
        req.session.save((err) => {
          if (err) {
            console.error("Error saving session:", err);
          }
          const returnTo = req.session.returnTo || '/';
          delete req.session.returnTo;
          res.redirect(returnTo);
        });
      } else {
        res.redirect("/login?error=facebook_auth_failed");
      }
    }
  );

  // PROPERTIES ROUTES
  
  // Get all properties
  app.get("/api/properties", async (req, res) => {
    try {
      const properties = await storage.getProperties();
      return res.json(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      return res.status(500).json({ error: "Failed to fetch properties" });
    }
  });

  // Get featured properties for homepage
  app.get("/api/properties/featured", async (req, res) => {
    try {
      const properties = await storage.getFeaturedProperties();
      return res.json(properties);
    } catch (error) {
      console.error("Error fetching featured properties:", error);
      return res.status(500).json({ message: "Failed to fetch featured properties" });
    }
  });

  // Get property by ID
  app.get("/api/properties/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid property ID" });
      }

      const property = await storage.getPropertyById(id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }

      return res.json(property);
    } catch (error) {
      console.error("Error fetching property:", error);
      return res.status(500).json({ message: "Failed to fetch property" });
    }
  });

  // Search properties
  app.get("/api/properties/search", async (req, res) => {
    try {
      const query = req.query.query as string | undefined;
      const status = req.query.status as string | undefined;
      const propertyType = req.query.type as string | undefined;
      const minPrice = req.query.minPrice ? parseInt(req.query.minPrice as string) : undefined;
      const maxPrice = req.query.maxPrice ? parseInt(req.query.maxPrice as string) : undefined;
      const minBedrooms = req.query.minBeds ? parseInt(req.query.minBeds as string) : undefined;
      const maxBedrooms = req.query.maxBeds ? parseInt(req.query.maxBeds as string) : undefined;
      const minBathrooms = req.query.minBaths ? parseInt(req.query.minBaths as string) : undefined;
      const maxBathrooms = req.query.maxBaths ? parseInt(req.query.maxBaths as string) : undefined;
      const city = req.query.city as string | undefined;
      const state = req.query.state as string | undefined;
      const sortBy = req.query.sortBy as string | undefined;
      const sortOrder = req.query.sortOrder as 'asc' | 'desc' | undefined;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const offset = req.query.offset ? parseInt(req.query.offset as string) : undefined;

      const properties = await storage.searchProperties({
        query,
        status,
        propertyType,
        minPrice,
        maxPrice,
        minBedrooms,
        maxBedrooms,
        minBathrooms,
        maxBathrooms,
        city,
        state,
        sortBy,
        sortOrder,
        limit,
        offset
      });

      return res.json(properties);
    } catch (error) {
      console.error("Error searching properties:", error);
      return res.status(500).json({ message: "Failed to search properties" });
    }
  });

  // Create property (admin only)
  app.post("/api/properties", requireAdmin, async (req, res) => {
    try {
      const propertyData = schema.propertySchema.parse(req.body);
      const newProperty = await storage.createProperty(propertyData);
      return res.status(201).json(newProperty);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error creating property:", error);
      return res.status(500).json({ message: "Failed to create property" });
    }
  });

  // Update property (admin only)
  app.put("/api/properties/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid property ID" });
      }

      const property = await storage.getPropertyById(id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }

      const propertyData = schema.propertySchema.partial().parse(req.body);
      const updatedProperty = await storage.updateProperty(id, propertyData);
      return res.json(updatedProperty);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error updating property:", error);
      return res.status(500).json({ message: "Failed to update property" });
    }
  });

  // Delete property (admin only)
  app.delete("/api/properties/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid property ID" });
      }

      const property = await storage.getPropertyById(id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }

      await storage.deleteProperty(id);
      return res.status(200).json({ message: "Property deleted successfully" });
    } catch (error) {
      console.error("Error deleting property:", error);
      return res.status(500).json({ message: "Failed to delete property" });
    }
  });

  // Update property status (admin only)
  app.put("/api/properties/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({ error: "Status is required" });
      }

      const updatedProperty = await storage.updateProperty(id, { status });
      return res.json(updatedProperty);
    } catch (error) {
      console.error("Error updating property status:", error);
      return res.status(500).json({ error: "Failed to update property status" });
    }
  });

  // PROPERTY IMAGES ROUTES
  
  // Add property image (admin only)
  app.post("/api/properties/:id/images", requireAdmin, async (req, res) => {
    try {
      const propertyId = parseInt(req.params.id);
      if (isNaN(propertyId)) {
        return res.status(400).json({ error: "Invalid property ID" });
      }

      const property = await storage.getPropertyById(propertyId);
      if (!property) {
        return res.status(404).json({ error: "Property not found" });
      }

      // Create the image data object
      const imageData = {
        propertyId,
        imageUrl: req.body.imageUrl,
        caption: req.body.caption,
        displayOrder: req.body.displayOrder || 0
      };
      
      // Validate the data using the schema
      const validatedData = schema.propertyImageSchema.parse(imageData);

      const newImage = await storage.addPropertyImage(validatedData);
      return res.status(201).json(newImage);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error adding property image:", error);
      return res.status(500).json({ message: "Failed to add property image" });
    }
  });

  // Delete property image (admin only)
  app.delete("/api/property-images/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid image ID" });
      }

      await storage.deletePropertyImage(id);
      return res.status(200).json({ message: "Image deleted successfully" });
    } catch (error) {
      console.error("Error deleting property image:", error);
      return res.status(500).json({ message: "Failed to delete property image" });
    }
  });

  // EMAIL SUBSCRIPTION ROUTES
  
  // Add email subscription
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      const subscription = await storage.addEmailSubscription(email);
      return res.json(subscription);
    } catch (error) {
      console.error("Error creating subscription:", error);
      return res.status(500).json({ error: "Failed to create subscription" });
    }
  });

  // Get all email subscriptions (admin only)
  app.get("/api/email-subscriptions", requireAdmin, async (req, res) => {
    try {
      const subscriptions = await storage.getEmailSubscriptions();
      return res.json(subscriptions);
    } catch (error) {
      console.error("Error fetching email subscriptions:", error);
      return res.status(500).json({ message: "Failed to fetch email subscriptions" });
    }
  });

  // CASH OFFER REQUEST ROUTES
  
  // Submit cash offer request
  app.post("/api/cash-offer-requests", async (req, res) => {
    try {
      const requestData = req.body;
      const newRequest = await storage.createCashOfferRequest(requestData);
      return res.status(201).json(newRequest);
    } catch (error) {
      console.error("Error creating cash offer request:", error);
      return res.status(500).json({ error: "Failed to create cash offer request" });
    }
  });

  // Get all cash offer requests (admin only)
  app.get("/api/cash-offer-requests", requireAdmin, async (req, res) => {
    try {
      const requests = await storage.getCashOfferRequests();
      return res.json(requests);
    } catch (error) {
      console.error("Error fetching cash offer requests:", error);
      return res.status(500).json({ message: "Failed to fetch cash offer requests" });
    }
  });

  // Update cash offer request status (admin only)
  app.put("/api/cash-offer-requests/:id/status", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid request ID" });
      }

      const statusSchema = z.object({
        status: z.enum(["new", "contacted", "in_progress", "completed", "declined"])
      });

      const { status } = statusSchema.parse(req.body);
      const updatedRequest = await storage.updateProperty(id, { status });
      return res.json(updatedRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error updating cash offer request status:", error);
      return res.status(500).json({ message: "Failed to update cash offer request status" });
    }
  });

  // TESTIMONIALS ROUTES
  
  // Get testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      return res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // RENTAL APPLICATIONS ROUTES
  
  // Get user's rental application
  app.get("/api/rental-applications/my-application", requireAuth, async (req, res) => {
    try {
      const userId = req.session.userId!;
      const application = await storage.getUserRentalApplication(userId);
      return res.json(application || null);
    } catch (error) {
      console.error("Error fetching rental application:", error);
      return res.status(500).json({ message: "Failed to fetch rental application" });
    }
  });
  
  // Submit a rental application
  app.post("/api/rental-applications", isAuthenticated, async (req: RequestWithFile, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      
      const userId = req.user.id;
      const { propertyId, ...applicationData } = req.body;
      
      if (!propertyId) {
        return res.status(400).json({ error: "Property ID is required" });
      }
      
      const propertyIdNum = parseInt(propertyId);
      if (isNaN(propertyIdNum)) {
        return res.status(400).json({ error: "Invalid property ID" });
      }
      
      const application = await storage.createRentalApplication({
        userId,
        propertyId: propertyIdNum,
        ...applicationData,
        status: "pending"
      });
      
      res.status(201).json(application);
    } catch (error) {
      console.error("Error submitting rental application:", error);
      res.status(500).json({ error: "Failed to submit rental application" });
    }
  });
  
  // Get all rental applications (admin only)
  app.get("/api/admin/rental-applications", requireAdmin, async (req, res) => {
    try {
      // Since we don't have a direct method to get all applications, we'll query users and their applications
      const users = await prisma.user.findMany({
        include: {
          rentalApplications: {
            include: {
              submissions: true,
              documents: true
            }
          }
        }
      });
      
      // Extract all applications from users
      const applications = users.flatMap((user: { 
        id: number; 
        username: string; 
        email: string; 
        name: string | null;
        rentalApplications: any[] 
      }) => 
        user.rentalApplications.map((app: any) => ({
          ...app,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            name: user.name
          }
        }))
      );
      
      return res.json(applications);
    } catch (error) {
      console.error("Error fetching rental applications:", error);
      return res.status(500).json({ error: "Failed to fetch rental applications" });
    }
  });
  
  // Get specific rental application details
  app.get("/api/rental-applications/:id", isAuthenticated, async (req: RequestWithFile, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid application ID" });
      }
      
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      
      const application = await storage.getRentalApplicationById(id);
      
      if (!application) {
        return res.status(404).json({ error: "Application not found" });
      }
      
      // Ensure users can only access their own applications unless they're admins
      if (application.userId !== userId && !req.user?.isAdmin) {
        return res.status(403).json({ error: "Forbidden" });
      }
      
      res.json(application);
    } catch (error) {
      console.error("Error fetching rental application:", error);
      res.status(500).json({ error: "Failed to fetch rental application" });
    }
  });
  
  // Submit application to a property
  app.post("/api/rental-applications/:applicationId/submit", requireAuth, async (req: RequestWithFile, res: Response) => {
    try {
      const applicationId = parseInt(req.params.applicationId);
      if (isNaN(applicationId)) {
        return res.status(400).json({ message: "Invalid application ID" });
      }
      
      const application = await storage.getRentalApplicationById(applicationId);
      
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      
      // Only allow the application owner to submit
      if (application.userId !== req.session.userId) {
        return res.status(403).json({ message: "Unauthorized to submit this application" });
      }
      
      const submissionSchema = z.object({
        propertyId: z.number(),
        message: z.string().optional(),
      });
      
      const { propertyId, message } = submissionSchema.parse(req.body);
      
      // Check if property exists
      const property = await storage.getPropertyById(propertyId);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      
      // Check if rental property
      if (!property.isRental) {
        return res.status(400).json({ message: "Property is not available for rent" });
      }
      
      // Check if already submitted
      const existingSubmission = await storage.getApplicationSubmission(applicationId);
      if (existingSubmission) {
        return res.status(400).json({ message: "Already applied to this property" });
      }
      
      const submission = await storage.createApplicationSubmission({
        applicationId,
        propertyId,
        message: message || null,
        status: 'pending'
      });
      
      return res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid submission data", errors: error.errors });
      }
      console.error("Error submitting application:", error);
      return res.status(500).json({ message: "Failed to submit application" });
    }
  });
  
  // Get user's application submissions
  app.get("/api/rental-applications/my-submissions", requireAuth, async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.session.userId!;
      const submissions = await storage.getUserApplicationSubmissions(userId);
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching application submissions:", error);
      return res.status(500).json({ message: "Failed to fetch application submissions" });
    }
  });
  
  // Update application submission status (admin only)
  app.put("/api/application-submissions/:id/status", requireAdmin, async (req: RequestWithFile, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const { status, notes } = req.body;
      const reviewedById = req.user?.id || 0; // Default to 0 if undefined

      if (!status) {
        return res.status(400).json({ error: "Status is required" });
      }

      const updatedSubmission = await storage.reviewApplicationSubmission(id, reviewedById, status, notes);
      return res.json(updatedSubmission);
    } catch (error) {
      console.error("Error updating application submission status:", error);
      return res.status(500).json({ error: "Failed to update application submission status" });
    }
  });
  
  // Upload document for application
  app.post("/api/rental-applications/:applicationId/documents", requireAuth, async (req: RequestWithFile, res: Response) => {
    try {
      const applicationId = parseInt(req.params.applicationId);
      if (isNaN(applicationId)) {
        return res.status(400).json({ message: "Invalid application ID" });
      }
      
      const application = await storage.getRentalApplicationById(applicationId);
      
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      
      // Only allow the application owner to upload documents
      if (application.userId !== req.session.userId) {
        return res.status(403).json({ message: "Unauthorized to modify this application" });
      }
      
      const documentSchema = z.object({
        documentType: z.string(),
        documentUrl: z.string().url(),
        fileName: z.string(),
        fileSize: z.number().int().positive(),
      });
      
      const documentData = documentSchema.parse(req.body);
      
      const document = await storage.addApplicationDocument({
        applicationId,
        ...documentData
      });
      
      return res.status(201).json(document);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid document data", errors: error.errors });
      }
      console.error("Error uploading document:", error);
      return res.status(500).json({ message: "Failed to upload document" });
    }
  });
  
  // Get documents for an application
  app.get("/api/rental-applications/:applicationId/documents", requireAuth, async (req: RequestWithFile, res: Response) => {
    try {
      const applicationId = parseInt(req.params.applicationId);
      if (isNaN(applicationId)) {
        return res.status(400).json({ message: "Invalid application ID" });
      }
      
      const application = await storage.getRentalApplicationById(applicationId);
      
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      
      // Only allow admin or the application owner to view documents
      if (!req.session.isAdmin && application.userId !== req.session.userId) {
        return res.status(403).json({ message: "Unauthorized to view these documents" });
      }
      
      const documents = await storage.getApplicationDocuments(applicationId);
      return res.json(documents);
    } catch (error) {
      console.error("Error fetching application documents:", error);
      return res.status(500).json({ message: "Failed to fetch application documents" });
    }
  });

  // AUTH ROUTES
  
  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    try {
      const loginSchema = z.object({
        username: z.string().min(1),
        password: z.string().min(1)
      });

      const { username, password } = loginSchema.parse(req.body);
      const admin = await storage.authenticateAdmin(username, password);

      if (!admin) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Set session
      req.session.userId = admin.id;
      req.session.isAdmin = admin.isAdmin;

      return res.status(200).json({ 
        id: admin.id,
        username: admin.username,
        email: admin.email,
        name: admin.name,
        isAdmin: admin.isAdmin
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error during login:", error);
      return res.status(500).json({ message: "Login failed" });
    }
  });

  // Admin logout
  app.post("/api/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      return res.status(200).json({ message: "Logged out successfully" });
    });
  });

  // Get current session user
  app.get("/api/me", (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    
    return res.json({
      isAuthenticated: true,
      isAdmin: req.session.isAdmin
    });
  });

  // Configure multer for file uploads
  const fileStorage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
      const uploadDir = join(__dirname, "../uploads/avatars");
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      
      cb(null, uploadDir);
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
      // Generate unique filename with original extension
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = file.originalname.split(".").pop() || "";
      cb(null, uniqueSuffix + "." + ext);
    }
  });

  // File filter to only allow image files
  const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  // Configure upload middleware
  const upload = multer({
    storage: fileStorage,
    fileFilter,
    limits: {
      fileSize: 2 * 1024 * 1024, // 2MB max file size
    },
  });

  // User profile routes
  app.get("/api/user/profile", isAuthenticated, async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }
      
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          email: true,
          name: true,
          avatar: true,
          isAdmin: true,
        },
      });
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      
      res.json(user);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      res.status(500).json({ error: "Failed to fetch user profile" });
    }
  });

  // Update user profile
  app.put("/api/user/profile", isAuthenticated, upload.single("avatar"), async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      const { name, username, email } = req.body;
      
      // Update user profile in database
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          name: name || undefined,
          username: username || undefined,
          email: email || undefined,
          // If a new avatar was uploaded, update the avatar field
          avatar: req.file ? `/uploads/avatars/${req.file.filename}` : 
                 req.body.removeAvatar === "true" ? null : undefined
        }
      });

      // Return updated user data (excluding password)
      const { password, ...userWithoutPassword } = updatedUser;
      res.json(userWithoutPassword);
    } catch (error) {
      console.error("Error updating user profile:", error);
      res.status(500).json({ error: "Failed to update profile" });
    }
  });

  // Upload avatar
  app.post("/api/user/avatar", isAuthenticated, upload.single("avatar"), async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      // Update user with new avatar path
      const avatarPath = `/uploads/avatars/${req.file.filename}`;
      
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { avatar: avatarPath }
      });

      // Return the avatar path
      res.json({ avatar: avatarPath });
    } catch (error) {
      console.error("Error uploading avatar:", error);
      res.status(500).json({ error: "Failed to upload avatar" });
    }
  });

  // Change password
  app.post("/api/user/change-password", isAuthenticated, async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.user?.id;
      const { currentPassword, newPassword } = req.body;
      
      if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }
      
      if (!currentPassword || !newPassword) {
        return res.status(400).json({ error: "Current password and new password are required" });
      }
      
      // Get user with password
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, password: true },
      });
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      
      // Verify current password
      const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
      
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Current password is incorrect" });
      }
      
      // Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      
      // Update password
      await prisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
      });
      
      res.json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error changing password:", error);
      res.status(500).json({ error: "Failed to change password" });
    }
  });

  // Get connected social accounts
  app.get("/api/user/social-accounts", isAuthenticated, async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }
      
      // In a real app, you would fetch notification settings from the database
      // For now, we'll return default settings
      
      res.json({
        google: false,
        facebook: false,
      });
    } catch (error) {
      console.error("Error fetching social accounts:", error);
      res.status(500).json({ error: "Failed to fetch social accounts" });
    }
  });

  // Export user data
  app.get("/api/user/export-data", isAuthenticated, async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }
      
      // Get user data
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          email: true,
          name: true,
          avatar: true,
          isAdmin: true,
          createdAt: true,
        },
      });
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      
      // Get additional user data like properties, applications, etc.
      // For now, we'll just return the user data
      
      res.json({
        user,
        properties: [],
        applications: [],
        // Add more data as needed
      });
    } catch (error) {
      console.error("Error exporting user data:", error);
      res.status(500).json({ error: "Failed to export user data" });
    }
  });

  // Deactivate account
  app.post("/api/user/deactivate", isAuthenticated, async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }
      
      // In a real application, you might want to:
      // 1. Mark the user as deactivated rather than deleting
      // 2. Schedule deletion for a future date (e.g., 30 days)
      // 3. Remove sensitive data
      
      // For this example, we'll just mark the user as deactivated
      await prisma.user.update({
        where: { id: userId },
        data: {
          // Add a deactivated field to your schema
          // deactivated: true,
          // For now, we'll just update the name to indicate deactivation
          name: "Deactivated User",
        },
      });
      
      // Clear session
      req.logout((err) => {
        if (err) {
          console.error("Error logging out:", err);
          return res.status(500).json({ error: "Failed to logout" });
        }
        
        res.json({ message: "Account deactivated successfully" });
      });
    } catch (error) {
      console.error("Error deactivating account:", error);
      res.status(500).json({ error: "Failed to deactivate account" });
    }
  });

  // Get notification settings
  app.get("/api/user/notification-settings", isAuthenticated, async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }
      
      // In a real app, you would fetch notification settings from the database
      // For now, we'll return default settings
      
      res.json({
        email: {
          marketing: true,
          propertyUpdates: true,
          applicationUpdates: true,
          accountSecurity: true,
        },
      });
    } catch (error) {
      console.error("Error fetching notification settings:", error);
      res.status(500).json({ error: "Failed to fetch notification settings" });
    }
  });

  // Update notification settings
  app.put("/api/user/notification-settings", isAuthenticated, async (req: RequestWithFile, res: Response) => {
    try {
      const userId = req.user?.id;
      const settings = req.body;
      
      if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }
      
      // Validate settings
      if (!settings || !settings.email) {
        return res.status(400).json({ error: "Invalid notification settings" });
      }
      
      // In a real app, you would save these settings to the database
      // For now, we'll just return success
      
      res.json({
        message: "Notification settings updated successfully",
        settings,
      });
    } catch (error) {
      console.error("Error updating notification settings:", error);
      res.status(500).json({ error: "Failed to update notification settings" });
    }
  });

  // Serve static files from uploads directory
  app.use("/uploads", express.static(join(__dirname, "../uploads")));

  const httpServer = createServer(app);
  return httpServer;
}
