import { err, ok } from '@alex-grover/result'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import type { InferInsertModel } from 'drizzle-orm'
import { db } from '@/lib/db'
import type { UserId } from '@/lib/db/schema'
import schema from '@/lib/db/schema'

export async function createList(
  list: Omit<
    InferInsertModel<typeof schema.lists>,
    'userId' | 'slug' | 'createdAt' | 'updatedAt' | 'deletedAt'
  >,
  userId: UserId,
) {
  const slugify = slugifyWithCounter()

  for (let i = 0; i < 10; i++) {
    const [created] = await db
      .insert(schema.lists)
      .values({ ...list, slug: slugify(list.name), userId })
      .onConflictDoNothing({ target: [schema.lists.userId, schema.lists.slug] })
      .returning()

    if (!created) continue

    return ok(created)
  }

  return err('Unable to create list. Please try a different name.')
}
