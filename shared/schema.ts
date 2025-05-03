import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

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

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  name: text("name"),
  isAdmin: boolean("is_admin").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users, {
  username: (schema) => schema.min(3, "Username must be at least 3 characters"),
  password: (schema) => schema.min(6, "Password must be at least 6 characters"),
  email: (schema) => schema.email("Must provide a valid email"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Properties table
export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  price: integer("price").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  squareFeet: integer("square_feet").notNull(),
  description: text("description").notNull(),
  propertyType: text("property_type").notNull(), // house, cabin, land, farm, etc.
  status: text("status").notNull().default("available"), // available, pending, sold, rented
  isRental: boolean("is_rental").default(false).notNull(),
  rentalPrice: integer("rental_price"),
  featuredImage: text("featured_image"), // URL to the main image
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdById: integer("created_by_id").references(() => users.id),
  acres: text("acres"),
  yearBuilt: integer("year_built"),
  displayOnHomepage: boolean("display_on_homepage").default(false).notNull(),
});

export const propertiesRelations = relations(properties, ({ one, many }) => ({
  createdBy: one(users, {
    fields: [properties.createdById],
    references: [users.id],
  }),
  images: many(propertyImages),
}));

// Property Images table
export const propertyImages = pgTable("property_images", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").notNull().references(() => properties.id, { 
    onDelete: "cascade" 
  }),
  imageUrl: text("image_url").notNull(),
  caption: text("caption"),
  displayOrder: integer("display_order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const propertyImagesRelations = relations(propertyImages, ({ one }) => ({
  property: one(properties, {
    fields: [propertyImages.propertyId],
    references: [properties.id],
  }),
}));

// Email Subscriptions table
export const emailSubscriptions = pgTable("email_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isActive: boolean("is_active").default(true).notNull(),
});

// Cash Offer Requests (We Buy Houses)
export const cashOfferRequests = pgTable("cash_offer_requests", {
  id: serial("id").primaryKey(),
  propertyAddress: text("property_address").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message"),
  status: text("status").default("new").notNull(), // new, contacted, in_progress, completed, declined
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Testimonials table
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location"),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Schema validation for properties
export const insertPropertySchema = createInsertSchema(properties, {
  title: (schema) => schema.min(5, "Title must be at least 5 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  price: (schema) => schema.min(0, "Price must be a positive number"),
  zipCode: (schema) => schema.regex(/^\d{5}$/, "ZIP code must be 5 digits"),
});

export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;

// Schema validation for property images
export const insertPropertyImageSchema = createInsertSchema(propertyImages);
export type InsertPropertyImage = z.infer<typeof insertPropertyImageSchema>;
export type PropertyImage = typeof propertyImages.$inferSelect;

// Schema validation for email subscriptions
export const insertEmailSubscriptionSchema = createInsertSchema(emailSubscriptions, {
  email: (schema) => schema.email("Must provide a valid email"),
});
export type InsertEmailSubscription = z.infer<typeof insertEmailSubscriptionSchema>;
export type EmailSubscription = typeof emailSubscriptions.$inferSelect;

// Schema validation for cash offer requests
export const insertCashOfferRequestSchema = createInsertSchema(cashOfferRequests, {
  email: (schema) => schema.email("Must provide a valid email"),
  phone: (schema) => schema.regex(/^\d{10}$/, "Phone number must be 10 digits"),
});
export type InsertCashOfferRequest = z.infer<typeof insertCashOfferRequestSchema>;
export type CashOfferRequest = typeof cashOfferRequests.$inferSelect;

// Schema validation for testimonials
export const insertTestimonialSchema = createInsertSchema(testimonials, {
  rating: (schema) => schema.min(1).max(5, "Rating must be between 1 and 5"),
  comment: (schema) => schema.min(10, "Comment must be at least 10 characters"),
});
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
