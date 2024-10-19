import styles from './ShowMore.module.scss'
import Image from 'next/image'

const ShowMore = ({ handleShowMore }) => {
    return (
        <button onClick={handleShowMore} className={styles.showMore}>
            <Image src='/images/showMore.svg' width={16} height={16} alt='Show More' />
            Show more
        </button>
    )
}

export default ShowMore