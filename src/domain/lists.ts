import { and, eq, isNotNull } from 'drizzle-orm'
import { db } from '@/lib/db'
import type { UserId } from '@/lib/db/schema'
import schema from '@/lib/db/schema'

export function getListsForUser(userId: UserId) {
  return db.query.lists.findMany({
    where: and(
      eq(schema.lists.userId, userId),
      isNotNull(schema.lists.deletedAt),
    ),
  })
}
