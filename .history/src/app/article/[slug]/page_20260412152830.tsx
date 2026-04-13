import { getArticleBySlug, getAllArticles } from '@/sanity/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/client'
import styles from './page.module.css'

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map(a => ({ slug: a.slug.current }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) return <div>Not found</div>

  const date = article.publishDate
    ? new Date(article.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          {article.category && <span className="label">{article.category}</span>}
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.meta}>
            {article.author && <span className={styles.author}>{article.author}</span>}
            {date && <span className="label">{date}</span>}
          </div>
        </div>
      </div>

      {article.heroImage && (
        <div className={styles.heroWrap}>
          <Image
            src={urlFor(article.heroImage).width(1600).height(700).url()}
            alt={article.title}
            fill
            className={styles.hero}
            priority
          />
        </div>
      )}

      <div className="container">
        <div className={styles.body}>
          <PortableText value={article.body} />
        </div>
      </div>
    </div>
  )
}