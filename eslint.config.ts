import { dirname } from 'path'
import { fileURLToPath } from 'url'
import config from '@alex-grover/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig } from 'eslint/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default defineConfig([
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  ...config.map((entry) =>
    entry.plugins
      ? {
          ...entry,
          plugins: Object.fromEntries(
            Object.entries(entry.plugins).filter(([name]) => name !== 'import'),
          ),
        }
      : entry,
  ),
])
