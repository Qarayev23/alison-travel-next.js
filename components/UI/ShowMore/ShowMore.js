import Link from 'next/link'
import styles from './ShowMore.module.scss'

const ShowMore = ({ text }) => {
    return (
        <Link href='/' className={styles.showMore}>
            {text}
        </Link>
    )
}

export default ShowMore