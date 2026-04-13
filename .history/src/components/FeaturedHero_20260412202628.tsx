import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/client'
import type { Article } from '@/sanity/types'
import styles from './FeaturedHero.module.css'

export default function FeaturedHero({ article }: { article: Article }) {
  const href = `/article/${article.slug.current}`
  const date = article.publishDate
    ? new Date(article.publishDate).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    : ''

  return (
    <section className={styles.hero}>
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
      <div className={styles.content}>
        <div className={styles.contentInner}>
          {article.category && (
            <span className={styles.category}>{article.category}</span>
          )}
          <Link href={href}>
            <h1 className={styles.title}>{article.title.toUpperCase()}</h1>
          </Link>
          {article.excerpt && (
            <p className={styles.excerpt}>{article.excerpt}</p>
          )}
          <div className={styles.meta}>
            {article.author && (
              <span className={styles.author}>{article.author}</span>
            )}
            {date && <span className={styles.dot}>·</span>}
            {date && <span className={styles.date}>{date}</span>}
            <Link href={href} className={styles.readMore}>
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}