'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setSearchOpen(false)
      setQuery('')
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark} onClick={() => setMenuOpen(false)}>
          <ApogeeIcon />
          <span className={styles.wordmarkText}>Apogee</span>
        </Link>

        <div className={styles.searchWrap}>
          {searchOpen ? (
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <input
                autoFocus
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles..."
                className={styles.searchInput}
                aria-label="Search"
              />
              <button type="button" className={styles.searchClose} onClick={() => { setSearchOpen(false); setQuery('') }}>✕</button>
            </form>
          ) : (
            <button
              className={styles.searchBtn}
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="6.5" cy="6.5" r="5" stroke="#BBBBBB" strokeWidth="1.5"/>
                <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="#BBBBBB" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>

        <nav className={styles.links} aria-label="Main navigation">
          {links.map(l => (
            <Link
              key={l.label}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.linkActive : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/studio" className={styles.studio}>Studio ↗</Link>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerTop : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerMid : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerBot : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.overlay}>
          <nav className={styles.overlayLinks}>
            {links.map(l => (
              <Link
                key={l.label}
                href={l.href}
                className={`${styles.overlayLink} ${pathname === l.href ? styles.overlayLinkActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/studio" className={styles.overlayLink} onClick={() => setMenuOpen(false)}>
              Studio ↗
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}