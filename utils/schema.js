import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

// Define the schema

export const crushes = pgTable("crushes", {
    id:serial('id').primaryKey(),
    content:varchar('content').notNull(),
    username:varchar('username').notNull(),
    vote:integer('vote').default(0),
    createdAt:varchar('createdAt').notNull()
});