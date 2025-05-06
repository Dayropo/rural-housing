import { z } from "zod";

// Property types and statuses constants
export const PROPERTY_TYPES = [
  { value: "house", label: "House" },
  { value: "cabin", label: "Cabin" },
  { value: "farmhouse", label: "Farmhouse" },
  { value: "cottage", label: "Cottage" },
  { value: "land", label: "Land" },
  { value: "ranch", label: "Ranch" },
  { value: "farm", label: "Farm" }
];

export const PROPERTY_STATUSES = [
  { value: "available", label: "Available" },
  { value: "pending", label: "Pending" },
  { value: "sold", label: "Sold" },
  { value: "rented", label: "Rented" },
  { value: "unavailable", label: "Unavailable" }
];

// Define interfaces for our models
export interface User {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  password?: string;
  email: string;
  name?: string | null;
  isAdmin: boolean;
  avatar?: string | null;
}

// Define the Property type to match the expected structure in the application
export interface Property {
  id: number;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  description: string;
  propertyType: string;
  status: string;
  isRental: boolean;
  rentalPrice?: number | null;
  featuredImage?: string | null;
  createdAt: Date;
  updatedAt: Date;
  createdById?: number | null;
  acres?: string | null;
  yearBuilt?: number | null;
  displayOnHomepage: boolean;
  images?: PropertyImage[];
}

export interface PropertyImage {
  id: number;
  createdAt: Date;
  propertyId: number;
  imageUrl: string;
  caption?: string | null;
  displayOrder: number;
}

export interface EmailSubscription {
  id: number;
  createdAt: Date;
  email: string;
  name?: string | null;
  isActive: boolean;
}

export interface CashOfferRequest {
  id: number;
  createdAt: Date;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  timeframe: string;
  additionalInfo?: string | null;
  status: string;
}

export interface Testimonial {
  id: number;
  createdAt: Date;
  name: string;
  location?: string | null;
  text: string;
  rating: number;
  isApproved: boolean;
  displayOnHomepage: boolean;
}

export interface RentalApplication {
  id: number;
  createdAt: Date;
  title: string;
  description: string;
  fee: number;
  isActive: boolean;
}

export interface ApplicationSubmission {
  id: number;
  createdAt: Date;
  applicationId: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  propertyId?: number | null;
}

export interface ApplicationDocument {
  id: number;
  createdAt: Date;
  submissionId: number;
  documentType: string;
  fileUrl: string;
}

// Zod schemas for validation
export const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
  isAdmin: z.boolean().default(false),
  avatar: z.string().optional().nullable()
});

export const propertySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  address: z.string().min(3, "Address must be at least 3 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  price: z.number().min(1, "Price must be greater than 0"),
  bedrooms: z.number().min(0, "Bedrooms must be 0 or greater"),
  bathrooms: z.number().min(0, "Bathrooms must be 0 or greater"),
  squareFeet: z.number().min(1, "Square feet must be greater than 0"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  propertyType: z.string().min(1, "Property type is required"),
  status: z.string().min(1, "Status is required"),
  isRental: z.boolean(),
  rentalPrice: z.number().optional().nullable(),
  featuredImage: z.string().optional().nullable(),
  acres: z.string().optional().nullable(),
  yearBuilt: z.number().optional().nullable(),
  displayOnHomepage: z.boolean().default(false)
});

export const propertyImageSchema = z.object({
  propertyId: z.number(),
  imageUrl: z.string(),
  caption: z.string().optional(),
  displayOrder: z.number().default(0),
  id: z.number().optional()
});

export const emailSubscriptionSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
  isActive: z.boolean().default(true)
});

export const cashOfferRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  address: z.string().min(3, "Address must be at least 3 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  propertyType: z.string().min(1, "Property type is required"),
  bedrooms: z.number().min(0, "Bedrooms must be 0 or greater"),
  bathrooms: z.number().min(0, "Bathrooms must be 0 or greater"),
  squareFeet: z.number().min(1, "Square feet must be greater than 0"),
  timeframe: z.string().min(1, "Timeframe is required"),
  additionalInfo: z.string().optional().nullable(),
  status: z.string().default("pending")
});

export const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  location: z.string().optional().nullable(),
  text: z.string().min(10, "Testimonial must be at least 10 characters"),
  rating: z.number().min(1, "Rating must be between 1 and 5").max(5, "Rating must be between 1 and 5"),
  isApproved: z.boolean().default(false),
  displayOnHomepage: z.boolean().default(false)
});

export const rentalApplicationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  fee: z.number().min(0, "Fee must be 0 or greater"),
  isActive: z.boolean().default(true)
});

export const applicationSubmissionSchema = z.object({
  applicationId: z.number(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  status: z.string().default("pending"),
  propertyId: z.number().optional().nullable()
});

export const applicationDocumentSchema = z.object({
  submissionId: z.number(),
  documentType: z.string().min(1, "Document type is required"),
  fileUrl: z.string().min(1, "File URL is required")
});

// Backward compatibility aliases for schema validation functions
export const validateUser = userSchema.parse;
export const validateProperty = propertySchema.parse;
export const validatePropertyImage = propertyImageSchema.parse;
export const validateEmailSubscription = emailSubscriptionSchema.parse;
export const validateCashOfferRequest = cashOfferRequestSchema.parse;
export const validateTestimonial = testimonialSchema.parse;
export const validateRentalApplication = rentalApplicationSchema.parse;
export const validateApplicationSubmission = applicationSubmissionSchema.parse;
export const validateApplicationDocument = applicationDocumentSchema.parse;
