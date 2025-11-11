import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { SidebarTrigger } from '@/components/sidebar'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles['container']}>
      <header className={styles['header']}>
        <SidebarTrigger>
          <HamburgerMenuIcon />
        </SidebarTrigger>
        <h1>TODO: edit most recent list</h1>
      </header>
      <main>WIP</main>
    </div>
  )
}
