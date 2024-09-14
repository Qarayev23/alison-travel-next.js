"use client"

import TransferCard from '@/components/TransferCard/TransferCard'
import ShowMore from '@/components/UI/ShowMore/ShowMore'
import Search from '@/components/Search/Search'
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './TransferPage.module.scss'

const TransferPage = () => {
    return (
        <>
            <Search />
            <div className={styles.transfer}>
                <div className='g-container'>
                    <h2 className="section-title">Azerbaijan best travel tours</h2>
                    <p className="section-text">Discover Azerbaijan</p>
                    <div className={styles.transfer__list}>
                        <TransferCard />
                        <TransferCard />
                        <TransferCard />
                        <TransferCard />
                        <TransferCard />
                        <TransferCard />
                        <TransferCard />
                        <TransferCard />
                    </div>
                    <ShowMore />
                </div>
            </div>
        </>
    )
}

export default TransferPage