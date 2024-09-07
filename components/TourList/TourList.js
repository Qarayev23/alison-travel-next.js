import TourCard from '../TourCard/TourCard'
import ShowMore from '../UI/ShowMore/ShowMore'
import styles from './TourList.module.scss'

const TourList = () => {
    return (
        <div className={styles.tour}>
            <div className='g-container'>
                <h2 className="section-title">
                    Azerbaijan best travel tours
                </h2>
                <p className="section-text">
                    Discover Azerbaijan
                </p>
                <div className={styles.tour__list}>
                    {
                        Array.from({ length: 12 }).map((_, i) => <TourCard key={i} />)
                    }
                </div>
                <ShowMore />
            </div>
        </div>
    )
}

export default TourList