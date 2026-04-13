import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <span className={styles.wordmark}>Apogee</span>
              <p className={styles.tagline}>Independent coverage of space exploration, launch technology, and deep tech.</p>
            </div>
            <div className={styles.col}>
              <span className={styles.colLabel}>About</span>
              <Link href="/about" className={styles.colLink}>Mission</Link>
              <Link href="/" className={styles.colLink}>Staff</Link>
              <Link href="/" className={styles.colLink}>Careers</Link>
              <Link href="/" className={styles.colLink}>Brand Guidelines</Link>
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
            <span className={styles.copy}>© 2026 Masthead. All rights reserved.</span>
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