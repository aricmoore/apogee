import type { Event } from '@/sanity/types'
import styles from './EventRow.module.css'

export default function EventRow({ event }: { event: Event }) {
  const d = new Date(event.date)
  const day = d.toLocaleDateString('en-US', { day: '2-digit' })
  const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

  return (
    <article className={styles.row}>
      <div className={styles.date}>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{event.title}</h3>
        <div className={styles.meta}>
          <span className={styles.metaItem}>{time}</span>
          {event.location && (
            <>
              <span className={styles.dot}>·</span>
              <span className={styles.metaItem}>{event.location}</span>
            </>
          )}
        </div>
        {event.description && (
          <p className={styles.desc}>{event.description}</p>
        )}
        {event.externalLink && (
          <a
            href={event.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Register →
          </a>
        )}
      </div>
    </article>
  )
}