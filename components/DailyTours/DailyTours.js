import styles from './DailyTours.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import SvgArrowRight from '@/assets/icons/ArrowRight';
import SvgArrowLeft from '@/assets/icons/ArrowLeft';
import TourCard from '../TourCard/TourCard';
import ShowMore from '../UI/ShowMore/ShowMore';
import { useRouter } from '@/src/i18n/routing';

const DailyTours = ({ data }) => {
    const swiperRef = useRef(null);
    const router = useRouter();

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

    const handleShowMore = () => {
        router.push(`/tours?is_daily=true`);
    }

    return (
        <div className={styles.DailyTours}>
            <div className="g-container">
                <h2 className='section-title'>
                    {data?.section_title}
                </h2>
                <p className='section-text'>
                    {data?.section_subtitle}
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
                        {
                            data?.data?.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <TourCard data={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <button id='dailyToursPrevBtn' className="custom-arrow custom-arrow-prev" onClick={goPrev}>
                        <SvgArrowLeft />
                    </button>
                    <button id='dailyToursNextBtn' className="custom-arrow custom-arrow-next" onClick={goNext}>
                        <SvgArrowRight />
                    </button>
                </div>
                <ShowMore handleShowMore={handleShowMore} />
            </div>
        </div>
    )
}

export default DailyTours