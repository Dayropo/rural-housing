# Architecture Overview

## Overview

RuralHomes is a full-stack web application for rural property listings. It provides functionality for browsing and filtering properties, submitting inquiries, and managing property listings through an admin interface. The application is built using a modern JavaScript/TypeScript stack with React for the frontend and Express.js for the backend.

## System Architecture

The application follows a monorepo structure with client-side and server-side code in a single repository. This architecture allows for shared types and schemas between frontend and backend, ensuring type safety across the entire application.

### High-Level Architecture

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│  React Client   │◄────►│  Express Server │◄────►│  PostgreSQL DB  │
│                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

The system is organized into three main layers:

1. **Client Layer**: React-based frontend with component-based architecture
2. **Server Layer**: Express.js API server handling business logic and data validation
3. **Data Layer**: PostgreSQL database (using Neon's serverless offering) accessed through Drizzle ORM

## Key Components

### Frontend Architecture

The frontend is built with React and organized as follows:

1. **Page Components**: Components representing full application pages (`/client/src/pages/`)
2. **UI Components**: Reusable UI elements, many from shadcn/ui library (`/client/src/components/ui/`)
3. **Feature Components**: Domain-specific components organized by feature
4. **Hooks**: Custom React hooks for shared logic (`/client/src/hooks/`)
5. **Utilities**: Helper functions and constants (`/client/src/lib/`)

Key technologies:
- React for UI rendering
- Tailwind CSS for styling
- shadcn/ui for component library
- React Query for data fetching and state management
- React Hook Form for form handling
- Zod for validation

### Backend Architecture

The backend is an Express.js server structured as follows:

1. **API Routes**: RESTful endpoints in `/server/routes.ts`
2. **Data Access Layer**: Database operations abstracted in `/server/storage.ts`
3. **Authentication**: Session-based authentication implemented with express-session
4. **Middleware**: Express middleware for routing, logging, and error handling

### Database Schema

The application uses Drizzle ORM with a PostgreSQL database. The schema includes:

1. **Users**: Authentication and user management
2. **Properties**: Real estate listings with details like price, location, etc.
3. **PropertyImages**: Images associated with property listings
4. **EmailSubscriptions**: Newsletter subscribers
5. **CashOfferRequests**: User inquiries about selling properties

The schema is defined in `/shared/schema.ts` and includes both table definitions and Zod validation schemas for API endpoints.

## Data Flow

### Read Flow

1. Client makes a request to fetch data (e.g., property listings)
2. Request is processed by React Query and sent to appropriate API endpoint
3. Express server routes the request to the appropriate handler
4. Server retrieves data from PostgreSQL via Drizzle ORM
5. Data is returned to client and cached by React Query
6. UI is updated with fetched data

### Write Flow

1. User submits a form (e.g., property creation in admin panel)
2. Form data is validated on the client using Zod and React Hook Form
3. Validated data is sent to appropriate API endpoint
4. Server validates the data again using shared Zod schemas
5. If valid, data is persisted to the database through Drizzle ORM
6. Success/error response is returned to client
7. Client updates UI and invalidates relevant queries

### Authentication Flow

1. User submits login credentials
2. Server validates credentials against stored user data
3. On successful authentication, server creates a session
4. Session ID is stored in a cookie on the client
5. Subsequent requests include the session cookie for authentication
6. Protected routes check for valid session before processing requests

## External Dependencies

### Frontend Dependencies

- **@tanstack/react-query**: Data fetching and state management
- **@hookform/resolvers**: Form validation with Zod
- **@radix-ui/react-\***: UI primitive components
- **class-variance-authority**: Component variant management
- **wouter**: Lightweight routing solution
- **react-helmet**: Document head management

### Backend Dependencies

- **express**: Web server framework
- **express-session**: Session management
- **@neondatabase/serverless**: PostgreSQL database client
- **drizzle-orm**: TypeScript ORM
- **zod**: Schema validation

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

1. **Build Process**:
   - Frontend: Vite bundles React code
   - Backend: esbuild transpiles TypeScript to JavaScript

2. **Runtime Environment**:
   - Node.js server hosts both the API and serves the static frontend assets
   - Environmental variables for database connection and session management

3. **Database**:
   - Uses Neon serverless PostgreSQL
   - Database URL provided via environment variable

4. **Continuous Integration**:
   - No explicit CI tools in the repository
   - Replit handles deployment via the configuration in `.replit`

5. **Scalability Considerations**:
   - Uses serverless database for automatic scaling
   - Static assets are built and served by the Express server

## Development Workflow

1. Local development using `npm run dev`
2. Database schema changes managed with Drizzle migrations
3. Seed data available for local testing
4. TypeScript for type safety across the entire codebase
5. Shared schemas between frontend and backend ensure consistency