import { Cross2Icon, ValueNoneIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import styles from './sidebar.module.css'
import { SidebarTrigger } from './trigger'

export function Sidebar() {
  return (
    <aside className={styles['aside']}>
      <div className={styles['header']}>
        <h1 className={styles['heading']}>
          <ValueNoneIcon className={styles['icon']} />
          Ultralight
        </h1>
        <SidebarTrigger className={styles['trigger']}>
          <Cross2Icon />
        </SidebarTrigger>
      </div>
      <div className={styles['content']}>
        <div className={styles['label']}>Lists</div>
        <ul className={styles['lists']}>
          {[
            { id: 1, name: 'Test List' },
            { id: 2, name: 'Test List 2' },
            { id: 3, name: 'Test List 3' },
          ].map((list) => (
            <li key={list.id} className={styles['list']}>
              <Link
                href={`/lists/${list.id.toString()}`}
                className={styles['link']}
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>TODO: footer (profile, sign out, theme toggle, settings)</div>
    </aside>
  )
}
