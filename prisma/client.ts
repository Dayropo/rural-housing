import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Log environment variables for debugging
console.log('Environment variables in Prisma client:', {
  DATABASE_URL: process.env.DATABASE_URL ? 'Set (value hidden for security)' : 'Not set',
  NODE_ENV: process.env.NODE_ENV,
});

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create a new PrismaClient instance
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

export default prisma;
