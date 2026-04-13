import { getAllArticles } from '@/sanity/queries'
import ArticleCard from '@/components/ArticleCard'
import FeaturedHero from '@/components/FeaturedHero'
import Link from 'next/link'
import styles from './page.module.css'

export const revalidate = 60

export default async function Home() {
  const articles = await getAllArticles()
  const [featured, ...rest] = articles

  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div className={styles.page}>
      {featured && <FeaturedHero article={featured} date={date} />}

      {featured && (
        <div className={styles.featuredCta}>
          <Link href={`/article/${featured.slug.current}`} className={styles.featuredCtaLink}>
            Read More →
          </Link>
        </div>
      )}

      <div className="container">
        {rest.length > 0 && (
          <section className={styles.section}>
            <span className={styles.sectionLabel}>Latest</span>
            <div className={styles.grid}>
              {rest.map(article => (
                <ArticleCard key={article._id} article={article} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}