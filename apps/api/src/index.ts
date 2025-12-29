import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// CORS middleware for local development
// Frontend (apps/web) will run on a different port and needs CORS
app.use((_req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/**
 * GET /health
 * Returns the health status of the API.
 * Response: { "status": "ok" }
 */
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🚀 DelhiMart API running at http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/health`);
});
