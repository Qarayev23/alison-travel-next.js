import Link from '@/components/Link/Link'
import styles from './HotelCard.module.scss'
import Image from 'next/image';
import SvgHeart from '@/assets/icons/Heart';
import LazyImage from '../LazyImage/LazyImage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleWishlist } from '@/redux/features/wishlistSlice';

const HotelCard = ({ data }) => {
    const hotels = useSelector(state => state.wishlist.hotels);
    const chips = useSelector(state => state.globalData.chips);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkIsFavorite = hotels.some(tour => tour.slug === data.slug);
        setIsFavorite(checkIsFavorite);
    }, [hotels, data.slug]);

    return (
        <div className={styles.card}>
            <Link href={`/hotel-bookings/${data.slug}`}>
                <div className={styles.card__top}>
                    <LazyImage
                        src={data.cover_image}
                        alt={data.title}
                    />
                </div>
                <div className={styles.card__content}>
                    <h4 className={styles.card__title}>{data.title}</h4>
                    <div className={styles.card__wrapper}>
                        <div className={styles.card__stars}>
                            <Image src='/images/star3.svg' width={16} height={16} alt='star' />
                            <Image src='/images/star3.svg' width={16} height={16} alt='star' />
                            <Image src='/images/star3.svg' width={16} height={16} alt='star' />
                            <Image src='/images/star3.svg' width={16} height={16} alt='star' />
                        </div>
                        <div className={styles.card__services}>
                            {
                                chips?.sort((a, b) => {
                                    const isActiveA = data.chips.some(chip => chip.title === a.title);
                                    const isActiveB = data.chips.some(chip => chip.title === b.title);
                                    return isActiveA === isActiveB ? 0 : isActiveA ? -1 : 1;
                                }).map((item, index) => {
                                    const isActive = data.chips.some(chip => chip.title === item.title);
                                    return (
                                        <div className={`${styles.card__services__item} ${!isActive ? styles.deactive : ''}`} key={index}>
                                            <Image src={item.image} width={16} height={16} alt={item.title} />
                                            <span className={styles.card__services__text}>{item.title}</span>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.card__footer}>
                            <div className={styles.card__location}>
                                <Image src={data.country.flag} width={21} height={15} alt={data.country.title} />
                                <span className={styles.card__location__text}>{data.country.title}</span>
                            </div>
                            <div className={styles.card__rating}>
                                <Image src='/images/star.svg' width={16} height={16} alt='star' />
                                <span className={styles.card__rating__text}>{data.rate ? data.rate : data.score}</span>
                                <span className={styles.card__rating__review}>({data.review_count} reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className={styles.card__top__content}>
                <button
                    className={`${styles.card__top__content__icon} ${isFavorite ? styles.active : ''}`}
                    type='button'
                    onClick={() => {
                        dispatch(handleWishlist({ category: 'hotels', item: data }));
                    }}
                >
                    <SvgHeart />
                </button>
            </div>
        </div>
    )
}

export default HotelCard