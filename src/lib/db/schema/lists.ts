import {
  boolean,
  doublePrecision,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  unique,
} from 'drizzle-orm/pg-core'
import { users } from './auth'
import { timestamps } from './timestamps'

export const lists = pgTable(
  'lists',
  {
    id: serial().primaryKey(),
    ...timestamps,
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    name: text().notNull(),
    slug: text().notNull(),
    description: text().notNull(),
    public: boolean().notNull(),
  },
  (table) => [unique().on(table.userId, table.slug)],
)

export const categories = pgTable('categories', {
  id: serial().primaryKey(),
  listId: integer()
    .notNull()
    .references(() => lists.id, { onDelete: 'cascade' }),
  order: doublePrecision().notNull(),
  name: text().notNull(),
  description: text().notNull(),
})

export const labelEnum = pgEnum('label', ['worn', 'consumable'])

export const items = pgTable('items', {
  id: serial().primaryKey(),
  categoryId: integer()
    .notNull()
    .references(() => categories.id, { onDelete: 'cascade' }),
  order: doublePrecision().notNull(),
  name: text().notNull(),
  description: text().notNull(),
  label: labelEnum(),
  weight: doublePrecision().notNull(), // in grams for now
  quantity: integer().notNull(),
})
