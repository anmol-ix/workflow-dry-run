# DelhiMart OS — Web Frontend

Operator-facing frontend for DelhiMart OS.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

The app runs at http://localhost:5173

## API Configuration

The frontend calls the backend `/health` endpoint. In development, requests to `/api/*` are proxied to the backend.

### Option 1: Vite Proxy (Default)

By default, `/api/health` → `http://localhost:3001/health`

The proxy is configured in `vite.config.ts`.

### Option 2: Environment Variable

Set `VITE_API_BASE_URL` to override the backend URL:

```bash
VITE_API_BASE_URL=http://localhost:4000 pnpm dev
```

## States

| State | Display |
|-------|---------|
| Loading | Spinner + "Checking system health..." |
| Success | Green checkmark + "DelhiMart OS: OK" |
| Error | Red icon + error message + Retry button |

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm preview` — Preview production build
