import { db } from "./index";
import * as schema from "@shared/schema";
import { eq } from "drizzle-orm";

async function seed() {
  try {
    console.log("Seeding database...");

    // Check if admin user exists
    const existingAdmin = await db.query.users.findFirst({
      where: eq(schema.users.username, "admin")
    });

    // Create admin user if it doesn't exist
    if (!existingAdmin) {
      console.log("Creating admin user...");
      await db.insert(schema.users).values({
        username: "admin",
        password: "admin123", // In a real app, this should be hashed
        email: "admin@ruralhomes.com",
        name: "Admin User",
        isAdmin: true
      });
    }

    // Seed properties if none exist
    const existingProperties = await db.query.properties.findMany({
      limit: 1
    });

    if (existingProperties.length === 0) {
      console.log("Seeding properties...");
      
      // Create sample properties
      const properties = [
        {
          title: "Charming Farmhouse on 5 Acres",
          address: "123 Country Lane",
          city: "Rural County",
          state: "ST",
          zipCode: "12345",
          price: 275000,
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 1850,
          description: "Charming farmhouse on 5 acres with barn, perfect for country living with modern amenities.",
          propertyType: "farmhouse",
          status: "available",
          isRental: false,
          featuredImage: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          acres: "5",
          yearBuilt: 1965,
          displayOnHomepage: true
        },
        {
          title: "Cozy Log Cabin in the Woods",
          address: "456 Forest Road",
          city: "Woodland",
          state: "ST",
          zipCode: "54321",
          price: 199500,
          bedrooms: 2,
          bathrooms: 1,
          squareFeet: 1100,
          description: "Cozy log cabin nestled in 3 acres of woodland with a stream running through the property.",
          propertyType: "cabin",
          status: "pending",
          isRental: false,
          featuredImage: "https://images.unsplash.com/photo-1595521624992-36a5229ef740?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          acres: "3",
          yearBuilt: 1990,
          displayOnHomepage: true
        },
        {
          title: "Country Cottage for Rent",
          address: "789 Meadow Way",
          city: "Greenfield",
          state: "ST",
          zipCode: "67890",
          price: 0,
          rentalPrice: 1250,
          bedrooms: 2,
          bathrooms: 1,
          squareFeet: 900,
          description: "Charming cottage for rent with garden space and mountain views. Pet-friendly.",
          propertyType: "cottage",
          status: "rented",
          isRental: true,
          featuredImage: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          acres: "0.5",
          yearBuilt: 1945,
          displayOnHomepage: true
        },
        {
          title: "Spacious Country Home with Modern Amenities",
          address: "101 Rural Route",
          city: "Countryside",
          state: "ST",
          zipCode: "34567",
          price: 349000,
          bedrooms: 4,
          bathrooms: 3,
          squareFeet: 2400,
          description: "Spacious country home with modern amenities, large kitchen, and beautiful views of surrounding farmland.",
          propertyType: "house",
          status: "available",
          isRental: false,
          featuredImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          acres: "2",
          yearBuilt: 2005,
          displayOnHomepage: false
        },
        {
          title: "Historic Farmhouse with Original Features",
          address: "222 Heritage Lane",
          city: "Old Town",
          state: "ST",
          zipCode: "45678",
          price: 299000,
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 1750,
          description: "Historic farmhouse with many original features including hardwood floors, exposed beams, and stone fireplace.",
          propertyType: "farmhouse",
          status: "available",
          isRental: false,
          featuredImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          acres: "1.5",
          yearBuilt: 1920,
          displayOnHomepage: false
        }
      ];

      // Insert properties
      for (const property of properties) {
        const [newProperty] = await db.insert(schema.properties).values(property).returning();
        
        // Add additional images for each property
        const images = [
          {
            propertyId: newProperty.id,
            imageUrl: newProperty.featuredImage,
            displayOrder: 1,
            caption: "Exterior view"
          },
          {
            propertyId: newProperty.id,
            imageUrl: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            displayOrder: 2,
            caption: "Living room"
          },
          {
            propertyId: newProperty.id,
            imageUrl: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            displayOrder: 3,
            caption: "Kitchen area"
          }
        ];
        
        await db.insert(schema.propertyImages).values(images);
      }
    }

    // Seed testimonials if none exist
    const existingTestimonials = await db.query.testimonials.findMany({
      limit: 1
    });

    if (existingTestimonials.length === 0) {
      console.log("Seeding testimonials...");
      
      const testimonials = [
        {
          name: "John & Sarah T.",
          location: "Purchased in Greenfield",
          rating: 5,
          comment: "We found our dream farmhouse through RuralHomes. The process was so smooth, and we love our new country lifestyle!",
          isActive: true
        },
        {
          name: "Michael R.",
          location: "Sold in Oak Valley",
          rating: 4,
          comment: "Selling our rural property was easier than we expected. We got a fair price and the team was very professional.",
          isActive: true
        },
        {
          name: "Jessica L.",
          location: "Renting in Riverside",
          rating: 5,
          comment: "We're renting a beautiful country cottage through RuralHomes and the application process was simple and fast.",
          isActive: true
        }
      ];
      
      await db.insert(schema.testimonials).values(testimonials);
    }

    console.log("Seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
