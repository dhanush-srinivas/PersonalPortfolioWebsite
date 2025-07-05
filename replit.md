# Portfolio Website Architecture

## Overview

This is a modern full-stack portfolio website built with React and Express.js. The application uses a client-server architecture with TypeScript throughout, featuring a professional portfolio showcase with sections for about, recommendations, leadership, awards, certifications, projects, skills, and experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Session-based (connect-pg-simple for session storage)
- **API**: RESTful API design with `/api` prefix
- **Development**: Hot reloading with Vite integration in development mode

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema**: Located in `shared/schema.ts` for type sharing between client and server
- **Database**: PostgreSQL (configured for Neon Database via `@neondatabase/serverless`)
- **Migrations**: Handled by Drizzle Kit with migrations stored in `./migrations`

### UI Component System
- **Component Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with "new-york" style configuration
- **Theme**: CSS custom properties for consistent theming with portfolio-specific color palette
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Storage Interface
- **Abstract Storage**: `IStorage` interface for flexible data persistence
- **In-Memory Storage**: `MemStorage` class for development/testing
- **Database Storage**: Ready for PostgreSQL implementation via Drizzle
- **User Management**: Basic user CRUD operations defined

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage interface
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: PostgreSQL stores persistent data via Drizzle ORM
5. **Response**: JSON responses flow back through the same chain

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **wouter**: Lightweight React router

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Production**: Single Node.js process serves both static files and API

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reloading
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: `DATABASE_URL` environment variable required

### Scripts
- `dev`: Start development server with hot reloading
- `build`: Build both client and server for production
- `start`: Start production server
- `check`: TypeScript type checking
- `db:push`: Push database schema changes

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```