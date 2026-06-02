# Rhema Faith AG Church Website

A server-rendered React Router website for Rhema Faith AG Church. The site includes information about services and ministries, an event listing, a sermon archive, responsive navigation, dark mode, and email-based contact flows.

## Requirements

- Node.js 20 or later
- npm

## Local Development

```bash
npm ci
npm run dev
```

The development server is available at `http://localhost:5173`.

## Available Commands

```bash
npm run dev        # Start the development server with HMR
npm run typecheck  # Generate React Router types and run TypeScript checks
npm run build      # Build the client and SSR server bundles
npm run start      # Start the production server from build/server/index.js
```

## Site Configuration

Shared church details live in `app/config/site.ts`. Replace the starter address, phone number, and email address with verified church information before launch. Pages and components should consume this shared configuration rather than duplicating contact details.

The contact, event-registration, volunteer, prayer-request, and event-update flows deliberately open the visitor's email app. This provides an honest working fallback until a production form-delivery service or backend is configured.

## Content Maintenance

- Homepage hero artwork is stored in `public/images/`.
- Upcoming events are maintained in `app/routes/events.tsx`.
- Sermon archive entries are maintained in `app/routes/sermons.tsx`.
- General church information is maintained in the route files under `app/routes/`.

For frequent content changes, migrate events and sermons to a CMS or database and load them through React Router loaders.

## Production Build

```bash
npm run typecheck
npm run build
npm run start
```

## Docker

```bash
docker build -t rfag .
docker run --rm -p 3000:3000 rfag
```

The container starts the server on port `3000` by default.
