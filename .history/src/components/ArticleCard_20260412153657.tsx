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
            src={urlFor(article.heroImage).width(featured ? 1400 : 800).height(featured ? 1050 : 533).url()}
            alt={article.title}
            fill
            className={styles.image}
          />
        </Link>
      )}
      <div className={styles.body}>
        {article.category && (
          <span className={styles.category}>{article.category}</span>
        )}
        <Link href={href}>
          <h2 className={styles.title}>{article.title}</h2>
        </Link>
        {article.excerpt && (
          <p className={styles.excerpt}>{article.excerpt}</p>
        )}
        <div className={styles.meta}>
          {article.author && <span className={styles.author}>{article.author}</span>}
          {article.author && date && <span className={styles.dot}>—</span>}
          {date && <span className="label">{date}</span>}
        </div>
      </div>
    </article>
  )
}