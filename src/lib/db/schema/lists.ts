import {
  boolean,
  doublePrecision,
  integer,
  pgEnum,
  pgTable,
  text,
  unique,
} from 'drizzle-orm/pg-core'
import { z } from 'zod'
import type { UserId } from './auth'
import { users } from './auth'
import { timestamps } from './timestamps'

export const ListIdSchema = z.number().brand('ListId')
export type ListId = z.infer<typeof ListIdSchema>

export const lists = pgTable(
  'lists',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity().$type<ListId>(),
    ...timestamps,
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' })
      .$type<UserId>(),
    name: text().notNull(),
    slug: text().notNull(),
    description: text().notNull(),
    public: boolean().notNull(),
  },
  (table) => [unique().on(table.userId, table.slug)],
)

export const CategoryIdSchema = z.number().brand('CategoryId')
type CategoryId = z.infer<typeof CategoryIdSchema>

export const categories = pgTable('categories', {
  id: integer().primaryKey().generatedAlwaysAsIdentity().$type<CategoryId>(),
  listId: integer()
    .notNull()
    .references(() => lists.id, { onDelete: 'cascade' })
    .$type<ListId>(),
  order: doublePrecision().notNull(),
  name: text().notNull(),
  description: text().notNull(),
})

export const ItemIdSchema = z.number().brand('ItemId')
export type ItemId = z.infer<typeof ItemIdSchema>

export const labelEnum = pgEnum('label', ['worn', 'consumable'])

export const items = pgTable('items', {
  id: integer().primaryKey().generatedAlwaysAsIdentity().$type<ItemId>(),
  categoryId: integer()
    .notNull()
    .references(() => categories.id, { onDelete: 'cascade' })
    .$type<CategoryId>(),
  order: doublePrecision().notNull(),
  name: text().notNull(),
  description: text().notNull(),
  label: labelEnum(),
  weight: doublePrecision().notNull(), // in grams for now
  quantity: integer().notNull(),
})
