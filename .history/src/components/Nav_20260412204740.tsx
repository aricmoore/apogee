import Link from 'next/link'
import styles from './Nav.module.css'

function ApogeeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="12" stroke="#C97B10" strokeWidth="1.5" fill="none"/>
      <circle cx="14" cy="14" r="3" fill="#C97B10"/>
      <line x1="14" y1="2" x2="14" y2="8" stroke="#C97B10" strokeWidth="1.5"/>
      <path d="M 6 22 Q 14 6 22 22" stroke="#C97B10" strokeWidth="1" fill="none" strokeDasharray="2 2"/>
    </svg>
  )
}

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          <ApogeeIcon />
          <span className={styles.wordmarkText}>Apogee</span>
        </Link>
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