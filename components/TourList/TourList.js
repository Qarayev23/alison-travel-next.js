import Image from 'next/image'
import TourCard from '../TourCard/TourCard'
import ShowMore from '../UI/ShowMore/ShowMore'
import styles from './TourList.module.scss'
import SvgFilter from '@/assets/icons/Filter'

const TourList = ({handleShow}) => {
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

      {/* <div className={styles.notResult}>
        <div className={styles.notResult__img}>
          <Image src='/images/not-result.svg' fill alt='not result' />
        </div>
        <p className={styles.notResult__title}>No result</p>
        <p className={styles.notResult__text}>There is no search result for your filter choices</p>
        <button className={styles.notResult__btn}>Filter another</button>
      </div> */}
    </div>
  )
}

export default TourList