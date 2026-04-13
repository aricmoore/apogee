import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Link href="/" className={styles.wordmark}>Masthead</Link>
        <nav className={styles.links}>
          <Link href="/" className={styles.link}>Publications</Link>
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="/studio" className={styles.donate}>Studio</Link>
        </nav>
      </div>
    </header>
  )
}