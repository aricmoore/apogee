'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { urlFor } from '@/sanity/client'
import type { Article } from '@/sanity/types'
import styles from './FeaturedHero.module.css'

interface Props {
  article: Article
  date: string
}

export default function FeaturedHero({ article, date }: Props) {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = hero.offsetHeight
      const progress = Math.min(scrollY / (heroHeight * 1.2), 1)
      hero.style.opacity = String(1 - progress * 0.85)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const href = `/article/${article.slug.current}`
  const articleDate = article.publishDate
    ? new Date(article.publishDate).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    : ''

  return (
    <section className={styles.hero} ref={heroRef}>
      {article.heroImage && (
        <div className={styles.imageWrap}>
          <Image
            src={urlFor(article.heroImage).width(2000).height(1100).url()}
            alt={article.title}
            fill
            sizes="100vw"
            className={styles.image}
            priority
          />
          <div className={styles.gradient} />
        </div>
      )}

      <div className={styles.datebar}>
        <div className="container">
          <span className={styles.dateText}>{date}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>
          {article.category && (
            <span className={styles.category}>
              Featured in {article.category}
            </span>
          )}
          <Link href={href}>
            <h1 className={styles.title}>{article.title.toUpperCase()}</h1>
          </Link>
          {article.excerpt && (
            <p className={styles.excerpt}>{article.excerpt}</p>
          )}
          <div className={styles.meta}>
            {article.author && (
              <span className={styles.metaText}>{article.author}</span>
            )}
            {articleDate && <span className={styles.dot}>·</span>}
            {articleDate && <span className={styles.metaText}>{articleDate}</span>}
          </div>
        </div>
      </div>
    </section>
  )
}