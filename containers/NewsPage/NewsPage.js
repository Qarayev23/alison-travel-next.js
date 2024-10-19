"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './NewsPage.module.scss'
import NewsCard from '@/components/NewsCard/NewsCard'
import ShowMore from '@/components/UI/ShowMore/ShowMore'

const NewsPage = ({ data }) => {
    return (
        <>
            <Breadcrumb data={[{ name: "News", url: "/news" }]} />
            <div className={styles.news}>
                <div className="g-container">
                    <h1 className="page-title">Tour news</h1>
                    <div className={styles.news__list}>
                        {
                            data?.results?.map((item, index) => (
                                <NewsCard data={item} key={index} />
                            ))
                        }
                    </div>
                    <ShowMore />
                </div>
            </div>
        </>
    )
}

export default NewsPage