import { Cross2Icon, PlusIcon, ValueNoneIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { ColorSchemePicker } from '@/components/color-scheme'
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
        <div className={styles['section']}>
          <div className={styles['label']}>Lists</div>
          <button className={styles['button']}>
            <PlusIcon />
          </button>
        </div>
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
      <div>
        TODO: footer (profile, sign out, theme toggle, settings)
        <ColorSchemePicker />
      </div>
    </aside>
  )
}
