import Link from 'next/link'
import styles from './NewsCard.module.scss'
import Image from 'next/image';

const NewsCard = () => {
    return (
        <Link href='/' className={styles.card}>
            <div className={styles.card__img}>
                <Image
                    src='https://www.alisontravelgroup.com/uploads/3982f9f947c1813d4281.webp'
                    alt=''
                    fill
                />
            </div>
            <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Top 10 sightseeing in Baku</h4>
                <div className={styles.card__wrapper}>
                    <p className={styles.card__desc}>
                        We had the most spectacular view. Unfortunately it was very hot in. We had the most spectacular view. Unfortunately it was very hot in
                    </p>
                    <div className={styles.card__footer}>
                        <p className={styles.card__date}>
                            about 1 hour ago
                        </p>
                        <span className={styles.card__readMore}>
                            Read more
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NewsCard