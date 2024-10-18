import AngleUp from '@/assets/icons/AngleUp'
import Image from 'next/image'
import styles from './HotelBottomBar.module.scss'

const HotelBottomBar = ({ data, isHide, handleShow, onOpenBookingModal }) => {
    return (
        <div className={`${styles.bottomBar} ${isHide ? styles.hide : ""}`}>
            <div className={styles.bottomBar__wrapper}>
                <div className={styles.bottomBar__left}>
                    <button className={styles.bottomBar__open} onClick={handleShow}>
                        <AngleUp />
                    </button>
                    <div className={styles.bottomBar__content}>
                        <div className={styles.bottomBar__price}>
                            <p className={styles.bottomBar__price__original}>
                                ${data.price_per_person}
                            </p>
                            <p className={styles.bottomBar__price__person}>/person</p>
                        </div>
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

export default HotelBottomBar