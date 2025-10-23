import type { InferSelectModel } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { getListsForUser } from '@/domain/lists'
import { auth } from '@/lib/auth/server'
import type schema from '@/lib/db/schema'

export type GetListsResponse = InferSelectModel<typeof schema.lists>[]

export type GetListsError = string

export async function GET(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers })

  if (!session)
    return NextResponse.json<GetListsError>('Unauthorized', { status: 401 })

  const lists = await getListsForUser(session.user.id)

  return NextResponse.json<GetListsResponse>(lists)
}
