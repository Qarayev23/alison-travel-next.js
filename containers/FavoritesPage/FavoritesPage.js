"use client"

import HotelCard from '@/components/HotelCard/HotelCard'
import TourCard from '@/components/TourCard/TourCard'
import TransferCard from '@/components/TransferCard/TransferCard'
import styles from './FavoritesPage.module.scss'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'

const FavoritesPage = () => {
    return (
        <>
            <Breadcrumb />
            <div className={styles.favorites}>
                <div className="g-container">
                    <div className={styles.favorites__wrapper}>
                        <div className={styles.favorites__item}>
                            <h2 className="page-title">Tours</h2>
                            <div className={styles.favorites__list}>
                                <TourCard isFavourite />
                                <TourCard isFavourite />
                                <TourCard isFavourite />
                                <TourCard isFavourite />
                                <TourCard isFavourite />
                            </div>
                        </div>
                        <div className={styles.favorites__item}>
                            <h2 className="page-title">Hotels</h2>
                            <div className={styles.favorites__list}>
                                <HotelCard isFavourite />
                                <HotelCard isFavourite />
                                <HotelCard isFavourite />
                            </div>
                        </div>
                        <div className={styles.favorites__item}>
                            <h2 className="page-title">Transfers</h2>
                            <div className={styles.favorites__list}>
                                <TransferCard isFavourite />
                                <TransferCard isFavourite />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavoritesPage