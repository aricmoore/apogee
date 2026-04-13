'use client'
import Link from 'next/link'
import { useState } from 'react'
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

const links = [
  { label: 'Publications', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark} onClick={() => setOpen(false)}>
          <ApogeeIcon />
          <span className={styles.wordmarkText}>Apogee</span>
        </Link>

        {/* Desktop links */}
        <nav className={styles.links} aria-label="Main navigation">
          {links.map(l => (
            <Link key={l.label} href={l.href} className={styles.link}>{l.label}</Link>
          ))}
          <Link href="/studio" className={styles.studio}>Studio ↗</Link>
        </nav>

        {/* Mobile right side */}
        <div className={styles.mobileRight}>
          <Link href="/studio" className={styles.studio}>Studio ↗</Link>
          <button
            className={styles.burger}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`${styles.burgerLine} ${open ? styles.burgerTop : ''}`} />
            <span className={`${styles.burgerLine} ${open ? styles.burgerMid : ''}`} />
            <span className={`${styles.burgerLine} ${open ? styles.burgerBot : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className={styles.overlay}>
          <nav className={styles.overlayLinks}>
            {links.map(l => (
              <Link
                key={l.label}
                href={l.href}
                className={styles.overlayLink}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}