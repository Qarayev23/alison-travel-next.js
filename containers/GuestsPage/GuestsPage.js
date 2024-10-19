"use client"

import LazyImage from '@/components/LazyImage/LazyImage';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Lightbox from 'react-image-lightbox';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-image-lightbox/style.css';
import styles from './GuestsPage.module.scss'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const GuestsPage = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <>
            <Breadcrumb data={[{ name: 'Our guests', url: '/guests' }]} />
            <div className={styles.guests}>
                <div className="g-container">
                    <h1 className='page-title'>{data?.title}</h1>
                    <p className='section-text'>{data?.subtitle}</p>
                    <div className={styles.guests__list}>
                        {
                            data?.images.map((item, index) => (
                                <div key={index} className={styles.guests__image} onClick={() => { setIsOpen(true); setPhotoIndex(index); }}>
                                    <LazyImage src={item.image} fill alt="our guests" />
                                </div>
                            ))
                        }
                    </div>

                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={15}
                        className={styles.guests__slider}
                    >
                        {data?.images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.guests__slider__item} onClick={() => { setIsOpen(true); setPhotoIndex(index); }}>
                                    <LazyImage src={item.image} borderRadius="0" alt='our guests' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {isOpen && (
                        <Lightbox
                            mainSrc={data?.images[photoIndex]}
                            nextSrc={data?.images[(photoIndex + 1) % data?.images.length]}
                            prevSrc={data?.images[(photoIndex + data?.images.length - 1) % data?.images.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() => setPhotoIndex((photoIndex + data?.images.length - 1) % data?.images.length)}
                            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % data?.images.length)}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default GuestsPage