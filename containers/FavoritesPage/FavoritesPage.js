"use client"

import HotelCard from '@/components/HotelCard/HotelCard'
import TourCard from '@/components/TourCard/TourCard'
import TransferCard from '@/components/TransferCard/TransferCard'
import styles from './FavoritesPage.module.scss'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { useSelector } from 'react-redux'
import NoResult from '@/components/NoResult/NoResult'

const FavoritesPage = () => {
    const { hotels, tours, transfers } = useSelector(state => state.wishlist);

    return (
        <>
            <Breadcrumb data={[{ name: 'Favorites', url: '/favorites' }]} />
            <div className={styles.favorites}>
                <div className="g-container">
                    {
                        (!!hotels.length || tours.length || !!transfers.length) ? (
                            <div className={styles.favorites__wrapper}>
                                {
                                    !!tours.length && (
                                        <div className={styles.favorites__item}>
                                            <h2 className="page-title">Tours</h2>
                                            <div className={styles.favorites__list}>
                                                {
                                                    tours.map((item, i) => (
                                                        <TourCard key={i} data={item} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    !!hotels.length && (
                                        <div className={styles.favorites__item}>
                                            <h2 className="page-title">Hotels</h2>
                                            <div className={styles.favorites__list}>
                                                {
                                                    hotels.map((item, i) => (
                                                        <HotelCard key={i} data={item} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    !!transfers.length && (
                                        <div className={styles.favorites__item}>
                                            <h2 className="page-title">Transfers</h2>
                                            <div className={styles.favorites__list}>
                                                {
                                                    transfers.map((item, i) => (
                                                        <TransferCard key={i} data={item} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        ) : (
                            <NoResult text='No favorites yet' />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default FavoritesPage