import TourCard from '../TourCard/TourCard'
import ShowMore from '../UI/ShowMore/ShowMore'
import styles from './BestTours.module.scss'

const BestTours = ({ data }) => {
    return (
        <div className={styles.tour}>
            <div className='g-container'>
                <h2 className="section-title">
                    {data?.section_title}
                </h2>
                <p className="section-text">
                    {data?.section_subtitle}
                </p>
                <div className={styles.tour__list}>
                    {
                        data?.data?.map((item, i) => (
                            <TourCard key={i} data={item} />
                        ))
                    }
                </div>
                <ShowMore />
            </div>
        </div>
    )
}

export default BestTours