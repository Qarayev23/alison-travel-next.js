import Link from '@/components/Link/Link'
import styles from './TourCard.module.scss'
import Image from 'next/image'
import SvgHeart from '@/assets/icons/Heart'
import LazyImage from '../LazyImage/LazyImage'

const TourCard = ({ data, isFavourite, isRow }) => {
    return (
        <Link href={`/tours/${data.slug}`} className={`${styles.card} ${isRow ? styles.row : ''}`}>
            <div className={styles.card__top}>
                <LazyImage
                    src={data.image}
                    alt={data.title}
                />
                <div className={styles.card__top__content}>
                    <span className={styles.card__top__content__text}>Best seller</span>
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
            <h4 className={styles.card__title}>{data.title}</h4>
                <div className={styles.card__wrapper}>
                    <div className={styles.card__duration}>
                        <div className={styles.card__duration__item}>
                            <Image src='/images/line-1.svg' width={12} height={12} alt='duration' />
                            <span className={styles.card__duration__text}>{data.days_duration} days</span>
                        </div>
                        <div className={styles.card__duration__item}>
                            <Image src='/images/line-9.svg' width={12} height={12} alt='night' />
                            <span className={styles.card__duration__text}>{data.nights_duration} nights</span>
                        </div>
                    </div>
                    <div className={styles.card__cancel}>
                        <Image src='/images/line-10.svg' width={12} height={12} alt='cancel' />
                        <span className={styles.card__cancel__text}>Free cancellation available</span>
                    </div>
                    <div className={styles.card__footer}>
                        <div className={styles.card__price}>
                            <span>${data.price}</span>
                            <span> /person</span>
                        </div>
                        <div className={styles.card__rating}>
                            <Image src='/images/star.svg' width={12} height={12} alt='star' />
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