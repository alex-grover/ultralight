import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string().min(1),
    DATABASE_URL: z.url(),
    DATABASE_URL_UNPOOLED: z.url(),
    VERCEL_URL: z
      .string()
      .transform((url) =>
        url.startsWith('localhost:') ? `http://${url}` : `https://${url}`,
      )
      .pipe(z.url()),
  },
  experimental__runtimeEnv: process.env,
})
