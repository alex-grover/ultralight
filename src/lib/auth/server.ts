import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { anonymous, username } from 'better-auth/plugins'
import { db } from '@/lib/db'
import { env } from '@/lib/env'

export const auth = betterAuth({
  baseURL: env.VERCEL_URL,
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [anonymous(), nextCookies(), username()],
})
