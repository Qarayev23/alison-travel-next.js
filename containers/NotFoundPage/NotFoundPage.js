import Link from 'next/link'
import styles from './style.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.error__wrapper}>
        <h1 className={styles.error__title}>404</h1>
        <p className={styles.error__desc}>Page not found</p>
        <div className={styles.error__footer}>
          <Link href="/" className={styles.error__link}>Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage