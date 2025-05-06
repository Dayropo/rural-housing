# Changelog

All notable changes to the Rural Housings project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- User avatar upload functionality
- Account settings page with multiple sections
- Profile page to display user information
- Social login integration (Google, Facebook)

## [1.0.0] - 2025-05-06

### Changed
- Migrated from Drizzle ORM to Prisma
- Updated all database queries to use Prisma's API
- Replaced toast notifications with Sonner
- Improved TypeScript type definitions throughout the application

### Added
- User authentication with Passport.js
- Property management for administrators
- Rental application submission system
- Testimonial display on homepage
- Responsive design for all device sizes

### Fixed
- TypeScript errors in various components
- Avatar upload and display functionality
- Account settings navigation
- Header menu to reflect user authentication state

## [0.2.0] - 2025-04-15

### Added
- Property listing and detail pages
- Admin dashboard for property management
- Image upload functionality for properties
- Search and filter functionality for properties
- Rental application form

### Changed
- Improved UI with ShadCN components
- Enhanced responsive design
- Optimized database queries

## [0.1.0] - 2025-03-20

### Added
- Initial project setup
- Basic Express server configuration
- React client with Vite
- Database connection with Drizzle ORM
- Authentication system (local strategy)
- Basic UI components with TailwindCSS
- Homepage with featured properties
- User registration and login

### Changed
- Switched from npm to pnpm for package management
- Improved project structure
- Enhanced TypeScript configuration

## Project Setup Notes

### Tech Stack
- Frontend: React, TypeScript, TailwindCSS, ShadCN UI, TanStack Query
- Backend: Node.js, Express, Prisma
- Database: PostgreSQL (Neon Database)
- Authentication: Passport.js
- Package Manager: pnpm

### Key Features
- Property listings for rural homes
- Rental application system
- Admin dashboard for property management
- User accounts with profile management
- Responsive design for all devices
