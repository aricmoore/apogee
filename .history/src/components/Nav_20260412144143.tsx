import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.wordmark}>Masthead</Link>
          <div className={styles.links}>
            <Link href="/" className="label">Publications</Link>
            <Link href="/events" className="label">Events</Link>
          </div>
        </nav>
      </div>
      <hr className="rule" />
    </header>
  )
}