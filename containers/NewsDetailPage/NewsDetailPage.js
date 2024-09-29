"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import LazyImage from '@/components/LazyImage/LazyImage'
import RelatedNews from '@/components/RelatedNews/RelatedNews'
import NewsCard from '@/components/NewsCard/NewsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './NewsDetailPage.module.scss'
import { HtmlContent } from '@/utils/HTMLcontent'
import formatDate from '@/utils/formatDate'

const NewsDetailPage = ({ data }) => {
    return (
        <>
            <Breadcrumb />
            <div className={styles.news}>
                <div className="g-container">
                    <div className={styles.news__wrapper}>
                        <div className={styles.news__content}>
                            <div className={styles.news__image}>
                                <LazyImage src={data?.news_detail?.image} alt={data?.news_detail?.title} />
                            </div>
                            <h1 className={`${styles.news__title} section-title`}>
                                {data?.news_detail?.title}
                            </h1>
                            <p className="section-text">{formatDate(data?.news_detail?.created_at)}</p>
                            <HtmlContent
                                html={data?.news_detail?.description}
                                className={`${styles.news__desc} rich-content`}
                            />
                        </div>
                        <div className={styles.relatedNews}>
                            <p className={styles.relatedNews__title}>Related articles</p>
                            <div className={styles.relatedNews__list}>
                                {
                                    data?.related_articles?.map((item, index) => (
                                        <RelatedNews data={item} key={index} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.news__slider}>
                    <div className="g-container">
                        <h4 className="section-title">Related news</h4>

                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            slidesPerView={1}
                            spaceBetween={15}
                            className={styles.news__slider__wrapper}
                        >
                            {
                                data?.related_articles?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <NewsCard data={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsDetailPage