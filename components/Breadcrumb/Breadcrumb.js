import AngleRight from '@/assets/icons/AngleRight'
import styles from './Breadcrumb.module.scss'
import Link from '@/components/Link/Link'

const Breadcrumb = ({data}) => {
    return (
        <div className='g-container'>
            <ul className={styles.breadcrumb}>
               <li className={styles.breadcrumb__item}>
                    <Link href="/" className={styles.breadcrumb__link}>
                        Home
                        <AngleRight />
                    </Link>
                </li>
                {
                    data.map((item, i) => (
                        <li className={styles.breadcrumb__item} key={i}>
                            <Link href={item.url} className={styles.breadcrumb__link}>
                                {item.name}
                                <AngleRight />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}

export default Breadcrumb