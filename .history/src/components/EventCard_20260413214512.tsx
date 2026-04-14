import Image from 'next/image'
import { urlFor } from '@/sanity/client'
import type { Event } from '@/sanity/types'
import styles from './EventCard.module.css'

interface Props {
  event: Event
  featured?: boolean
}

export default function EventCard({ event, featured = false }: Props) {
  const d = new Date(event.date)
  const day = d.toLocaleDateString('en-US', { day: '2-digit' })
  const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const year = d.toLocaleDateString('en-US', { year: 'numeric' })
  const weekday = d.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
  const time = d.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.imageWrap}>
        {event.heroImage ? (
          <Image
            src={urlFor(event.heroImage).width(featured ? 2000 : 800).height(featured ? 900 : 600).url()}
            alt={event.title}
            fill
            sizes={featured ? '100vw' : '(max-width: 640px) 100vw, 33vw'}
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder} />
        )}
        <div className={styles.gradient} />

        <div className={styles.overlay}>
          <div className={styles.overlayTop}>
            {event.category && (
							<span className={styles.category}>
								{featured ? `Featured in ${event.category}` : event.category}
							</span>
						)}
            {event.soldOut && (
              <span className={styles.soldOut}>Sold Out</span>
            )}
          </div>

          <div className={styles.overlayBottom}>
            <h2 className={styles.title}>{event.title.toUpperCase()}</h2>

            {featured && event.description && (
              <p className={styles.description}>{event.description}</p>
            )}

            <div className={styles.meta}>
              <div className={styles.dateBlock}>
                <span className={styles.dateDay}>{day}</span>
                <div className={styles.dateMonthYear}>
                  <span className={styles.dateMonth}>{month}</span>
                  <span className={styles.dateYear}>{year}</span>
                </div>
              </div>
              <div className={styles.metaRight}>
                {event.venue && (
                  <span className={styles.venue}>{event.venue}</span>
                )}
                <span className={styles.time}>{weekday} · {time}</span>
                {event.externalLink && !event.soldOut && (
                  <a
                    href={event.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.register}
                  >
                    Register →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}