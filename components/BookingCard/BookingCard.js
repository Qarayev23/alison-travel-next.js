import Image from 'next/image'
import styles from './BookingCard.module.scss'
import AngleUp from '@/assets/icons/AngleUp'

const BookingCard = ({ handleShow, type, onOpenBookingModal }) => {
    return (
        <div className={styles.card}>
            {
                type === 'tour' && (
                    <div className={styles.card__name}>
                        <div className={styles.card__name__icon}>
                            <Image src="/images/option.svg" width={32} height={32} alt="Option" />
                            <span>E</span>
                        </div>
                        <p className={styles.card__name__text}>Economy</p>
                    </div>
                )
            }
            <div className={styles.card__price}>
                <p className={styles.card__price__old}>$119</p>
                <p className={styles.card__price__original}>$102</p>
                <p className={styles.card__price__person}> {type === 'tour' ? '/person' : '/per night'}</p>
            </div>
            <div className={styles.card__rating}>
                <Image src="/images/star.svg" width={20} height={19} alt="Rating" />
                <p className={styles.card__rating__text}>4.8</p>
                <p className={styles.card__rating__reviews}>(120 reviews)</p>
            </div>
            {
                type === 'tour' && (
                    <div className={styles.card__duration}>
                        <div className={styles.card__duration__item}>
                            <Image src="/images/line-1.svg" width={24} height={24} alt="Days" />
                            <div className={styles.card__duration__item__content}>
                                <p className={styles.card__duration__item__title}>Days</p>
                                <p className={styles.card__duration__item__number}>5</p>
                            </div>
                        </div>
                        <div className={styles.card__duration__item}>
                            <Image src="/images/line-9.svg" width={24} height={24} alt="Nights" />
                            <div className={styles.card__duration__item__content}>
                                <p className={styles.card__duration__item__title}>Nights</p>
                                <p className={styles.card__duration__item__number}>6</p>
                            </div>
                        </div>
                    </div>
                )
            }
            <button className={styles.card__button} onClick={onOpenBookingModal}>
                Book Now
                <Image src="/images/basket.svg" width={16} height={16} alt="Basket" />
            </button>
            <div className={styles.card__list}>
                <div className={styles.card__list__item}>
                    <Image src="/images/safety.svg" width={24} height={24} alt="Safety" />
                    <div className={styles.card__list__item__content}>
                        <p className={styles.card__list__item__title}>Safety holiday</p>
                        <p className={styles.card__list__item__desc}>Description text will be here for info</p>
                    </div>
                </div>
                <div className={styles.card__list__item}>
                    <Image src="/images/lock.svg" width={24} height={24} alt="Lock" />
                    <div className={styles.card__list__item__content}>
                        <p className={styles.card__list__item__title}>Trustable tourism</p>
                        <p className={styles.card__list__item__desc}>Description text will be here for info</p>
                    </div>
                </div>
                <div className={styles.card__list__item}>
                    <Image src="/images/calendar.svg" width={24} height={24} alt="Calendar" />
                    <div className={styles.card__list__item__content}>
                        <p className={styles.card__list__item__title}>Credit up to 12 months</p>
                        <p className={styles.card__list__item__desc}>Description text will be here for info</p>
                    </div>
                </div>
                <div className={styles.card__list__item}>
                    <Image src="/images/refund.svg" width={24} height={24} alt="Refund" />
                    <div className={styles.card__list__item__content}>
                        <p className={styles.card__list__item__title}>Warranty for refund</p>
                        <p className={styles.card__list__item__desc}>Description text will be here for info</p>
                    </div>
                </div>
            </div>
            <button className={styles.card__close} onClick={handleShow}>
                <AngleUp />
            </button>
        </div>
    )
}

export default BookingCard