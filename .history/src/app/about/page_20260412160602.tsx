import styles from './page.module.css'

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>About</span>
          <h1 className={styles.title}>Built for builders, hackers, and scholars.</h1>
        </div>
        <div className={styles.body}>
          <p>Masthead is an editorial publishing platform designed for policy research organizations operating at the intersection of technology and governance. It is built on Next.js and Sanity, with a design system rooted in IBM corporate modernism and Swiss International Style.</p>
          <p>The platform is designed to hold institutional gravity and startup energy in the same frame — publishing serious policy research and communicating it with the clarity and urgency the moment demands.</p>
          <p>Content is managed through an embedded Sanity Studio, allowing non-technical editors to publish articles and events independently without touching code.</p>
        </div>
        <div className={styles.stack}>
          <span className={styles.stackLabel}>Stack</span>
          <div className={styles.stackGrid}>
            {['Next.js 14', 'TypeScript', 'Sanity', 'GROQ', 'CSS Modules', 'Vercel'].map(item => (
              <div key={item} className={styles.stackItem}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}