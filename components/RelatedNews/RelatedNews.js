import Link from '@/components/Link/Link'
import styles from './RelatedNews.module.scss'
import LazyImage from '../LazyImage/LazyImage';

const RelatedNews = () => {
    return (
        <Link href="/news/example" className={styles.card}>
            <div className={styles.card__image}>
                <LazyImage type="middle" src="https://www.alisontravelgroup.com/uploads/3982f9f947c1813d4281.webp" alt='' />
            </div>
            <div className={styles.card__content}>
                <h4 className={styles.card__title}>Top 10 sightseeing in Baku</h4>
                <p className={styles.card__desc}>
                    Baku is the capital and largest city of Azerbaijan. It is located on the southern shore of the Caspian Sea and is one of the oldest cities in the world, with a history dating back to at least the 8th century AD. The city has a population of 2.2 million people, making it one of the largest cities in the Caucasus region. Baku is home to many landmarks, including its ancient walled city core, which contains several UNESCO World Heritage Sites such as Maiden Tower and Shirvanshah Palace.
                </p>
                <p className={styles.card__date}>
                    December 19, 2022
                </p>
            </div>
        </Link>
    )
}

export default RelatedNews