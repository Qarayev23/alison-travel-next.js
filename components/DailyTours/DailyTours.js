import styles from './DailyTours.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import SvgArrowRight from '@/assets/icons/ArrowRight';
import SvgArrowLeft from '@/assets/icons/ArrowLeft';
import TourCard from '../TourCard/TourCard';
import ShowMore from '../UI/ShowMore/ShowMore';

const DailyTours = () => {
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
        <div className={styles.DailyTours}>
            <div className="g-container">
                <h2 className='section-title'>
                    Discover the best daily tour packages
                </h2>
                <p className='section-text'>
                    The best sightseeing tour packages | Holiday Packages
                </p>
                <div className="dailyTours__slider">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        slidesPerView="auto"
                        spaceBetween={0}
                        navigation={{
                            nextEl: "#dailyToursNextBtn",
                            prevEl: "#dailyToursPrevBtn",
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
                    <button id='dailyToursPrevBtn' className="custom-arrow custom-arrow-prev" onClick={goPrev}>
                        <SvgArrowLeft />
                    </button>
                    <button id='dailyToursNextBtn' className="custom-arrow custom-arrow-next" onClick={goNext}>
                        <SvgArrowRight />
                    </button>
                </div>
                <ShowMore text="See all" />
            </div>
        </div>
    )
}

export default DailyTours