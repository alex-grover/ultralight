import { headers } from 'next/headers'
import { SWRConfig } from 'swr'
import { getListsForUser } from '@/domain/lists'
import { auth } from '@/lib/auth/server'
import { Lists } from './lists'
import styles from './page.module.css'

export default async function HomePage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const lists = session ? await getListsForUser(session.user.id) : []

  return (
    <>
      <header className={styles['header']}>Ultralight</header>
      <main className={styles['main']}>
        <h1>Your lists</h1>
        <SWRConfig value={{ fallback: { '/api/lists': lists } }}>
          <Lists />
        </SWRConfig>
      </main>
    </>
  )
}
