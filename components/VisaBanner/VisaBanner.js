import Link from '@/components/Link/Link'
import styles from './VisaBanner.module.scss'
import Image from 'next/image'

const VisaBanner = ({ data }) => {
    return (
        <div className={styles.visaBanner}>
            <div className="g-container">
                <div className={styles.visaBanner__wrapper}>
                    <h2 className={styles.visaBanner__title}>
                        {data?.banner_text}
                    </h2>
                    <Link href="/contact" className={styles.visaBanner__link}>
                        Apply for visa
                    </Link>
                    <Image src={data?.background_image} fill priority alt='visa' />
                    <div className={styles.visaBanner__overlay} />
                </div>
            </div>
        </div>
    )
}

export default VisaBanner