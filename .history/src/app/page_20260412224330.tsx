import { getAllArticles, getSiteSettings } from '@/sanity/queries'
import ArticleCard from '@/components/ArticleCard'
import FeaturedHero from '@/components/FeaturedHero'
import ReadMoreCta from '@/components/ReadMoreCta'
import styles from './page.module.css'

export const revalidate = 60

export default async function Home() {
  const [articles, settings] = await Promise.all([
    getAllArticles(),
    getSiteSettings(),
  ])

  const featured = settings?.featuredArticle ?? articles[0]
  const rest = articles.filter(a => a._id !== featured?._id)

  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div className={styles.page}>
      {featured && <FeaturedHero article={featured} date={date} />}

      {featured && (
        <div className={styles.featuredCta}>
          <ReadMoreCta href={`/article/${featured.slug.current}`} />
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