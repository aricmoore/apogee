import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>Masthead</Link>
        <nav className={styles.links} aria-label="Main navigation">
          <Link href="/" className={styles.link}>Publications</Link>
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/studio" className={styles.studio}>Studio ↗</Link>
        </nav>
      </div>
    </header>
  )
}