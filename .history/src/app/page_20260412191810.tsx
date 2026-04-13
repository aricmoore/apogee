import { getAllArticles } from '@/sanity/queries'
import ArticleCard from '@/components/ArticleCard'
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
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroTitle}>Apogee — Space & Deep Tech</span>
            <span className={styles.heroDate}>{date}</span>
          </div>
        </div>
      </div>

      <div className="container">
        {featured && (
          <section className={styles.featuredWrap}>
            <ArticleCard article={featured} featured />
          </section>
        )}

        {rest.length > 0 && (
          <section>
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