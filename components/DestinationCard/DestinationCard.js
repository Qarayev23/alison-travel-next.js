import Link from '@/components/Link/Link'
import styles from './DestinationCard.module.scss'
import Image from 'next/image'
import LazyImage from '../LazyImage/LazyImage'

const DestinationCard = ({ data }) => {
    return (
        <Link href={`tours/${data.slug}`} className={styles.card}>
            <div className={styles.card__img}>
                <LazyImage src={data.cover_image} alt={data.title} />
            </div>
            <div className={styles.card__footer}>
                <Image src={data.flag} width={28} height={20} alt='' />
                <h4 className={styles.card__title}>{data.title}</h4>
            </div>
        </Link>
    )
}

export default DestinationCard