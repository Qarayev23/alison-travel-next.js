import TourCard from '../TourCard/TourCard'
import ShowMore from '../UI/ShowMore/ShowMore'
import styles from './TourList.module.scss'
import SvgFilter from '@/assets/icons/Filter'
import NoResult from '../NoResult/NoResult'

const TourList = ({ handleShow }) => {
  return (
    <div className={styles.tour}>
      <h1 className={styles.tour__title}>
        Baku: 1,308 properties found
      </h1>

      <button className={styles.filterBtn} onClick={handleShow}>
        <SvgFilter />
      </button>

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

      <NoResult text='There is no search result for your filter choices' page="tours" />
    </div>
  )
}

export default TourList