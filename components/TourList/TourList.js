import TourCard from '../TourCard/TourCard'
import ShowMore from '../UI/ShowMore/ShowMore'
import styles from './TourList.module.scss'
import SvgFilter from '@/assets/icons/Filter'
import NoResult from '../NoResult/NoResult'
import axios from 'axios'
import { useState } from 'react'

const TourList = ({ tourData, handleShow }) => {
  const [data, setData] = useState(tourData)
  const [tours, setTours] = useState(data?.results?.tours)

  const handleShowMore = () => {
    axios.get(data.next).then(res => {
      setData(res.data)
      setTours([...tours, ...res.data?.results?.tours])
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={styles.tour}>
      <h1 className={styles.tour__title}>
        Baku: {data.count} properties found
      </h1>

      <button className={styles.filterBtn} onClick={handleShow}>
        <SvgFilter />
      </button>

      {
        !!tours?.length ? (
          <>
            <div className={styles.tour__list}>
              {
                tours?.map((item, i) => (
                  <TourCard key={i} data={item} />
                ))
              }
            </div>
            {
              data?.next && (
                <ShowMore handleShowMore={handleShowMore} />
              )
            }
          </>
        ) : (
          <NoResult text='There is no search result for your filter choices' page="tours" />
        )
      }
    </div>
  )
}

export default TourList