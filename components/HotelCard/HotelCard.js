import Link from 'next/link'
import styles from './HotelCard.module.scss'
import Image from 'next/image';
import SvgHeart from '@/assets/icons/Heart';
import LazyImage from '../LazyImage/LazyImage';

const HotelCard = () => {
    return (
        <Link href='/hotel-bookings/example' className={styles.card}>
            <div className={styles.card__top}>
                <LazyImage
                    src='https://www.alisontravelgroup.com/uploads/e31dac66c74c92e4adb9.webp'
                    alt=''
                />
                <div className={styles.card__top__content}>
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
                <h4 className={styles.card__title}>White Boutique Hotel</h4>
                <div className={styles.card__wrapper}>
                    <div className={styles.card__services}>
                        <div className={styles.card__services__item}>
                            <Image src='/images/wifi.svg' width={16} height={16} alt='' />
                            <span className={styles.card__services__text}>Free wifi</span>
                        </div>
                        <div className={styles.card__services__item}>
                            <Image src='/images/meal.svg' width={16} height={16} alt='' />
                            <span className={styles.card__services__text}>Restaurant</span>
                        </div>
                        <div className={styles.card__services__item}>
                            <Image src='/images/car.svg' width={16} height={16} alt='' />
                            <span className={styles.card__services__text}>Free parking</span>
                        </div>
                        <div className={`${styles.card__services__item} ${styles.deactive}`}>
                            <Image src='/images/room.svg' width={16} height={16} alt='' />
                            <span className={styles.card__services__text}>Room service</span>
                        </div>
                        <div className={`${styles.card__services__item} ${styles.deactive}`}>
                            <Image src='/images/pool.svg' width={16} height={16} alt='' />
                            <span className={styles.card__services__text}>Pool</span>
                        </div>
                        <div className={`${styles.card__services__item} ${styles.deactive}`}>
                            <Image src='/images/baby.svg' width={16} height={16} alt='' />
                            <span className={styles.card__services__text}>Babysitting</span>
                        </div>
                    </div>
                    <div className={styles.card__footer}>
                        <div className={styles.card__location}>
                            <Image src='/images/flag-georgia.svg' width={21} height={15} alt='location' />
                            <span className={styles.card__location__text}>Georgia</span>
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