import Image from 'next/image'
import styles from './NoResult.module.scss'

const NoResult = ({ text, page }) => {
    return (
        <div className={styles.notResult}>
            <div className={styles.notResult__img}>
                <Image src='/images/not-result.svg' fill alt='not result' />
            </div>
            <p className={styles.notResult__title}>No result</p>
            <p className={styles.notResult__text}>{text}</p>
            {
                page === "tours" && (
                    <button className={styles.notResult__btn}>Filter another</button>
                )
            }
        </div>
    )
}

export default NoResult