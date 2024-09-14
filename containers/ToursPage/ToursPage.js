"use client"

import FilterBar from '@/components/FilterBar/FilterBar'
import styles from './ToursPage.module.scss'
import TourList from '@/components/TourList/TourList'

const ToursPage = () => {
    return (
        <div className={styles.tours}>
            <div className='g-container'>
                <div className={styles.tours__wrapper}>
                    <FilterBar />
                    <TourList />
                </div>
            </div>
        </div>
    )
}

export default ToursPage