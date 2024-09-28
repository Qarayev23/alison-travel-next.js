import AngleRight from '@/assets/icons/AngleRight'
import styles from './Breadcrumb.module.scss'
import Link from '@/components/Link/Link'

const Breadcrumb = () => {
    return (
        <div className='g-container'>
            <ul className={styles.breadcrumb}>
                <li className={styles.breadcrumb__item}>
                    <Link href="" className={styles.breadcrumb__link}>
                        Home
                        <AngleRight />
                    </Link>
                </li>
                <li className={styles.breadcrumb__item}>
                    <Link href="" className={styles.breadcrumb__link}>
                        Azerbaijan Travel
                        <AngleRight />
                    </Link>
                </li>
                <li className={styles.breadcrumb__item}>
                    <Link href="" className={styles.breadcrumb__link}>
                        Beautiful Gabala Tour Package from Alison
                        <AngleRight />
                    </Link>
                </li>
            </ul>
        </div>

    )
}

export default Breadcrumb