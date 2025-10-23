import { headers } from 'next/headers'
import { getListsForUser } from '@/domain/lists'
import { auth } from '@/lib/auth/server'
import type { UserId } from '@/lib/db/schema'
import { Lists } from './lists'
import styles from './page.module.css'

export default async function HomePage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const lists = await getListsForUser(session?.user.id as UserId | undefined)

  return (
    <>
      <header className={styles['header']}>Ultralight</header>
      <main className={styles['main']}>
        <h1>Your lists</h1>
        <Lists initialLists={lists} />
      </main>
    </>
  )
}
