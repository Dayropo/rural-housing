import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as schema from "@shared/schema";
import { z } from "zod";
import session from "express-session";
import { ZodError } from "zod-validation-error";

declare module "express-session" {
  interface SessionData {
    userId: number;
    isAdmin: boolean;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup sessions
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "rural-homes-secret",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: process.env.NODE_ENV === "production", maxAge: 7 * 24 * 60 * 60 * 1000 } // 1 week
    })
  );

  // Auth middleware
  const requireAuth = (req: Request, res: Response, next: Function) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  };

  const requireAdmin = (req: Request, res: Response, next: Function) => {
    if (!req.session.userId || !req.session.isAdmin) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };

  // PROPERTIES ROUTES
  
  // Get all properties
  app.get("/api/properties", async (req, res) => {
    try {
      const properties = await storage.getAllProperties();
      return res.json(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      return res.status(500).json({ message: "Failed to fetch properties" });
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
      const query = req.query.q as string | undefined;
      const status = req.query.status as string | undefined;
      const type = req.query.type as string | undefined;
      const minPrice = req.query.minPrice ? parseInt(req.query.minPrice as string) : undefined;
      const maxPrice = req.query.maxPrice ? parseInt(req.query.maxPrice as string) : undefined;
      const minBeds = req.query.minBeds ? parseInt(req.query.minBeds as string) : undefined;
      const minBaths = req.query.minBaths ? parseInt(req.query.minBaths as string) : undefined;
      const isRental = req.query.isRental ? req.query.isRental === "true" : undefined;

      const properties = await storage.searchProperties({
        query,
        status,
        type,
        minPrice,
        maxPrice,
        minBeds,
        minBaths,
        isRental
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
      const propertyData = schema.insertPropertySchema.parse(req.body);
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

      const propertyData = schema.insertPropertySchema.partial().parse(req.body);
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
  app.patch("/api/properties/:id/status", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid property ID" });
      }

      const statusSchema = z.object({
        status: z.enum(["available", "pending", "sold", "rented"])
      });

      const { status } = statusSchema.parse(req.body);
      const updatedProperty = await storage.updatePropertyStatus(id, status);
      return res.json(updatedProperty);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error updating property status:", error);
      return res.status(500).json({ message: "Failed to update property status" });
    }
  });

  // PROPERTY IMAGES ROUTES
  
  // Add property image (admin only)
  app.post("/api/properties/:id/images", requireAdmin, async (req, res) => {
    try {
      const propertyId = parseInt(req.params.id);
      if (isNaN(propertyId)) {
        return res.status(400).json({ message: "Invalid property ID" });
      }

      const property = await storage.getPropertyById(propertyId);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }

      const imageSchema = schema.insertPropertyImageSchema.omit({ id: true });
      const imageData = imageSchema.parse({
        ...req.body,
        propertyId
      });

      const newImage = await storage.addPropertyImage(imageData);
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
        return res.status(400).json({ message: "Invalid image ID" });
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
  app.post("/api/email-subscriptions", async (req, res) => {
    try {
      const subscriptionSchema = schema.insertEmailSubscriptionSchema.pick({ email: true });
      const subscriptionData = subscriptionSchema.parse(req.body);
      
      const newSubscription = await storage.addEmailSubscription({
        ...subscriptionData,
        isActive: true
      });
      
      return res.status(201).json(newSubscription);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error adding email subscription:", error);
      return res.status(500).json({ message: "Failed to add email subscription" });
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
      const requestSchema = schema.insertCashOfferRequestSchema.omit({ id: true, status: true, createdAt: true, updatedAt: true });
      const requestData = requestSchema.parse(req.body);
      
      const newRequest = await storage.addCashOfferRequest({
        ...requestData,
        status: "new"
      });
      
      return res.status(201).json(newRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error submitting cash offer request:", error);
      return res.status(500).json({ message: "Failed to submit cash offer request" });
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
  app.patch("/api/cash-offer-requests/:id/status", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid request ID" });
      }

      const statusSchema = z.object({
        status: z.enum(["new", "contacted", "in_progress", "completed", "declined"])
      });

      const { status } = statusSchema.parse(req.body);
      const updatedRequest = await storage.updateCashOfferRequestStatus(id, status);
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
  
  // Get active testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getActiveTestimonials();
      return res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ message: "Failed to fetch testimonials" });
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

  const httpServer = createServer(app);
  return httpServer;
}
