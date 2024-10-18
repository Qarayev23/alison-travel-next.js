import Image from 'next/image'
import styles from './HotelBookingCard.module.scss'
import AngleUp from '@/assets/icons/AngleUp'

const HotelBookingCard = ({ data, reservationData, handleShow, onOpenBookingModal }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__price}>
                <p className={styles.card__price__original}>${data.price_per_person}</p>
                <p className={styles.card__price__person}>/per night</p>
            </div>
            <div className={styles.card__rating}>
                <Image src="/images/star.svg" width={20} height={19} alt="Rating" />
                <p className={styles.card__rating__text}>{data?.rate !== 0 ? data?.rate.toFixed(1) : data?.score}</p>
                <p className={styles.card__rating__reviews}>({data?.review_count} reviews)</p>
            </div>
            <button className={styles.card__button} onClick={onOpenBookingModal}>
                Book Now
                <Image src="/images/basket.svg" width={16} height={16} alt="Basket" />
            </button>
            <div className={styles.card__list}>
                {
                    reservationData.map((reservation, index) => (
                        <div className={styles.card__list__item} key={index}>
                            <Image src={reservation.icon} width={24} height={24} alt={reservation.title} />
                            <div className={styles.card__list__item__content}>
                                <p className={styles.card__list__item__title}>{reservation.title}</p>
                                <p className={styles.card__list__item__desc}>{reservation.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className={styles.card__close} onClick={handleShow}>
                <AngleUp />
            </button>
        </div>
    )
}

export default HotelBookingCard