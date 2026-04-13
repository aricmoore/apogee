import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/client'
import type { Article } from '@/sanity/types'
import styles from './ArticleCard.module.css'

interface Props {
  article: Article
  featured?: boolean
}

export default function ArticleCard({ article, featured = false }: Props) {
  const href = `/article/${article.slug.current}`
  const date = article.publishDate
    ? new Date(article.publishDate).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    : ''

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {article.heroImage && (
        <Link href={href} className={styles.imageWrap}>
          <Image
            src={urlFor(article.heroImage).width(featured ? 1400 : 800).height(featured ? 900 : 540).url()}
            alt={article.title}
            fill
            sizes={featured
              ? '(max-width: 768px) 100vw, 60vw'
              : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
            className={styles.image}
          />
        </Link>
      )}
      <div className={styles.body}>
        {article.category && (
          <span className={styles.category}>{article.category}</span>
        )}
        <Link href={href} className={styles.titleLink}>
          <h2 className={styles.title}>{article.title}</h2>
        </Link>
        {article.excerpt && (
          <p className={styles.excerpt}>{article.excerpt}</p>
        )}
        <div className={styles.meta}>
          {article.author && <span className={styles.author}>{article.author}</span>}
          {article.author && date && <span className={styles.dot}>—</span>}
          {date && <span className={styles.date}>{date}</span>}
        </div>
        <Link href={href} className={styles.readMore}>
          Read more →
        </Link>
      </div>
    </article>
  )
}