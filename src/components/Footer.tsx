import Link from 'next/link'
import styles from './Footer.module.css'

function ApogeeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="12" stroke="#C97B10" strokeWidth="1.5" fill="none"/>
      <circle cx="14" cy="14" r="3" fill="#C97B10"/>
      <line x1="14" y1="2" x2="14" y2="8" stroke="#C97B10" strokeWidth="1.5"/>
      <path d="M 6 22 Q 14 6 22 22" stroke="#C97B10" strokeWidth="1" fill="none" strokeDasharray="2 2"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.wordmarkWrap}>
                <ApogeeIcon />
                <span className={styles.wordmark}>Apogee</span>
              </div>
              <p className={styles.tagline}>Independent coverage of space exploration, launch technology, and deep tech.</p>
            </div>
            <div className={styles.col}>
              <span className={styles.colLabel}>About</span>
              <Link href="/about" className={styles.colLink}>Mission</Link>
              <Link href="/about" className={styles.colLink}>Staff</Link>
              <Link href="/about" className={styles.colLink}>Careers</Link>
              <Link href="/about" className={styles.colLink}>Brand Guidelines</Link>
            </div>
            <div className={styles.col}>
              <span className={styles.colLabel}>Content</span>
              <Link href="/" className={styles.colLink}>Publications</Link>
              <Link href="/events" className={styles.colLink}>Events</Link>
              <Link href="/" className={styles.colLink}>Policy Areas</Link>
            </div>
            <div className={styles.col}>
              <span className={styles.colLabel}>Connect</span>
              <Link href="/" className={styles.colLink}>Contact Us</Link>
              <Link href="/" className={styles.colLink}>X / Twitter</Link>
              <Link href="/" className={styles.colLink}>LinkedIn</Link>
              <Link href="/" className={styles.colLink}>YouTube</Link>
            </div>
          </div>

          <div className={styles.subscribe}>
            <span className={styles.subscribeLabel}>Stay in the loop</span>
            <p className={styles.subscribeSub}>Occasional updates on events, publications, and programs.</p>
            <div className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="your@email.com"
                className={styles.input}
                aria-label="Email address"
              />
              <button className={styles.subscribeBtn}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span className={styles.copy}>© 2026 Apogee. All rights reserved.</span>
            <div className={styles.bottomLinks}>
              <Link href="/" className={styles.bottomLink}>Terms of Service</Link>
              <Link href="/" className={styles.bottomLink}>Privacy Policy</Link>
              <Link href="/" className={styles.bottomLink}>RSS</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}