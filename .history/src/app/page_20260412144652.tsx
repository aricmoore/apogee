import { getAllArticles } from '@/sanity/queries'
import ArticleCard from '@/components/ArticleCard'
import styles from './page.module.css'

export const revalidate = 60

export default async function Home() {
  const articles = await getAllArticles()
  const [featured, ...rest] = articles

  return (
    <div className={styles.page}>
      <div className="container">

        {/* Masthead bar */}
        <div className={styles.masthead}>
          <span className="label">Publications</span>
          <span className="label">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <hr className="rule" />

        {/* Featured */}
        {featured && (
          <section className={styles.featured}>
            <ArticleCard article={featured} featured />
          </section>
        )}

        <hr className="rule" />

        {/* Grid */}
        {rest.length > 0 && (
          <section className={styles.grid}>
            {rest.map(article => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </section>
        )}

      </div>
    </div>
  )
}