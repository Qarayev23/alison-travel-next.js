import Image from 'next/image'
import styles from './WeProvide.module.scss'

const WeProvide = () => {
    return (
        <div className={styles.weProvide}>
            <div className="g-container">
                <h2 className="section-title">
                    Options we provide
                </h2>
                <p className="section-text">
                    Keep calm & travel on
                </p>
                <div className={styles.weProvide__list}>
                    <div className={styles.weProvide__item}>
                        <Image src="/images/provide.svg" width={32} height={32} alt='Best Price Guaranteed' />
                        <div className={styles.weProvide__item__content}>
                            <h3 className={styles.weProvide__item__title}>Best price guaranteed</h3>
                            <p className={styles.weProvide__item__desc}>Description text will be here for info</p>
                        </div>
                    </div>
                    <div className={styles.weProvide__item}>
                        <Image src="/images/provide-1.svg" width={32} height={32} alt='Free cancellation' />
                        <div className={styles.weProvide__item__content}>
                            <h3 className={styles.weProvide__item__title}>Free cancellation</h3>
                            <p className={styles.weProvide__item__desc}>Description text will be here for info</p>
                        </div>
                    </div>
                    <div className={styles.weProvide__item}>
                        <Image src="/images/provide-2.svg" width={32} height={32} alt='Reserve now, pay later' />
                        <div className={styles.weProvide__item__content}>
                            <h3 className={styles.weProvide__item__title}>Reserve now, pay later</h3>
                            <p className={styles.weProvide__item__desc}>Description text will be here for info</p>
                        </div>
                    </div>
                    <div className={styles.weProvide__item}>
                        <Image src="/images/provide-3.svg" width={32} height={32} alt='10 000+ happy customer' />
                        <div className={styles.weProvide__item__content}>
                            <h3 className={styles.weProvide__item__title}>10 000+ happy customer</h3>
                            <p className={styles.weProvide__item__desc}>Description text will be here for info</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeProvide