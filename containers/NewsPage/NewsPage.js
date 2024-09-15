"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './NewsPage.module.scss'
import NewsCard from '@/components/NewsCard/NewsCard'
import ShowMore from '@/components/UI/ShowMore/ShowMore'

const NewsPage = () => {
    return (
        <>
            <Breadcrumb />
            <div className={styles.news}>
                <div className="g-container">
                    <h1 className="page-title">Tour news</h1>
                    <div className={styles.news__list}>
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                    <ShowMore />
                </div>
            </div>
        </>
    )
}

export default NewsPage