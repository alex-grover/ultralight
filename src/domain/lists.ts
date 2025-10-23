import { and, eq, isNotNull } from 'drizzle-orm'
import { db } from '@/lib/db'
import schema from '@/lib/db/schema'

export function getListsForUser(userId: string) {
  return db.query.lists.findMany({
    where: and(
      eq(schema.lists.userId, userId),
      isNotNull(schema.lists.deletedAt),
    ),
  })
}
