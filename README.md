# Hummingbot Dashboard

A web-based dashboard for monitoring and controlling Hummingbot trading bots, built with Next.js and TypeScript.

## Features

- **Bots**: Monitor bot status, PnL, and performance
- **Portfolio**: View balances across connected exchanges
- **Connectors**: Manage exchange connections and credentials
- **Settings**: Configure API endpoints and notifications

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Custom Properties
- **Validation**: Zod schemas
- **API**: Fetch-based client with error handling

## Architecture

### Folder Structure

```
src/
├── app/                    # Next.js App Router pages
├── features/              # Feature-based modules
│   ├── bots/
│   │   ├── components/
│   │   │   └── BotTable/   # 3-file pattern: .tsx, .module.css, utils.ts
│   │   ├── schemas.ts      # Zod validation schemas
│   │   ├── api.ts         # API calls for this feature
│   │   └── hooks.ts       # React hooks
│   ├── portfolio/
│   └── connectors/
├── services/              # Shared services (API client)
├── utils/                 # Utility functions (formatters)
├── styles/               # Global styles and design tokens
└── config/               # Environment configuration
```

### Component Pattern

Every UI component follows a strict 3-file pattern:

- `Component.tsx` - Render logic only
- `Component.module.css` - Scoped styles
- `utils.ts` - Pure helper functions

## Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment:

```bash
cp .env.example .env
# Edit .env with your Hummingbot API URL
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Configuration

### Environment Variables

- `NEXT_PUBLIC_API_BASE`: Base URL for Hummingbot API (default: http://localhost:8080)

### API Override

You can override the API base URL in the Settings page without restarting the app.

## Current Implementation

### Mock Data

The dashboard currently uses mock data for all features:

- **Bots**: 3 sample bots with different statuses and PnL
- **Portfolio**: Sample balances across Binance and Coinbase
- **Connectors**: Mock connector status and configuration

### TODO: Real API Integration

Replace mock implementations in:

- `src/features/*/api.ts` files
- Uncomment the actual API calls
- Remove mock data arrays

## Development

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### ESLint Rules

- Enforces `@typescript-eslint/consistent-type-imports`
- Prevents deep relative imports across features
- Use absolute imports with `@/` prefix

### Adding New Features

1. Create feature folder in `src/features/`
2. Add schemas, API calls, and hooks
3. Create components using 3-file pattern
4. Add page in `src/app/`

## Acceptance Criteria ✅

- [x] **Bots page** renders table with mock bots, PnL colorization (green/red)
- [x] **Portfolio page** shows formatted USD balances for multiple assets
- [x] **Connectors page** displays list and form with validation
- [x] **Settings page** allows API base URL configuration
- [x] **Component architecture** follows strict 3-file pattern
- [x] **TypeScript** with proper type imports and Zod schemas
- [x] **CSS Modules** with design token system
- [x] **ESLint** enforces import boundaries

## Next Steps

1. **Real API Integration**: Replace mock data with Hummingbot API calls
2. **Bot Actions**: Add start/stop controls in bot table
3. **Real-time Updates**: WebSocket integration for live data
4. **Authentication**: Add login/session management
5. **Telegram Integration**: Complete notification system
