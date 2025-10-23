import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core'
import { z } from 'zod'
import { timestamps } from './timestamps'

export const UserIdSchema = z.string().brand('UserId')
export type UserId = z.infer<typeof UserIdSchema>

export const users = pgTable('users', {
  id: text().primaryKey().$type<UserId>(),
  ...timestamps,
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: boolean().default(false).notNull(),
  image: text(),
  username: text().unique(),
  displayUsername: text(),
  isAnonymous: boolean(),
})

export const SessionIdSchema = z.string().brand('SessionId')
export type SessionId = z.infer<typeof SessionIdSchema>

export const sessions = pgTable('sessions', {
  id: text().primaryKey().$type<SessionId>(),
  ...timestamps,
  expiresAt: timestamp().notNull(),
  token: text().notNull().unique(),
  ipAddress: text(),
  userAgent: text(),
  userId: text()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' })
    .$type<UserId>(),
})

export const AccountIdSchema = z.string().brand('AccountId')
export type AccountId = z.infer<typeof AccountIdSchema>

export const accounts = pgTable('accounts', {
  id: text().primaryKey().$type<AccountId>(),
  ...timestamps,
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: text()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' })
    .$type<UserId>(),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  accessTokenExpiresAt: timestamp(),
  refreshTokenExpiresAt: timestamp(),
  scope: text(),
  password: text(),
})

export const VerificationIdSchema = z.string().brand('VerificationId')
export type VerificationId = z.infer<typeof VerificationIdSchema>

export const verifications = pgTable('verifications', {
  id: text().primaryKey().$type<VerificationId>(),
  ...timestamps,
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp().notNull(),
})
