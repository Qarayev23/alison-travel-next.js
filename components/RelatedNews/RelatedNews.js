import Link from '@/components/Link/Link'
import styles from './RelatedNews.module.scss'
import LazyImage from '../LazyImage/LazyImage';
import formatDate from '@/utils/formatDate';

const RelatedNews = ({data}) => {
    return (
        <Link href={`/news/${data.slug}`} className={styles.card}>
            <div className={styles.card__image}>
                <LazyImage type="middle" src={data.image} alt={data.title} />
            </div>
            <div className={styles.card__content}>
                <h4 className={styles.card__title}>{data.title}</h4>
                <p className={styles.card__desc}>
                    {data.description}
                </p>
                <p className={styles.card__date}>
                    {formatDate(data.created_at)}
                </p>
            </div>
        </Link>
    )
}

export default RelatedNews