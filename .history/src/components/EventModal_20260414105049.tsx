'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/client'
import type { Event } from '@/sanity/types'
import styles from './EventModal.module.css'

interface Props {
  event: Event
  onClose: () => void
}

export default function EventModal({ event, onClose }: Props) {
  const d = new Date(event.date)
  const fullDate = d.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })
  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })

  const endD = event.endDate ? new Date(event.endDate) : null
  const endTime = endD
    ? endD.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    : null

  const isSameDay = endD
    ? d.toDateString() === endD.toDateString()
    : true

  const endDateStr = endD && !isSameDay
    ? endD.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      })
    : null

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    window.history.pushState({ modal: true }, '')

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const handlePopState = () => {
      onClose()
    }

    window.addEventListener('keydown', handleKey)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [onClose])

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        {event.heroImage && (
          <div className={styles.imageWrap}>
            <Image
              src={urlFor(event.heroImage).width(1600).height(700).url()}
              alt={event.title}
              fill
              sizes="100vw"
              className={styles.image}
            />
            <div className={styles.imageGradient} />
          </div>
        )}

        <button className={styles.close} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.content}>
          <div className={styles.header}>
            {event.category && (
              <span className={styles.category}>{event.category}</span>
            )}
            <h2 className={styles.title}>{event.title.toUpperCase()}</h2>
          </div>

          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Date</span>
              <span className={styles.detailValue}>
                {fullDate}{endDateStr ? ` — ${endDateStr}` : ''}
              </span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Time</span>
              <span className={styles.detailValue}>
                {time}{endTime && isSameDay ? ` — ${endTime}` : ''}
                {!isSameDay && endTime ? ` until ${endTime} on final day` : ''}
              </span>
            </div>
            {event.venue && (
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Venue</span>
                <span className={styles.detailValue}>{event.venue}</span>
              </div>
            )}
            {event.address && (
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Address</span>
                <span className={styles.detailValue}>{event.address}</span>
              </div>
            )}
          </div>

          {event.description && (
            <p className={styles.description}>{event.description}</p>
          )}

          <div className={styles.actions}>
            {event.soldOut ? (
              <span className={styles.soldOut}>Sold Out</span>
            ) : event.externalLink && (
              
                href={event.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.register}
              >
                Register →
              </a>
            )}
            <button className={styles.cancelBtn} onClick={onClose}>
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}