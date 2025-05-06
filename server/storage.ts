import bcrypt from 'bcryptjs';
import prisma from './prisma';

// Storage methods for database access
export default {
  // User methods
  async getUserByUsernameOrEmail(usernameOrEmail: string) {
    return prisma.user.findFirst({
      where: {
        OR: [
          { username: usernameOrEmail },
          { email: usernameOrEmail }
        ]
      }
    });
  },

  async createUser(userData: {
    username: string;
    password: string;
    email: string;
    name?: string;
    isAdmin?: boolean;
  }) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword
      }
    });
  },

  async getUserById(id: number) {
    return prisma.user.findUnique({
      where: { id }
    });
  },

  // Property methods
  async getProperties() {
    const properties = await prisma.property.findMany({
      include: {
        images: {
          orderBy: {
            displayOrder: 'asc'
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return properties;
  },

  async getFeaturedProperties() {
    const properties = await prisma.property.findMany({
      where: {
        displayOnHomepage: true
      },
      include: {
        images: {
          orderBy: {
            displayOrder: 'asc'
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return properties;
  },

  async getPropertyById(id: number) {
    const property = await prisma.property.findUnique({
      where: { id },
      include: {
        images: {
          orderBy: {
            displayOrder: 'asc'
          }
        },
        createdBy: true
      }
    });
    return property;
  },

  async searchProperties(searchParams: {
    query?: string;
    city?: string;
    state?: string;
    minPrice?: number;
    maxPrice?: number;
    minBedrooms?: number;
    maxBedrooms?: number;
    minBathrooms?: number;
    maxBathrooms?: number;
    propertyType?: string;
    status?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    limit?: number;
    offset?: number;
  }) {
    // Build the where clause based on search parameters
    const where: any = {};
    
    if (searchParams.query) {
      where.OR = [
        { title: { contains: searchParams.query, mode: 'insensitive' } },
        { description: { contains: searchParams.query, mode: 'insensitive' } },
        { address: { contains: searchParams.query, mode: 'insensitive' } },
        { city: { contains: searchParams.query, mode: 'insensitive' } }
      ];
    }
    
    if (searchParams.city) {
      where.city = { equals: searchParams.city, mode: 'insensitive' };
    }
    
    if (searchParams.state) {
      where.state = { equals: searchParams.state, mode: 'insensitive' };
    }
    
    if (searchParams.minPrice) {
      where.price = { ...where.price, gte: searchParams.minPrice };
    }
    
    if (searchParams.maxPrice) {
      where.price = { ...where.price, lte: searchParams.maxPrice };
    }
    
    if (searchParams.minBedrooms) {
      where.bedrooms = { ...where.bedrooms, gte: searchParams.minBedrooms };
    }
    
    if (searchParams.maxBedrooms) {
      where.bedrooms = { ...where.bedrooms, lte: searchParams.maxBedrooms };
    }
    
    if (searchParams.minBathrooms) {
      where.bathrooms = { ...where.bathrooms, gte: searchParams.minBathrooms };
    }
    
    if (searchParams.maxBathrooms) {
      where.bathrooms = { ...where.bathrooms, lte: searchParams.maxBathrooms };
    }
    
    if (searchParams.propertyType) {
      where.propertyType = { equals: searchParams.propertyType };
    }
    
    if (searchParams.status) {
      where.status = { equals: searchParams.status };
    }
    
    // Build the orderBy clause
    let orderBy: any = { createdAt: 'desc' };
    
    if (searchParams.sortBy) {
      const sortOrder = searchParams.sortOrder || 'asc';
      
      switch (searchParams.sortBy) {
        case 'price':
          orderBy = { price: sortOrder };
          break;
        case 'bedrooms':
          orderBy = { bedrooms: sortOrder };
          break;
        case 'bathrooms':
          orderBy = { bathrooms: sortOrder };
          break;
        case 'createdAt':
          orderBy = { createdAt: sortOrder };
          break;
        case 'updatedAt':
          orderBy = { updatedAt: sortOrder };
          break;
        case 'title':
          orderBy = { title: sortOrder };
          break;
      }
    }
    
    // Execute the query with pagination
    const properties = await prisma.property.findMany({
      where,
      orderBy,
      skip: searchParams.offset,
      take: searchParams.limit,
      include: {
        images: {
          orderBy: {
            displayOrder: 'asc'
          }
        }
      }
    });
    
    return properties;
  },

  async createProperty(propertyData: any) {
    return prisma.property.create({
      data: propertyData,
      include: {
        images: true
      }
    });
  },

  async updateProperty(id: number, propertyData: any) {
    return prisma.property.update({
      where: { id },
      data: propertyData,
      include: {
        images: true
      }
    });
  },

  async deleteProperty(id: number) {
    // Property images will be deleted automatically due to the cascade delete in the schema
    return prisma.property.delete({
      where: { id }
    });
  },

  // Property Image methods
  async addPropertyImage(imageData: any) {
    return prisma.propertyImage.create({
      data: imageData
    });
  },

  async deletePropertyImage(id: number) {
    return prisma.propertyImage.delete({
      where: { id }
    });
  },

  async updatePropertyImageOrder(id: number, displayOrder: number) {
    return prisma.propertyImage.update({
      where: { id },
      data: { displayOrder }
    });
  },

  // Email Subscription methods
  async addEmailSubscription(email: string) {
    return prisma.emailSubscription.create({
      data: { email }
    });
  },

  async getEmailSubscriptions() {
    return prisma.emailSubscription.findMany({
      where: { isActive: true }
    });
  },

  // Cash Offer Request methods
  async createCashOfferRequest(requestData: any) {
    return prisma.cashOfferRequest.create({
      data: requestData
    });
  },

  async getCashOfferRequests() {
    return prisma.cashOfferRequest.findMany({
      orderBy: { createdAt: 'desc' }
    });
  },

  // Testimonial methods
  async createTestimonial(testimonialData: any) {
    return prisma.testimonial.create({
      data: testimonialData
    });
  },

  async getTestimonials() {
    return prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    });
  },

  // Admin authentication helper (simplified for demo)
  async authenticateAdmin(username: string, password: string) {
    const user = await prisma.user.findFirst({
      where: {
        username,
        isAdmin: true
      }
    });
    
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    
    return null;
  },

  // Rental Application methods
  async createRentalApplication(applicationData: any) {
    return prisma.rentalApplication.create({
      data: applicationData
    });
  },

  async getRentalApplicationById(id: number) {
    return prisma.rentalApplication.findUnique({
      where: { id },
      include: {
        documents: true,
        submissions: true
      }
    });
  },

  async getUserRentalApplication(userId: number) {
    return prisma.rentalApplication.findFirst({
      where: { userId },
      include: {
        documents: true,
        submissions: true
      }
    });
  },

  async updateRentalApplication(id: number, applicationData: any) {
    return prisma.rentalApplication.update({
      where: { id },
      data: applicationData,
      include: {
        documents: true,
        submissions: true
      }
    });
  },

  // Application Document methods
  async addApplicationDocument(documentData: any) {
    return prisma.applicationDocument.create({
      data: documentData
    });
  },

  async getApplicationDocuments(applicationId: number) {
    return prisma.applicationDocument.findMany({
      where: { applicationId },
      orderBy: { uploadedAt: 'desc' }
    });
  },

  // Application Submission methods
  async createApplicationSubmission(submissionData: any) {
    return prisma.applicationSubmission.create({
      data: submissionData
    });
  },

  async getApplicationSubmission(id: number) {
    return prisma.applicationSubmission.findUnique({
      where: { id },
      include: {
        application: true
      }
    });
  },

  async getUserApplicationSubmissions(userId: number) {
    return prisma.applicationSubmission.findMany({
      where: {
        application: {
          userId
        }
      },
      include: {
        application: true
      },
      orderBy: { createdAt: 'desc' }
    });
  },

  async updateApplicationSubmission(id: number, submissionData: any) {
    return prisma.applicationSubmission.update({
      where: { id },
      data: submissionData,
      include: {
        application: true
      }
    });
  },

  async reviewApplicationSubmission(id: number, reviewedById: number, status: string, notes?: string) {
    return prisma.applicationSubmission.update({
      where: { id },
      data: {
        status,
        notes,
        reviewedById,
        reviewedAt: new Date()
      },
      include: {
        application: true,
        reviewedBy: true
      }
    });
  }
};
