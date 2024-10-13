import TourCard from '../TourCard/TourCard'
import ShowMore from '../UI/ShowMore/ShowMore'
import styles from './TourList.module.scss'
import SvgFilter from '@/assets/icons/Filter'
import NoResult from '../NoResult/NoResult'

const TourList = ({ data, handleShow }) => {
  
  return (
    <div className={styles.tour}>
      <h1 className={styles.tour__title}>
        Baku: 1,308 properties found
      </h1>

      <button className={styles.filterBtn} onClick={handleShow}>
        <SvgFilter />
      </button>

      {
        !!data?.results?.tours?.length ? (
          <>
            <div className={styles.tour__list}>
              {
                data?.results?.tours?.map((item, i) => (
                  <TourCard key={i} data={item} />
                ))
              }
            </div>
            <ShowMore />
          </>
        ) : (
          <NoResult text='There is no search result for your filter choices' page="tours" />
        )
      }
    </div>
  )
}

export default TourList