import Link from '@/components/Link/Link'
import styles from './HotelCard.module.scss'
import Image from 'next/image';
import SvgHeart from '@/assets/icons/Heart';
import LazyImage from '../LazyImage/LazyImage';

const HotelCard = ({ hotel, chips, isFavourite }) => {
    return (
        <Link href={`/hotel-bookings/${hotel.slug}`} className={styles.card}>
            <div className={styles.card__top}>
                <LazyImage
                    src={hotel.cover_image}
                    alt={hotel.title}
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
                <h4 className={styles.card__title}>{hotel.title}</h4>
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
                                const isActiveA = hotel.chips.some(chip => chip.title === a.title);
                                const isActiveB = hotel.chips.some(chip => chip.title === b.title);
                                return isActiveA === isActiveB ? 0 : isActiveA ? -1 : 1;
                            }).map((item, index) => {
                                const isActive = hotel.chips.some(chip => chip.title === item.title);
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
                            <Image src={hotel.country.flag} width={21} height={15} alt={hotel.country.title} />
                            <span className={styles.card__location__text}>{hotel.country.title}</span>
                        </div>
                        <div className={styles.card__rating}>
                            <Image src='/images/star.svg' width={16} height={16} alt='star' />
                            <span className={styles.card__rating__text}>4.8</span>
                            <span className={styles.card__rating__review}>(12 reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard