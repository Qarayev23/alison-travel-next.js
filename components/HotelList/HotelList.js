import HotelCard from '../HotelCard/HotelCard'
import styles from './HotelList.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import SvgArrowLeft from '@/assets/icons/ArrowLeft';
import SvgArrowRight from '@/assets/icons/ArrowRight';
import ShowMore from '../UI/ShowMore/ShowMore';

const HotelList = ({ data }) => {
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
        <div className={styles.hotel}>
            <div className="g-container">
                <h2 className="section-title">
                    Best hotel bookings
                </h2>
                <p className="section-text">
                    The best staying hotels
                </p>
                <div className={styles.mobile}>
                    <div className={styles.hotel__list}>
                        {
                            data?.hotels?.map((item, i) => (
                                <HotelCard key={i} data={item} chips={data.active_chips} />
                            ))
                        }
                    </div>
                </div>
                <div className="hotelList__slider">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        slidesPerView="auto"
                        spaceBetween={0}
                        navigation={{
                            nextEl: "#hotelNextBtn",
                            prevEl: "#hotelPrevBtn",
                        }}
                        breakpoints={{
                            700: {
                                slidesPerView: 4,
                                spaceBetween: 16
                            }
                        }}
                    >
                        {
                            data?.hotels?.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <HotelCard data={item} chips={data.active_chips} />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                    <button id='hotelPrevBtn' className="custom-arrow custom-arrow-prev" onClick={goPrev}>
                        <SvgArrowLeft />
                    </button>
                    <button id='hotelNextBtn' className="custom-arrow custom-arrow-next" onClick={goNext}>
                        <SvgArrowRight />
                    </button>
                </div>
                <ShowMore />
            </div>
        </div>
    )
}

export default HotelList