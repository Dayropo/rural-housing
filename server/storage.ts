import { db } from "@db";
import * as schema from "@shared/schema";
import { eq, and, desc, asc, inArray, sql, like, or } from "drizzle-orm";
import { 
  InsertEmailSubscription, 
  InsertCashOfferRequest, 
  InsertProperty, 
  InsertPropertyImage,
  InsertRentalApplication,
  InsertApplicationSubmission,
  InsertApplicationDocument
} from "@shared/schema";

export const storage = {
  // Property related functions
  async getAllProperties() {
    return db.query.properties.findMany({
      orderBy: [desc(schema.properties.createdAt)],
      with: {
        images: {
          orderBy: [asc(schema.propertyImages.displayOrder)],
        },
      },
    });
  },

  async getFeaturedProperties() {
    return db.query.properties.findMany({
      where: eq(schema.properties.displayOnHomepage, true),
      orderBy: [desc(schema.properties.createdAt)],
      with: {
        images: {
          orderBy: [asc(schema.propertyImages.displayOrder)],
        },
      },
    });
  },

  async getPropertyById(id: number) {
    return db.query.properties.findFirst({
      where: eq(schema.properties.id, id),
      with: {
        images: {
          orderBy: [asc(schema.propertyImages.displayOrder)],
        },
      },
    });
  },

  async searchProperties(searchParams: {
    query?: string;
    status?: string;
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    minBeds?: number;
    minBaths?: number;
    isRental?: boolean;
  }) {
    let baseQuery = db.select().from(schema.properties);

    // Apply search query
    if (searchParams.query) {
      baseQuery = baseQuery.where(
        or(
          like(schema.properties.title, `%${searchParams.query}%`),
          like(schema.properties.address, `%${searchParams.query}%`),
          like(schema.properties.city, `%${searchParams.query}%`),
          like(schema.properties.state, `%${searchParams.query}%`),
          like(schema.properties.zipCode, `%${searchParams.query}%`),
          like(schema.properties.description, `%${searchParams.query}%`)
        )
      );
    }

    // Apply filters
    if (searchParams.status && searchParams.status !== 'all') {
      baseQuery = baseQuery.where(eq(schema.properties.status, searchParams.status));
    }

    if (searchParams.type && searchParams.type !== 'all') {
      baseQuery = baseQuery.where(eq(schema.properties.propertyType, searchParams.type));
    }

    if (searchParams.minPrice) {
      baseQuery = baseQuery.where(sql`${schema.properties.price} >= ${searchParams.minPrice}`);
    }

    if (searchParams.maxPrice) {
      baseQuery = baseQuery.where(sql`${schema.properties.price} <= ${searchParams.maxPrice}`);
    }

    if (searchParams.minBeds) {
      baseQuery = baseQuery.where(sql`${schema.properties.bedrooms} >= ${searchParams.minBeds}`);
    }

    if (searchParams.minBaths) {
      baseQuery = baseQuery.where(sql`${schema.properties.bathrooms} >= ${searchParams.minBaths}`);
    }

    if (searchParams.isRental !== undefined) {
      baseQuery = baseQuery.where(eq(schema.properties.isRental, searchParams.isRental));
    }

    // Execute query
    const properties = await baseQuery.orderBy(desc(schema.properties.createdAt));

    // Get images for all properties
    const propertyIds = properties.map(p => p.id);
    const allImages = await db.query.propertyImages.findMany({
      where: inArray(schema.propertyImages.propertyId, propertyIds),
      orderBy: [asc(schema.propertyImages.displayOrder)],
    });

    // Group images by property ID
    const imagesByPropertyId = allImages.reduce((acc, img) => {
      if (!acc[img.propertyId]) {
        acc[img.propertyId] = [];
      }
      acc[img.propertyId].push(img);
      return acc;
    }, {} as Record<number, typeof allImages>);

    // Combine properties with their images
    return properties.map(property => ({
      ...property,
      images: imagesByPropertyId[property.id] || [],
    }));
  },

  async createProperty(property: InsertProperty) {
    const [newProperty] = await db.insert(schema.properties).values(property).returning();
    return newProperty;
  },

  async updateProperty(id: number, property: Partial<InsertProperty>) {
    const [updatedProperty] = await db
      .update(schema.properties)
      .set({ ...property, updatedAt: new Date() })
      .where(eq(schema.properties.id, id))
      .returning();
    return updatedProperty;
  },

  async deleteProperty(id: number) {
    // Property images will be deleted automatically due to ON DELETE CASCADE
    return db.delete(schema.properties).where(eq(schema.properties.id, id)).returning();
  },

  async updatePropertyStatus(id: number, status: string) {
    const [updatedProperty] = await db
      .update(schema.properties)
      .set({ status, updatedAt: new Date() })
      .where(eq(schema.properties.id, id))
      .returning();
    return updatedProperty;
  },

  // Property Images related functions
  async addPropertyImage(image: InsertPropertyImage) {
    const [newImage] = await db.insert(schema.propertyImages).values(image).returning();
    return newImage;
  },

  async deletePropertyImage(id: number) {
    return db.delete(schema.propertyImages).where(eq(schema.propertyImages.id, id)).returning();
  },

  async getPropertyImages(propertyId: number) {
    return db.query.propertyImages.findMany({
      where: eq(schema.propertyImages.propertyId, propertyId),
      orderBy: [asc(schema.propertyImages.displayOrder)],
    });
  },

  // Email Subscriptions
  async addEmailSubscription(subscription: InsertEmailSubscription) {
    try {
      const [newSubscription] = await db
        .insert(schema.emailSubscriptions)
        .values(subscription)
        .returning();
      return newSubscription;
    } catch (error) {
      // Handle duplicate email
      if ((error as any).code === '23505') {
        // Already exists, return existing
        return db.query.emailSubscriptions.findFirst({
          where: eq(schema.emailSubscriptions.email, subscription.email),
        });
      }
      throw error;
    }
  },

  async getEmailSubscriptions() {
    return db.query.emailSubscriptions.findMany({
      where: eq(schema.emailSubscriptions.isActive, true),
      orderBy: [desc(schema.emailSubscriptions.createdAt)],
    });
  },

  // Cash Offer Requests
  async addCashOfferRequest(request: InsertCashOfferRequest) {
    const [newRequest] = await db.insert(schema.cashOfferRequests).values(request).returning();
    return newRequest;
  },

  async getCashOfferRequests() {
    return db.query.cashOfferRequests.findMany({
      orderBy: [desc(schema.cashOfferRequests.createdAt)],
    });
  },

  async updateCashOfferRequestStatus(id: number, status: string) {
    const [updatedRequest] = await db
      .update(schema.cashOfferRequests)
      .set({ status, updatedAt: new Date() })
      .where(eq(schema.cashOfferRequests.id, id))
      .returning();
    return updatedRequest;
  },

  // Testimonials
  async getActiveTestimonials() {
    return db.query.testimonials.findMany({
      where: eq(schema.testimonials.isActive, true),
      orderBy: [desc(schema.testimonials.createdAt)],
    });
  },

  // Admin authentication helper (simplified for demo)
  async authenticateAdmin(username: string, password: string) {
    const user = await db.query.users.findFirst({
      where: and(
        eq(schema.users.username, username),
        eq(schema.users.password, password),
        eq(schema.users.isAdmin, true)
      ),
    });
    return user;
  },

  // Rental Application methods
  async getUserRentalApplication(userId: number) {
    return db.query.rentalApplications.findFirst({
      where: eq(schema.rentalApplications.userId, userId),
      orderBy: [desc(schema.rentalApplications.updatedAt)]
    });
  },

  async createRentalApplication(application: InsertRentalApplication) {
    const [newApplication] = await db.insert(schema.rentalApplications).values(application).returning();
    return newApplication;
  },

  async updateRentalApplication(id: number, application: Partial<InsertRentalApplication>) {
    const [updatedApplication] = await db
      .update(schema.rentalApplications)
      .set({ ...application, updatedAt: new Date() })
      .where(eq(schema.rentalApplications.id, id))
      .returning();
    return updatedApplication;
  },

  async getRentalApplicationById(id: number) {
    return db.query.rentalApplications.findFirst({
      where: eq(schema.rentalApplications.id, id)
    });
  },

  async getAllRentalApplications() {
    return db.query.rentalApplications.findMany({
      orderBy: [desc(schema.rentalApplications.createdAt)],
      with: {
        user: true
      }
    });
  },

  // Application Submission methods
  async createApplicationSubmission(submission: InsertApplicationSubmission) {
    const [newSubmission] = await db.insert(schema.applicationSubmissions).values(submission).returning();
    return newSubmission;
  },

  async getApplicationSubmission(applicationId: number, propertyId: number) {
    return db.query.applicationSubmissions.findFirst({
      where: and(
        eq(schema.applicationSubmissions.applicationId, applicationId),
        eq(schema.applicationSubmissions.propertyId, propertyId)
      )
    });
  },

  async getUserApplicationSubmissions(userId: number) {
    // First get the user's applications
    const applications = await db.query.rentalApplications.findMany({
      where: eq(schema.rentalApplications.userId, userId)
    });

    if (applications.length === 0) {
      return [];
    }

    const applicationIds = applications.map(app => app.id);

    // Then get all submissions for those applications
    const submissions = await db.query.applicationSubmissions.findMany({
      where: inArray(schema.applicationSubmissions.applicationId, applicationIds),
      orderBy: [desc(schema.applicationSubmissions.createdAt)],
      with: {
        property: {
          with: {
            images: {
              where: eq(schema.propertyImages.displayOrder, 1)
            }
          }
        },
        application: true
      }
    });

    return submissions;
  },

  async updateApplicationSubmissionStatus(id: number, updateData: {
    status: string;
    message: string | null;
    reviewedById: number;
    reviewedAt: Date;
  }) {
    const [updatedSubmission] = await db
      .update(schema.applicationSubmissions)
      .set({
        status: updateData.status,
        message: updateData.message,
        reviewedById: updateData.reviewedById,
        reviewedAt: updateData.reviewedAt,
        updatedAt: new Date()
      })
      .where(eq(schema.applicationSubmissions.id, id))
      .returning();
    return updatedSubmission;
  },

  // Application Document methods
  async addApplicationDocument(document: InsertApplicationDocument) {
    const [newDocument] = await db.insert(schema.applicationDocuments).values(document).returning();
    return newDocument;
  },

  async getApplicationDocuments(applicationId: number) {
    return db.query.applicationDocuments.findMany({
      where: eq(schema.applicationDocuments.applicationId, applicationId),
      orderBy: [desc(schema.applicationDocuments.uploadedAt)]
    });
  }
};
