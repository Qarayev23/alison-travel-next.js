import Link from '@/components/Link/Link'
import styles from './NewsCard.module.scss'
import LazyImage from '../LazyImage/LazyImage';
import formatDate from '@/utils/formatDate';

const NewsCard = ({ data, locale }) => {
    return (
        <Link href={`/news/${data.slug}`} className={styles.card}>
            <div className={styles.card__img}>
                <LazyImage
                    src={data.image}
                    alt={data.title}
                />
            </div>
            <div className={styles.card__content}>
                <h4 className={styles.card__title}>{data.title}</h4>
                <div className={styles.card__wrapper}>
                    <p className={styles.card__desc}>
                        {data.description}
                    </p>
                    <div className={styles.card__footer}>
                        <p className={styles.card__date}>
                            {formatDate(data.created_at, locale)}
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