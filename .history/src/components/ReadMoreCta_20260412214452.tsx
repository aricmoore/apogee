'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styles from './ReadMoreCta.module.css'

export default function ReadMoreCta({ href }: { href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add(styles.glow)
            setTimeout(() => el.classList.remove(styles.glow), 700)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Link href={href} className={styles.link} ref={ref}>
      Read More →
    </Link>
  )
}