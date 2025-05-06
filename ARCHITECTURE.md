# Rural Housings - Architecture Documentation

## Overview

Rural Housings is a full-stack web application designed to showcase rural properties for sale and rent. The application follows a modern architecture with a clear separation of concerns between the client and server components.

## Tech Stack

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: React Context API for auth state
- **Data Fetching**: TanStack Query (React Query)
- **UI Components**: ShadCN UI (built on Radix UI primitives)
- **Styling**: TailwindCSS
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Sonner toast notifications

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL (via Neon Database)
- **ORM**: Prisma
- **Authentication**: Passport.js with local, Google, and Facebook strategies
- **File Storage**: Local file system (for avatars and property images)
- **API**: RESTful API endpoints

### Development Tools
- **Package Manager**: pnpm
- **Build Tool**: Vite
- **TypeScript**: For type safety across the entire application

## System Architecture

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│  React Client   │◄────►│  Express Server │◄────►│  PostgreSQL DB  │
│                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

### Client Architecture

The client follows a feature-based organization with shared components:

```
client/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # Base UI components from ShadCN
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   └── admin/        # Admin-specific components
│   ├── hooks/            # Custom React hooks
│   │   └── use-auth.tsx  # Authentication hook
│   ├── lib/              # Utility functions and configurations
│   ├── pages/            # Page components
│   │   ├── account/      # Account settings pages
│   │   ├── admin/        # Admin dashboard pages
│   │   └── ...           # Other pages
│   ├── App.tsx           # Main application component with routing
│   └── main.tsx          # Entry point
```

### Server Architecture

The server follows a modular architecture with clear separation of concerns:

```
server/
├── index.ts              # Entry point
├── routes.ts             # API route definitions
├── auth.ts               # Authentication logic
├── storage.ts            # Data access logic
└── prisma.ts             # Prisma client initialization
```

### Database Schema

The database schema is defined using Prisma and includes the following main entities:

- **User**: Stores user information including authentication details
- **Property**: Stores property listings with details and images
- **PropertyImage**: Stores images associated with properties
- **Testimonial**: Stores customer testimonials
- **RentalApplication**: Stores rental application templates
- **ApplicationSubmission**: Stores submitted rental applications
- **CashOfferRequest**: Stores requests for cash offers on properties

## Authentication Flow

1. **Local Authentication**:
   - User submits username/password
   - Server validates credentials
   - Session is created on successful authentication

2. **Social Authentication** (Google/Facebook):
   - User initiates OAuth flow
   - Server handles OAuth callback
   - User account is created or linked
   - Session is created on successful authentication

## Data Flow

1. **Property Listing**:
   - Admin creates/updates property listings
   - Images are uploaded and stored
   - Properties are displayed to users based on filters

2. **Rental Applications**:
   - Users browse rental properties
   - Users submit rental applications
   - Admins review and manage applications

3. **User Account Management**:
   - Users can update profile information
   - Users can upload avatars
   - Users can manage notification preferences
   - Users can connect social accounts

## File Storage

- **Property Images**: Stored in `/uploads/properties`
- **User Avatars**: Stored in `/uploads/avatars`
- **Application Documents**: Stored in `/uploads/documents`

## API Endpoints

The application exposes RESTful API endpoints for:

- Authentication and user management
- Property listing and management
- Rental application submission and management
- Testimonial submission and display
- Cash offer requests

## Deployment Architecture

The application is designed to be deployed as a single Node.js application serving both the API and static frontend assets. In production, it can be deployed to:

- Traditional hosting (VPS)
- Container platforms (Docker)
- Serverless environments (with appropriate adaptations)

## Future Architecture Considerations

- Implement a CDN for image delivery
- Move file storage to cloud storage (S3, Google Cloud Storage)
- Add WebSocket support for real-time notifications
- Implement a microservice architecture for better scalability
