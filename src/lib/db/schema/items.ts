import { doublePrecision, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const items = pgTable('items', {
  id: serial().primaryKey(),
  name: text().notNull(),
  weight: doublePrecision().notNull(), // in grams
  description: text(),
  url: text(),
  imageUrl: text(),
  // price
})
