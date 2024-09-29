import styles from './NewsList.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import SvgArrowRight from '@/assets/icons/ArrowRight';
import SvgArrowLeft from '@/assets/icons/ArrowLeft';
import NewsCard from '../NewsCard/NewsCard';

const NewsList = () => {
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
        <div className={styles.news}>
            <div className='g-container'>
                <h2 className="section-title">Travel news</h2>
                <p className='section-text'>
                    Travel news, travel guides and reviews
                </p>

                <div className="news__slider">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        slidesPerView="auto"
                        spaceBetween={0}
                        navigation={{
                            nextEl: "#newsNextBtn",
                            prevEl: "#newsPrevBtn",
                        }}
                        breakpoints={{
                            700: {
                                slidesPerView: 4,
                                spaceBetween: 16
                            }
                        }}
                    >
                        {/* <SwiperSlide>
                            <NewsCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCard />
                        </SwiperSlide> */}
                    </Swiper>
                    <button id='newsPrevBtn' className="custom-arrow custom-arrow-prev" onClick={goPrev}>
                        <SvgArrowLeft />
                    </button>
                    <button id='newsNextBtn' className="custom-arrow custom-arrow-next" onClick={goNext}>
                        <SvgArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsList