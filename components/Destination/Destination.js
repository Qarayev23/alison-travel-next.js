import DestinationCard from '../DestinationCard/DestinationCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './Destination.module.scss'
import { useRef } from 'react';
import SvgArrowRight from '@/assets/icons/ArrowRight';
import SvgArrowLeft from '@/assets/icons/ArrowLeft';

const Destination = ({ data }) => {
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
        <div className={styles.destination}>
            <div className="g-container">
                <h2 className='section-title'>
                    The most popular destinations
                </h2>
                <p className='section-text'>
                    The most popular tour packages
                </p>
                <div className="destination__slider">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        slidesPerView="auto"
                        spaceBetween={0}
                        navigation={{
                            nextEl: "#destinationNextBtn",
                            prevEl: "#destinationPrevBtn",
                        }}
                        breakpoints={{
                            700: {
                                slidesPerView: 4,
                                spaceBetween: 24
                            }
                        }}
                    >
                        {
                            data?.countries?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <DestinationCard data={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <button id='destinationPrevBtn' className="custom-arrow custom-arrow-prev" onClick={goPrev}>
                        <SvgArrowLeft />
                    </button>
                    <button id='destinationNextBtn' className="custom-arrow custom-arrow-next" onClick={goNext}>
                        <SvgArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Destination