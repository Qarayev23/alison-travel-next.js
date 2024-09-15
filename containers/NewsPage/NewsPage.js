"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './NewsPage.module.scss'
import NewsCard from '@/components/NewsCard/NewsCard'

const NewsPage = () => {
    return (
        <>
            <Breadcrumb />
            <div className={styles.news}>
                <div className="g-container">
                    <h1 className="section-title">Tour news</h1>
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
                </div>
            </div>
        </>
    )
}

export default NewsPage