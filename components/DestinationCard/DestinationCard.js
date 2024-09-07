import Link from 'next/link'
import styles from './DestinationCard.module.scss'
import Image from 'next/image'
import LazyImage from '../LazyImage/LazyImage'

const DestinationCard = () => {
    return (
        <Link href="/" className={styles.card}>
            <div className={styles.card__img}>
                <LazyImage src="/images/tour-1.svg" alt='' />
            </div>
            <div className={styles.card__footer}>
                <Image src="/images/flag.svg" width={28} height={20} alt='' />
                <h4 className={styles.card__title}>Azerbaijan Travel</h4>
            </div>
        </Link>
    )
}

export default DestinationCard