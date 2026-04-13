import styles from './page.module.css'

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>About</span>
          <h1 className={styles.title}>The publication for the space age.</h1>
        </div>
        <div className={styles.body}>
          <p>Apogee is an independent editorial platform covering space exploration, launch technology, defense systems, and the deep tech industries shaping the next century of human civilization.</p>
          <p>We publish long-form research, mission analysis, and policy commentary for engineers, investors, and the policymakers who need to understand both. Our editorial standard is simple: explain the technology accurately, assess the stakes honestly, and write it well enough that someone actually reads it.</p>
          <p>Apogee is built on Next.js and Sanity, with a design system that borrows from the austerity of aerospace engineering documentation and the warmth of classic scientific publishing.</p>
        </div>
        <div className={styles.stack}>
          <span className={styles.stackLabel}>Built with</span>
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