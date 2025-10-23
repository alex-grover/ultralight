import type { InferSelectModel } from 'drizzle-orm'
import { createInsertSchema } from 'drizzle-zod'
import { NextResponse } from 'next/server'
import type { z } from 'zod'
import { createList, getListsForUser } from '@/domain/lists'
import { auth } from '@/lib/auth/server'
import schema from '@/lib/db/schema'
import type { UserId } from '@/lib/db/schema'

export type GetListsResponse = InferSelectModel<typeof schema.lists>[]

export async function GET(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers })
  if (!session) return NextResponse.json<GetListsResponse>([])

  const lists = await getListsForUser(session.user.id as UserId)

  return NextResponse.json<GetListsResponse>(lists)
}

const CreateListSchema = createInsertSchema(schema.lists).omit({
  userId: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
})
export type CreateListInput = z.infer<typeof CreateListSchema>
export type CreateListResponse = InferSelectModel<typeof schema.lists>

export async function POST(request: Request) {
  const parseResult = CreateListSchema.safeParse(await request.json())
  if (!parseResult.success) return new Response('Bad request', { status: 400 })

  const session = await auth.api.getSession({ headers: request.headers })

  const list = await createList(
    parseResult.data,
    session?.user.id as UserId | undefined,
  )

  if (!list.ok) return new Response(list.error, { status: 422 })

  return NextResponse.json<CreateListResponse>(list.value, { status: 201 })
}
