'use client'

export async function fetcher<T>(...args: Parameters<typeof fetch>) {
  const res = await fetch(...args)
  if (!res.ok) throw new Error(await res.text()) // eslint-disable-line no-restricted-syntax
  return res.json() as T
}
