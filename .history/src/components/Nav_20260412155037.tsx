'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Nav.module.css'

const navItems = [
  {
    label: 'About',
    children: [
      { label: 'Mission', href: '/' },
      { label: 'Staff', href: '/' },
      { label: 'Careers', href: '/' },
    ]
  },
  {
    label: 'Policy Areas',
    children: [
      { label: 'Innovation', href: '/' },
      { label: 'Governance', href: '/' },
      { label: 'Education', href: '/' },
      { label: 'Technology', href: '/' },
    ]
  },
  {
    label: 'Publications',
    href: '/',
  },
  {
    label: 'Events',
    href: '/events',
  },
]

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Link href="/" className={styles.wordmark}>Masthead</Link>
        <nav className={styles.links}>
          {navItems.map(item => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => item.children && setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              {item.href ? (
                <Link href={item.href} className={styles.link}>{item.label}</Link>
              ) : (
                <button className={styles.link}>
                  {item.label}
                  <span className={styles.caret}>▾</span>
                </button>
              )}
              {item.children && open === item.label && (
                <div className={styles.dropdown}>
                  {item.children.map(child => (
                    <Link key={child.label} href={child.href} className={styles.dropdownItem}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/studio" className={styles.donate}>Studio ↗</Link>
        </nav>
      </div>
    </header>
  )
}