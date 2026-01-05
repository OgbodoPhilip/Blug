import 'dotenv/config'; // Make sure this is at the top!
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    // If you use 'url', Drizzle parses the whole string. 
    // If you use 'host', 'user', etc., it expects individual parts.
    url: process.env.DATABASE_URL!,
  },
});