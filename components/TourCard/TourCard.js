import Link from 'next/link'
import styles from './TourCard.module.scss'
import Image from 'next/image'
import SvgHeart from '@/assets/icons/Heart'
import LazyImage from '../LazyImage/LazyImage'

const TourCard = ({ isRow }) => {
    return (
        <Link href='/tours/example/example' className={`${styles.card} ${isRow ? styles.row : ''}`}>
            <div className={styles.card__top}>
                <LazyImage
                    src='/images/tour-1.svg'
                    alt=''
                />
                <div className={styles.card__top__content}>
                    <span className={styles.card__top__content__text}>Best seller</span>
                    <button
                        className={styles.card__top__content__icon}
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
                <div className={styles.card__wrapper}>
                    <div className={styles.card__duration}>
                        <div className={styles.card__duration__item}>
                            <Image src='/images/line-1.svg' width={12} height={12} alt='' />
                            <span className={styles.card__duration__text}>5 Days</span>
                        </div>
                        <div className={styles.card__duration__item}>
                            <Image src='/images/line-9.svg' width={12} height={12} alt='' />
                            <span className={styles.card__duration__text}>4 nights</span>
                        </div>
                    </div>
                    <div className={styles.card__cancel}>
                        <Image src='/images/line-10.svg' width={12} height={12} alt='' />
                        <span className={styles.card__cancel__text}>Free cancellation available</span>
                    </div>
                    <div className={styles.card__footer}>
                        <div className={styles.card__price}>
                            <span>$200</span>
                            <span> /person</span>
                        </div>
                        <div className={styles.card__rating}>
                            <Image src='/images/star.svg' width={12} height={12} alt='' />
                            <span className={styles.card__rating__text}>4.8</span>
                            <span className={styles.card__rating__review}>(12 reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TourCard