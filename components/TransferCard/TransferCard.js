import Link from '@/components/Link/Link'
import styles from './TransferCard.module.scss'
import Image from 'next/image'
import SvgHeart from '@/assets/icons/Heart'
import LazyImage from '../LazyImage/LazyImage'

const TransferCard = ({ isFavourite }) => {
    return (
        <Link href='/' className={styles.card}>
            <div className={styles.card__top}>
                <LazyImage
                    src='/images/car.png'
                    alt=''
                />
                <div className={styles.card__top__content}>
                    <button
                        className={`${styles.card__top__content__icon} ${isFavourite ? styles.active : ''}`}
                        type='button'
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <SvgHeart />
                    </button>
                </div>
            </div>
            <div className={styles.card__content}>
                <h4 className={styles.card__title}>Entire serviced classy mountain house view</h4>
                <div className={styles.card__desc}>
                    <Image src='/images/people.svg' width={16} height={16} alt='People' />
                    <span className={styles.card__desc__text}>Up to 5 people</span>
                </div>
            </div>
        </Link>
    )
}

export default TransferCard