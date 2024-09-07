import Image from 'next/image'
import styles from './GoogleRating.module.scss'

const GoogleRating = () => {
    return (
        <div className={styles.googleRating}>
            <div className='g-container'>
                <div className={styles.googleRating__wrapper}>
                    <div className={styles.googleRating__icon}>
                        <Image
                            src='/images/google.png'
                            width={100}
                            height={60}
                            alt='google' />
                    </div>
                    <div className={styles.googleRating__content}>
                        <div className={styles.googleRating__star}>
                            <div className={styles.googleRating__star__icons}>
                                <Image src='/images/star2.svg' width={15} height={15} alt='star' />
                                <Image src='/images/star2.svg' width={15} height={15} alt='star' />
                                <Image src='/images/star2.svg' width={15} height={15} alt='star' />
                                <Image src='/images/star2.svg' width={15} height={15} alt='star' />
                                <Image src='/images/star2.svg' width={15} height={15} alt='star' />
                            </div>
                            <span className={styles.googleRating__star__value}>
                                4.8
                            </span>
                        </div>
                        <p className={styles.googleRating__text}>
                            Trusted by more than 11000 people
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogleRating