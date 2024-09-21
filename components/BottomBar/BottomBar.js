import AngleUp from '@/assets/icons/AngleUp'
import Image from 'next/image'
import styles from './BottomBar.module.scss'

const BottomBar = ({ isHide, handleShow, onOpenBookingModal, type }) => {
    return (
        <div className={`${styles.bottomBar} ${isHide ? styles.hide : ""}`}>
            <div className={styles.bottomBar__wrapper}>
                <div className={styles.bottomBar__left}>
                    <button className={styles.bottomBar__open} onClick={handleShow}>
                        <AngleUp />
                    </button>
                    <div className={styles.bottomBar__content}>
                        {
                            type === 'tour' && (
                                <div className={styles.bottomBar__name}>
                                    <div className={styles.bottomBar__name__icon}>
                                        <Image src="/images/option.svg" width={32} height={32} alt="Option" />
                                        <span>E</span>
                                    </div>
                                    <p className={styles.bottomBar__name__text}>Economy</p>
                                </div>
                            )
                        }
                        <div className={styles.bottomBar__price}>
                            <p className={styles.bottomBar__price__old}>$119</p>
                            <p className={styles.bottomBar__price__original}>$102</p>
                            <p className={styles.bottomBar__price__person}>/person</p>
                        </div>
                        {
                            type === 'tour' && (
                                <p className={styles.bottomBar__duration}>
                                    5 days - 6 nights
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