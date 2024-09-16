import TourCard from '../TourCard/TourCard'
import ShowMore from '../UI/ShowMore/ShowMore'
import styles from './TourList.module.scss'

const TourList = () => {
  return (
    <div className={styles.tour}>
      <h1 className={styles.tour__title}>
        Baku: 1,308 properties found
      </h1>

      <div className={styles.tour__list}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </div>

      <ShowMore />
    </div>
  )
}

export default TourList