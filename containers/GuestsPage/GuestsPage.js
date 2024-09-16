"use client"

const images = [
    "https://www.alisontravelgroup.com/uploads/433363d509017aa03425.jpeg",
    'https://www.alisontravelgroup.com/uploads/632619a0cfc94efb4175.jpeg',
    'https://www.alisontravelgroup.com/uploads/517c6c634921b0faf852.jpeg',
    'https://www.alisontravelgroup.com/uploads/f852cf54b505b9e60395.jpeg',
    'https://www.alisontravelgroup.com/uploads/13f71c5f2656f4afd702.jpeg',
    'https://www.alisontravelgroup.com/uploads/afc936d553c9286151e5.jpeg'
];

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

const GuestsPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <>
            <Breadcrumb />
            <div className={styles.guests}>
                <div className="g-container">
                    <h1 className='page-title'>Our guests</h1>
                    <p className='section-text'>Let’s contact!</p>
                    <div className={styles.guests__list}>
                        {
                            images.map((image, index) => (
                                <div key={index} className={styles.guests__image} onClick={() => { setIsOpen(true); setPhotoIndex(index); }}>
                                    <LazyImage src={image} fill alt="our guests" />
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
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.guests__slider__item} onClick={() => { setIsOpen(true); setPhotoIndex(index); }}>
                                    <LazyImage src={src} borderRadius="0" alt='' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default GuestsPage