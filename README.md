# Neural Solutions

A premium AI automation agency website built with React, TypeScript, and Tailwind CSS.

## Prerequisites

Before running this project, ensure you have one of the following installed:

- **Node.js** (v18 or higher) with npm
- **Bun** (alternative package manager)

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd Neural_solutions
   ```

2. **Install dependencies**:

   Using npm:
   ```bash
   npm install
   ```

   Or using Bun:
   ```bash
   bun install
   ```

## Running the Project

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

Or with Bun:
```bash
bun run dev
```

The application will be available at: **http://localhost:8080**

### Production Build

Build the project for production:

```bash
npm run build
```

Or with Bun:
```bash
bun run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

Or with Bun:
```bash
bun run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library
- **React Router** - Client-side routing
- **React Query** - Server state management
- **Vitest** - Unit testing
- **Playwright** - E2E testing

## Project Structure

```
src/
├── pages/          # Page components (Index, Services, About, etc.)
├── components/     # Reusable components
│   ├── sections/   # Landing page sections
│   └── ui/         # shadcn/ui components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Images and static assets
```

## Documentation

For detailed technical specifications, see [spec.md](./spec.md).

## Contact

- **Email:** hello@neuralsolutions.dev
- **Website:** Neural Solutions
