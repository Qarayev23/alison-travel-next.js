import Image from 'next/image'
import styles from './BookingCard.module.scss'
import AngleUp from '@/assets/icons/AngleUp'

const BookingCard = ({ selectedOption, data, reservationData, handleShow, isHoliday, onOpenBookingModal }) => {
    return (
        <div className={styles.card}>
            {
                isHoliday && selectedOption && (
                    <div className={styles.card__name}>
                        <div className={styles.card__name__icon}>
                            <Image src="/images/option.svg" width={32} height={32} alt="Option" />
                            <span>{selectedOption.category.title.charAt(0)}</span>
                        </div>
                        <p className={styles.card__name__text}>{selectedOption.category.title}</p>
                    </div>
                )
            }
            <div className={styles.card__price}>
                {
                    selectedOption.discount_per_person && (
                        <p className={styles.card__price__old}>${selectedOption.price_per_person}</p>
                    )
                }
                <p className={styles.card__price__original}>${selectedOption.price_per_person - selectedOption.discount_per_person}</p>
                <p className={styles.card__price__person}>/person</p>
            </div>
            <div className={styles.card__rating}>
                <Image src="/images/star.svg" width={20} height={19} alt="Rating" />
                <p className={styles.card__rating__text}>{data?.rate !== 0 ? data?.rate.toFixed(1) : data?.score}</p>
                <p className={styles.card__rating__reviews}>({data?.review_count} reviews)</p>
            </div>
            {
                isHoliday && (
                    <div className={styles.card__duration}>
                        {
                            data.days_duration && (
                                <div className={styles.card__duration__item}>
                                    <Image src="/images/line-1.svg" width={24} height={24} alt="Days" />
                                    <div className={styles.card__duration__item__content}>
                                        <p className={styles.card__duration__item__title}>Days</p>
                                        <p className={styles.card__duration__item__number}>{data.days_duration}</p>
                                    </div>
                                </div>
                            )
                        }
                        {
                            data.nights_duration && (
                                <div className={styles.card__duration__item}>
                                    <Image src="/images/line-9.svg" width={24} height={24} alt="Nights" />
                                    <div className={styles.card__duration__item__content}>
                                        <p className={styles.card__duration__item__title}>Nights</p>
                                        <p className={styles.card__duration__item__number}>{data.nights_duration}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
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

export default BookingCard