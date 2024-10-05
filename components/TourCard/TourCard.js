import Link from '@/components/Link/Link'
import styles from './TourCard.module.scss'
import Image from 'next/image'
import SvgHeart from '@/assets/icons/Heart'
import LazyImage from '../LazyImage/LazyImage'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleWishlist } from '@/redux/features/wishlistSlice'

const TourCard = ({ data, isRow }) => {
    const tours = useSelector(state => state.wishlist.tours);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkIsFavorite = tours.some(tour => tour.slug === data.slug);
        setIsFavorite(checkIsFavorite);
    }, [tours, data.slug]);

    return (
        <div className={`${styles.card} ${isRow ? styles.row : ''}`}>
            <Link href={`/tours/${data.slug}`} >
                <div className={styles.card__top}>
                    <LazyImage
                        src={data.image}
                        alt={data.title}
                    />
                </div>
                <div className={styles.card__content}>
                    <h4 className={styles.card__title}>{data.title}</h4>
                    <div className={styles.card__wrapper}>
                        <div className={styles.card__duration}>
                            {
                                data.days_duration && (
                                    <div className={styles.card__duration__item}>
                                        <Image src='/images/line-1.svg' width={12} height={12} alt='duration' />
                                        <span className={styles.card__duration__text}>{data.days_duration} days</span>
                                    </div>
                                )
                            }
                            {
                                data.nights_duration && (
                                    <div className={styles.card__duration__item}>
                                        <Image src='/images/line-9.svg' width={12} height={12} alt='night' />
                                        <span className={styles.card__duration__text}>{data.nights_duration} nights</span>
                                    </div>
                                )
                            }
                            {
                                data.hours_duration && (
                                    <div className={styles.card__duration__item}>
                                        <Image src='/images/hour.svg' width={12} height={12} alt='hour' />
                                        <span className={styles.card__duration__text}>{data.hours_duration} hours</span>
                                    </div>
                                )
                            }
                        </div>
                        {
                            data.has_free_cancellation && (
                                <div className={styles.card__cancel}>
                                    <Image src='/images/line-10.svg' width={12} height={12} alt='cancel' />
                                    <span className={styles.card__cancel__text}>Free cancellation available</span>
                                </div>
                            )
                        }
                        <div className={styles.card__footer}>
                            <div className={styles.card__price}>
                                <span>${data.price}</span>
                                <span> /person</span>
                            </div>
                            <div className={styles.card__rating}>
                                <Image src='/images/star.svg' width={12} height={12} alt='star' />
                                <span className={styles.card__rating__text}>
                                    {data.rate ? data.rate : data.score}
                                </span>
                                <span className={styles.card__rating__review}>
                                    ({data.review_count} reviews)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className={styles.card__top__content}>
                {
                    data.best && (
                        <span className={styles.card__top__content__text}>Best seller</span>
                    )
                }
                <button
                    className={`${styles.card__top__content__icon} ${isFavorite ? styles.active : ''}`}
                    onClick={() => {
                        dispatch(handleWishlist({ category: 'tours', item: data }));
                    }}
                >
                    <SvgHeart />
                </button>
            </div>
        </div>
    )
}

export default TourCard