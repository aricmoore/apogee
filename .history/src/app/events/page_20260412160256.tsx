import { getAllEvents } from '@/sanity/queries'
import EventRow from '@/components/EventRow'
import styles from './page.module.css'

export const revalidate = 60

export default async function EventsPage() {
  const events = await getAllEvents()

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Events</h1>
          <p className={styles.sub}>Upcoming programs, convenings, and public events.</p>
        </div>
        <hr className="rule rule--heavy" />
        <div className={styles.list}>
          {events.length === 0 && (
            <p className={styles.empty}>No upcoming events.</p>
          )}
          {events.map(event => (
            <EventRow key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}