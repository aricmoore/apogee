import { getArticleBySlug, getAllArticles } from '@/sanity/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/client'
import styles from './page.module.css'

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map(a => ({ slug: a.slug.current }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return <div>Not found</div>

  const date = article.publishDate
    ? new Date(article.publishDate).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    : ''

  return (
    <div className={styles.page}>
      <div className="container">

        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.crumb}>Publications</Link>
          <span className={styles.crumbSep}>/</span>
          {article.category && (
            <>
              <Link href="/" className={styles.crumb}>{article.category}</Link>
              <span className={styles.crumbSep}>/</span>
            </>
          )}
          <span className={styles.crumbCurrent}>{article.title}</span>
        </nav>

        {/* Header */}
        <div className={styles.header}>
          {article.category && (
            <span className={styles.category}>{article.category}</span>
          )}
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.meta}>
            {article.author && <span className={styles.author}>{article.author}</span>}
            {article.author && date && <span className={styles.dot}>—</span>}
            {date && <span className={styles.date}>{date}</span>}
          </div>
        </div>
      </div>

      {/* Hero */}
      {article.heroImage && (
        <div className={styles.heroWrap}>
          <Image
						src={urlFor(article.heroImage).width(1600).height(700).url()}
						alt={article.title}
						fill
						sizes="100vw"
						className={styles.hero}
						priority
					/>
        </div>
      )}

      {/* Body — centered */}
      <div className="container">
        <div className={styles.bodyWrap}>
          <div className={styles.body}>
            <PortableText value={article.body} />
          </div>

          {/* Tags */}
          {article.category && (
						<div className={styles.tags}>
							<Link href={`/?category=${article.category.toLowerCase()}`} className={styles.tag}>
								{article.category}
							</Link>
						</div>
					)}
        </div>
      </div>
    </div>
  )
}