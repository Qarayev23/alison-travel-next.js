import Image from 'next/image'
import styles from './AzerbaijanTours.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import SvgArrowLeft from '@/assets/icons/ArrowLeft';
import SvgArrowRight from '@/assets/icons/ArrowRight';
import TourCard from '../TourCard/TourCard';
import ShowMore from '../UI/ShowMore/ShowMore';
import LazyImage from '../LazyImage/LazyImage';

const AzerbaijanTours = () => {
    const swiperRef = useRef(null);

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className={styles.tour}>
            <div className="g-container">
                <h2 className="section-title">
                    Azerbaijan best travel tours
                </h2>
                <p className="section-text">
                    Discover Azerbaijan
                </p>
                <Swiper
                    slidesPerView='auto'
                    spaceBetween="0"
                    className='tour__btn__slider'
                >
                    <SwiperSlide>
                        <button className={`${styles.tour__btn} ${styles.active}`}>
                            Baku
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={styles.tour__btn}>
                            Gabala
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={styles.tour__btn}>
                            Shamakhi
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={styles.tour__btn}>
                            Shaki
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={styles.tour__btn}>
                            Guba
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={styles.tour__btn}>
                            Shahdag
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={styles.tour__btn}>
                            Ganja
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={styles.tour__btn}>
                            Lankaran
                        </button>
                    </SwiperSlide>
                </Swiper>
                <div className={styles.tour__detail}>
                    <div className={styles.tour__detail__img}>
                        <LazyImage src="/images/tour-1.svg" alt='' />
                    </div>
                    <div className={styles.tour__content}>
                        <h3 className={styles.tour__title}>Gabala</h3>
                        <p className={styles.tour__desc}>
                            Gabala is considered a popular tourist destination due to the combination of a very good spring climate, woods along the mountains and beautiful nature was exploited by the construction of large numbers of hotels and apartments in city. The city contains “Gabaland” amusement park, There are all conditions for recreation and entertainment for children an ice skating rink Gabala has several shopping malls; the most famous city center mall is Gabala Mall. Tufan Dag Ski Complex, one of the biggest mountain resorts in Caucasus located in Gabala Since 2009, city has been home of Gabala International Music Festival, which included performances from classical and jazz performers Here tourists are available for restaurants and hotel services at a high level.
                        </p>
                        <div className={styles.tour__includes}>
                            <span className={styles.tour__include}>
                                <Image src="/images/line-1.svg" width={24} height={24} alt='' />
                                Sightseeing tour
                            </span>
                            <span className={styles.tour__include}>
                                <Image src="/images/line-2.svg" width={24} height={24} alt='' />
                                Food & drink
                            </span>
                            <span className={styles.tour__include}>
                                <Image src="/images/line-3.svg" width={24} height={24} alt='' />
                                Day trips
                            </span>
                            <span className={styles.tour__include}>
                                <Image src="/images/line-4.svg" width={24} height={24} alt='' />
                                Transportation
                            </span>
                            <span className={styles.tour__include}>
                                <Image src="/images/line-5.svg" width={24} height={24} alt='' />
                                Historical places
                            </span>
                            <span className={styles.tour__include}>
                                <Image src="/images/line-6.svg" width={24} height={24} alt='' />
                                Boat tours
                            </span>
                            <span className={styles.tour__include}>
                                <Image src="/images/line-7.svg" width={24} height={24} alt='' />
                                Local culture
                            </span>
                            <span className={styles.tour__include}>
                                <Image src="/images/line-8.svg" width={24} height={24} alt='' />
                                Nature & adventure
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.mobile}>
                    <div className={styles.tour__list}>
                        <TourCard />
                        <TourCard />
                        <TourCard />
                        <TourCard />
                    </div>
                    <ShowMore text="Show more" />
                </div>
                <div className="azerbaijanTour__slider">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        slidesPerView="auto"
                        spaceBetween={0}
                        navigation={{
                            nextEl: "#azerbaijanTourNextBtn",
                            prevEl: "#azerbaijanTourPrevBtn",
                        }}
                        breakpoints={{
                            700: {
                                slidesPerView: 4,
                                spaceBetween: 16
                            }
                        }}
                    >
                        <SwiperSlide>
                            <TourCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TourCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TourCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TourCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TourCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TourCard />
                        </SwiperSlide>
                    </Swiper>
                    <button id='azerbaijanTourPrevBtn' className="custom-arrow custom-arrow-prev" onClick={goPrev}>
                        <SvgArrowLeft />
                    </button>
                    <button id='azerbaijanTourNextBtn' className="custom-arrow custom-arrow-next" onClick={goNext}>
                        <SvgArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AzerbaijanTours