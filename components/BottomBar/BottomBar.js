import AngleUp from '@/assets/icons/AngleUp'
import Image from 'next/image'
import styles from './BottomBar.module.scss'

const BottomBar = ({data, selectedOption, isHide, handleShow, onOpenBookingModal, isHoliday }) => {
    return (
        <div className={`${styles.bottomBar} ${isHide ? styles.hide : ""}`}>
            <div className={styles.bottomBar__wrapper}>
                <div className={styles.bottomBar__left}>
                    <button className={styles.bottomBar__open} onClick={handleShow}>
                        <AngleUp />
                    </button>
                    <div className={styles.bottomBar__content}>
                        {
                           isHoliday && (
                                <div className={styles.bottomBar__name}>
                                    <div className={styles.bottomBar__name__icon}>
                                        <Image src="/images/option.svg" width={32} height={32} alt="Option" />
                                        <span>{selectedOption.category.title.charAt(0)}</span>
                                    </div>
                                    <p className={styles.bottomBar__name__text}>
                                        {selectedOption.category.title}
                                    </p>
                                </div>
                            )
                        }
                        <div className={styles.bottomBar__price}>
                            {
                                selectedOption.discount_per_person && (
                                    <p className={styles.bottomBar__price__old}>
                                        ${selectedOption.price_per_person}
                                    </p>
                                )
                            }
                            <p className={styles.bottomBar__price__original}>
                                ${selectedOption.price_per_person - selectedOption.discount_per_person}
                            </p>
                            <p className={styles.bottomBar__price__person}>/person</p>
                        </div>
                        {
                           isHoliday && (
                                <p className={styles.bottomBar__duration}>
                                    {data?.days_duration} days - {data?.nights_duration} nights
                                </p>
                            )
                        }
                    </div>
                </div>
                <div className={styles.bottomBar__right}>
                    <button className={styles.bottomBar__button} onClick={onOpenBookingModal}>
                        Book Now
                        <Image src="/images/basket.svg" width={16} height={16} alt="Basket" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BottomBar