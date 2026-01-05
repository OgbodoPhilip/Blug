import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import ws from 'ws';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in environment variables');
}

// This line resolves the warning by providing the WebSocket engine for Node.js
if (process.env.NODE_ENV === 'development') {
  neonConfig.webSocketConstructor = ws;
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });