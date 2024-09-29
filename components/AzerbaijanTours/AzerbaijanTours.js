import Image from 'next/image'
import styles from './AzerbaijanTours.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import SvgArrowLeft from '@/assets/icons/ArrowLeft';
import SvgArrowRight from '@/assets/icons/ArrowRight';
import TourCard from '../TourCard/TourCard';
import ShowMore from '../UI/ShowMore/ShowMore';
import LazyImage from '../LazyImage/LazyImage';
import axios from 'axios';
import { HtmlContent } from '@/utils/HTMLcontent';

const AzerbaijanTours = ({ data, locale }) => {
    const [tourData, setTourData] = useState(data);
    const [activeBtn, setActiveBtn] = useState("baku");

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

    const handleClick = async (slug) => {
        setActiveBtn(slug);

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}home-city-detail/${slug}`, {
                headers: {
                    'Accept-Language': locale,
                },
            });

            setTourData(response.data);
        } catch (error) {
            console.error("Error in getCityTours", error.message);
        }
    }

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
                    {
                        tourData?.cities?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <button
                                    className={`${styles.tour__btn} ${activeBtn === item.slug ? styles.active : ''}`}
                                    onClick={() => handleClick(item.slug)}
                                >
                                    {item.title}
                                </button>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className={styles.tour__detail}>
                    <div className={styles.tour__detail__img}>
                        <LazyImage src={tourData?.city_data?.cover_image} alt={tourData?.city_data?.title} />
                    </div>
                    <div className={styles.tour__content}>
                        <h3 className={styles.tour__title}>{tourData?.city_data?.title}</h3>
                        <HtmlContent
                            html={tourData?.city_data?.body}
                            className={styles.tour__desc}
                        />
                        <div className={styles.tour__includes}>
                            {
                                tourData?.city_data?.chip?.map((item, index) => (
                                    <span className={styles.tour__include} key={index}>
                                        <Image src={item?.icon} width={24} height={24} alt={item?.title} />
                                        {item?.title}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.mobile}>
                    <div className={styles.tour__list}>
                        {
                            tourData?.tours?.map((item, index) => (
                                <TourCard
                                    key={index}
                                    data={item}
                                />
                            ))
                        }
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
                        {
                            tourData?.tours?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <TourCard
                                        data={item}
                                    />
                                </SwiperSlide>
                            ))
                        }
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