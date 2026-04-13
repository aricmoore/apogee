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
      <div className="container">
        <div className={styles.masthead}>
          <span className={styles.mastheadTitle}>Publications</span>
          <span className="label">{date}</span>
        </div>

        {featured && (
          <section className={styles.featured}>
            <ArticleCard article={featured} featured />
          </section>
        )}

        {rest.length > 0 && (
          <section>
            <p className={styles.sectionLabel}>Recent</p>
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