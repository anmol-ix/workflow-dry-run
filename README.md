# DelhiMart OS

> Marketplace Operations System (CommerceOS) for a hyperlocal multi-vendor marketplace.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start API server (runs on http://localhost:3001)
pnpm dev

# Verify health endpoint
curl http://localhost:3001/health
# Expected: {"status":"ok"}
```

## Project Structure

```
├── apps/
│   ├── api/     # Backend API (Express + TypeScript)
│   └── web/     # Frontend web app (React + Vite) [placeholder]
├── docs/        # Mintlify documentation [placeholder]
└── package.json # Root workspace config
```

## API Endpoints

| Method | Path      | Description         | Response              |
|--------|-----------|---------------------|-----------------------|
| GET    | `/health` | Health check        | `{"status":"ok"}`     |

## Development

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 9.0.0

### Running the API

```bash
pnpm dev
```

The API runs on `http://localhost:3001` by default. Set `PORT` env var to change.

### Testing

```bash
# Start the API first, then in another terminal:
pnpm test
```

### CORS Configuration

The API includes permissive CORS headers for local development:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, OPTIONS`

**Note for Frontend (INN-21):** The web app can call the API directly during development. For production, configure proper CORS origins or use a reverse proxy.

## Related Linear Issues

- **INN-20**: Backend health endpoint (this PR)
- **INN-21**: Frontend home page
- **INN-22**: UI/UX design
- **INN-23**: Mintlify documentation
- **INN-24**: MVP Epic

## Spec

See [Notion: DelhiMart OS — MVP Slice](https://www.notion.so/2d85b82eaa2f8073a8f7e3bb3ba3ac73)
