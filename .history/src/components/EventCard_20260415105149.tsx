'use client'
import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/client'
import type { Event } from '@/sanity/types'
import styles from './EventCard.module.css'
import EventModal from './EventModal'

interface Props {
  event: Event
  featured?: boolean
}

export default function EventCard({ event, featured = false }: Props) {
  const [modalOpen, setModalOpen] = useState(false)

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
    <>
      <article
        className={`${styles.card} ${featured ? styles.featured : ''}`}
        onClick={() => setModalOpen(true)}
      >
        <div className={styles.imageWrap}>
          {event.heroImage ? (
            <Image
              src={urlFor(event.heroImage).width(featured ? 2000 : 800).height(featured ? 900 : 1000).url()}
              alt={event.title}
              fill
              sizes={featured ? '100vw' : '(max-width: 640px) 100vw, 33vw'}
              className={styles.image}
            />
          ) : (
            <div className={styles.imagePlaceholder} />
          )}
          <div className={styles.gradient} />

          {!featured && (
            <div className={styles.staticOverlay}>
              <div className={styles.overlayTop}>
                {event.category && (
                  <span className={styles.category}>{event.category}</span>
                )}
                {event.soldOut && (
                  <span className={styles.soldOut}>Sold Out</span>
                )}
              </div>
              <h2 className={styles.title}>{event.title.toUpperCase()}</h2>
            </div>
          )}

          {/* Non-featured: hover panel */}
          {!featured && (
            <div className={styles.hoverPanel}>
              <div className={styles.hoverMeta}>
                <div className={styles.dateBlock}>
                  <span className={styles.dateDay}>{day}</span>
                  <div className={styles.dateMonthYear}>
                    <span className={styles.dateMonth}>{month}</span>
                    <span className={styles.dateYear}>{year}</span>
                  </div>
                </div>
                <div className={styles.hoverRight}>
                  {event.venue && <span className={styles.venue}>{event.venue}</span>}
                  <span className={styles.time}>{weekday} · {time}</span>
                </div>
              </div>
              <button
                className={styles.infoBtn}
                onClick={e => { e.stopPropagation(); setModalOpen(true) }}
              >
                Info ↓
              </button>
            </div>
          )}

          {featured && (
            <div className={styles.featuredOverlay}>
              <div className={styles.featuredTop}>
                {event.category && (
                  <span className={styles.category}>
                    Featured in {event.category}
                  </span>
                )}
              </div>
              <div className={styles.featuredBottom}>
                <h2 className={styles.featuredTitle}>{event.title.toUpperCase()}</h2>
                <div className={styles.featuredBar}>
                  <div className={styles.featuredMeta}>
                    <div className={styles.dateBlock}>
                      <span className={styles.dateDay}>{day}</span>
                      <div className={styles.dateMonthYear}>
                        <span className={styles.dateMonth}>{month}</span>
                        <span className={styles.dateYear}>{year}</span>
                      </div>
                    </div>
                    <div className={styles.hoverRight}>
                      {event.venue && <span className={styles.venue}>{event.venue}</span>}
                      <span className={styles.time}>{weekday} · {time}</span>
                    </div>
                  </div>
                  {event.description && (
                    <p className={styles.description}>{event.description}</p>
                  )}
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
          )}
        </div>
      </article>

      {modalOpen && (
        <EventModal
          event={event}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}