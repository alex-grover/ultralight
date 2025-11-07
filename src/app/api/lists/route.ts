import type { InferSelectModel } from 'drizzle-orm'
import { and, eq, isNull } from 'drizzle-orm'
import { createInsertSchema } from 'drizzle-zod'
import { NextResponse } from 'next/server'
import type { z } from 'zod'
import { createList } from '@/domain/lists'
import { auth } from '@/lib/auth/server'
import { db } from '@/lib/db'
import type { UserId } from '@/lib/db/schema'
import schema from '@/lib/db/schema'

export type GetListsResponse = InferSelectModel<typeof schema.lists>[]

export async function GET(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers })
  if (!session) return NextResponse.json<GetListsResponse>([])

  const lists = await db.query.lists.findMany({
    where: and(
      eq(schema.lists.userId, session.user.id as UserId),
      isNull(schema.lists.deletedAt),
    ),
  })

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

  let user = session?.user
  if (!user) {
    const result = await auth.api.signInAnonymous()
    if (!result) return new Response('Failed to create user', { status: 500 })
    user = result.user
  }

  const list = await createList(parseResult.data, user.id as UserId)

  if (!list.ok) return new Response(list.error, { status: 422 })

  return NextResponse.json<CreateListResponse>(list.value, { status: 201 })
}
