import {
  doublePrecision,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
} from 'drizzle-orm/pg-core'
import { users } from './auth'
import { items } from './items'

export const privacyEnum = pgEnum('privacy', ['private', 'unlisted', 'public'])

export const lists = pgTable('lists', {
  id: serial().primaryKey(),
  userId: text()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text().notNull(),
  privacy: privacyEnum(),
})

export const categories = pgTable('categories', {
  id: serial().primaryKey(),
  listId: integer()
    .notNull()
    .references(() => lists.id),
  name: text().notNull(),
  description: text(),
  order: doublePrecision(),
  // color
})

export const labelEnum = pgEnum('label', ['worn', 'consumable'])

export const categoryItems = pgTable('category_items', {
  id: serial().primaryKey(),
  categoryId: integer()
    .notNull()
    .references(() => categories.id),
  itemId: integer()
    .notNull()
    .references(() => items.id),
  label: labelEnum(),
  quantity: integer().notNull(),
})
