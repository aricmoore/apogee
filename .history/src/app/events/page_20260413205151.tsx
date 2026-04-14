'use client'
import { useEffect, useState } from 'react'
import { getAllEvents } from '@/sanity/queries'
import EventCard from '@/components/EventCard'
import type { Event } from '@/sanity/types'
import styles from './page.module.css'

const CATEGORIES = ['All', 'Nightlife', 'Festival', 'Conference', 'Fireside Chat', 'Expo', 'Symposium', 'Reception']

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    getAllEvents().then(setEvents)
  }, [])

  const now = new Date()

  const filtered = events
    .filter(e => tab === 'upcoming' ? new Date(e.date) >= now : new Date(e.date) < now)
    .filter(e => category === 'All' || e.category === category)

  const featured = filtered.find(e => e.featured)
  const rest = filtered.filter(e => !e.featured)

  return (
    <div className={styles.page}>

      {/* Dark hero header */}
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className={styles.heroLabel}>Apogee</span>
              <h1 className={styles.heroTitle}>Events</h1>
              <p className={styles.heroSub}>Where the conversation continues after dark.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filtersWrap}>
        <div className="container">
          <div className={styles.filters}>
            <div className={styles.tabGroup}>
              <button
                className={`${styles.tab} ${tab === 'upcoming' ? styles.tabActive : ''}`}
                onClick={() => setTab('upcoming')}
              >
                Upcoming
              </button>
              <button
                className={`${styles.tab} ${tab === 'past' ? styles.tabActive : ''}`}
                onClick={() => setTab('past')}
              >
                Past
              </button>
            </div>
            <div className={styles.categoryGroup}>
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`${styles.catBtn} ${category === c ? styles.catBtnActive : ''}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events grid */}
      <div className={styles.body}>
        <div className="container">
          {filtered.length === 0 && (
            <p className={styles.empty}>No events found.</p>
          )}

          {featured && (
            <div className={styles.featuredWrap}>
              <EventCard event={featured} featured />
            </div>
          )}

          {rest.length > 0 && (
            <div className={styles.grid}>
              {rest.map(event => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}