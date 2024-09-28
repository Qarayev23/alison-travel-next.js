import Link from '@/components/Link/Link'
import styles from './ShowMore.module.scss'
import Image from 'next/image'

const ShowMore = () => {
    return (
        <Link href='/' className={styles.showMore}>
            <Image src='/images/showMore.svg' width={16} height={16} alt='Show More' />
            Show more
        </Link>
    )
}

export default ShowMore