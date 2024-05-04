import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Connect to the database

const sql = neon("postgresql://neons_owner:mctaI4DPG6XZ@ep-tiny-butterfly-a56bgaps.us-east-2.aws.neon.tech/celebrity-crushes?sslmode=require");
export const db = drizzle(sql, {schema});