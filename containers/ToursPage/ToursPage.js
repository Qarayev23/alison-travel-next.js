"use client"

import FilterBar from '@/components/FilterBar/FilterBar'
import styles from './ToursPage.module.scss'
import TourList from '@/components/TourList/TourList'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import SvgFilter from '@/assets/icons/Filter'
import { useState } from 'react'

const ToursPage = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <Breadcrumb />
            <div className={styles.tours}>
                <div className='g-container'>
                    <button className={styles.filterBtn} onClick={handleShow}>
                        <SvgFilter />
                    </button>
                    <div className={styles.tours__wrapper}>
                        <FilterBar show={show} handleShow={handleShow} />
                        <TourList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToursPage