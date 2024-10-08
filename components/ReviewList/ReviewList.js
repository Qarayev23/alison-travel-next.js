import styles from './ReviewList.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import SvgArrowRight from '@/assets/icons/ArrowRight';
import SvgArrowLeft from '@/assets/icons/ArrowLeft';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewList = () => {
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
        <div className={styles.review}>
            <div className='g-container'>
                <h2 className="section-title">Ratings & Reviews</h2>
                <p className='section-text'>
                    Customer reviews
                </p>

                <div className="review__slider">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        slidesPerView="auto"
                        spaceBetween={0}
                        navigation={{
                            nextEl: "#reviewNextBtn",
                            prevEl: "#reviewPrevBtn",
                        }}
                        breakpoints={{
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 16
                            }
                        }}
                    >
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCard />
                        </SwiperSlide>
                    </Swiper>
                    <button id='reviewPrevBtn' className="custom-arrow custom-arrow-prev" onClick={goPrev}>
                        <SvgArrowLeft />
                    </button>
                    <button id='reviewNextBtn' className="custom-arrow custom-arrow-next" onClick={goNext}>
                        <SvgArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewList