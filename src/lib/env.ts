import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod/mini'

export const env = createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string().check(z.minLength(1)),
    BETTER_AUTH_URL: z.url(),
    DATABASE_URL: z.string().check(z.minLength(1)),
  },
  experimental__runtimeEnv: process.env,
})
