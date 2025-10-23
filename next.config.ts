import type { NextConfig } from 'next'
import packageJson from './package.json'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: Object.keys(packageJson.dependencies).filter((key) =>
    key.startsWith('@alex-grover'),
  ),
}

export default nextConfig
