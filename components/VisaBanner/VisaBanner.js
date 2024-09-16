import Link from 'next/link'
import styles from './VisaBanner.module.scss'
import Image from 'next/image'

const VisaBanner = () => {
    return (
        <div className={styles.visaBanner}>
            <div className="g-container">
                <div className={styles.visaBanner__wrapper}>
                    <h2 className={styles.visaBanner__title}>
                        Get travel visa to Azerbaijan
                    </h2>
                    <Link href="/contact" className={styles.visaBanner__link}>
                        Apply for visa
                    </Link>
                    <Image src="https://www.alisontravelgroup.com/uploads/0dddd452956e3b261889.webp" fill priority alt='visa' />
                    <div className={styles.visaBanner__overlay} />
                </div>
            </div>
        </div>
    )
}

export default VisaBanner