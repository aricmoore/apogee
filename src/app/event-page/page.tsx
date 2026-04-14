import styles from './page.module.css'

export default function EventPageUnderConstruction() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.label}>Apogee Events</span>
          <h1 className={styles.title}>Coming Soon</h1>
          <p className={styles.sub}>Individual event pages are currently under construction. Check back soon for full event details, lineups, and registration.</p>
          <a href="/events" className={styles.back}>← Back to Events</a>
        </div>
      </div>
    </div>
  )
}