import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core'

const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  deletedAt: timestamp(),
}

export const users = pgTable('users', {
  id: text().primaryKey(),
  ...timestamps,
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: boolean().default(false).notNull(),
  image: text(),
  username: text().unique(),
  displayUsername: text(),
  isAnonymous: boolean(),
})

export const sessions = pgTable('sessions', {
  id: text().primaryKey(),
  ...timestamps,
  expiresAt: timestamp().notNull(),
  token: text().notNull().unique(),
  ipAddress: text(),
  userAgent: text(),
  userId: text()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

export const accounts = pgTable('accounts', {
  id: text().primaryKey(),
  ...timestamps,
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: text()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  accessTokenExpiresAt: timestamp(),
  refreshTokenExpiresAt: timestamp(),
  scope: text(),
  password: text(),
})

export const verifications = pgTable('verifications', {
  id: text().primaryKey(),
  ...timestamps,
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp().notNull(),
})
