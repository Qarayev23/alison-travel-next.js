import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HotelOptions.module.scss';
import Image from 'next/image';
import Link from '@/components/Link/Link';
import LazyImage from '../LazyImage/LazyImage';

const HotelOptions = ({ data, selectedOption, handleSelectedOption }) => {
    const contentRefs = useRef({});

    return (
        <div className={styles.collapse}>
            <h2 className="section-title">Hotel options</h2>
            <Swiper
                slidesPerView="auto"
                spaceBetween="0"
                className={styles.collapse__slider}
                breakpoints={{
                    700: {
                        slidesPerView: 4,
                    }
                }}
            >
                {data?.map((item, index) => (
                    <SwiperSlide className={styles.collapse__item} key={index}>
                        <input
                            type="radio"
                            id={item.category.title}
                            defaultChecked={selectedOption.category.title === item.category.title}
                            name="radio"
                            onChange={() => handleSelectedOption(item.category.id)}
                        />
                        <label htmlFor={item.category.title} className={styles.collapse__label}>
                            <div className={styles.collapse__label__icon}>
                                <Image src='/images/option.svg' width={32} height={32} alt='Option' />
                                <span>{item.category.title.charAt(0)}</span>
                            </div>
                            <div className={styles.collapse__label__content}>
                                <p className={styles.collapse__label__content__title}>{item.category.title}</p>
                                <p className={styles.collapse__label__content__price}>Price ${item.price_per_person - item.discount_per_person}</p>
                            </div>
                            <span className={styles.collapse__label__arrow}></span>
                        </label>
                    </SwiperSlide>
                ))}
            </Swiper>

            {data.map(item => (
                <div
                    key={`content-${item.category.title}`}
                    ref={el => contentRefs.current[item.category.title] = el}
                    style={{
                        maxHeight: selectedOption.category.title === item.category.title ? `${contentRefs.current[item.category.title]?.scrollHeight}px` : '0',
                    }}
                    className={styles.collapse__content}
                >
                    <div className={styles.collapse__content__wrapper}>
                        {
                            item?.hotels?.map((hotel, index) => (
                                <Link href={`/hotel-bookings/${hotel.slug}`} className={styles.collapse__content__item} key={index}>
                                    <div className={styles.collapse__content__item__img}>
                                        <LazyImage
                                            src={hotel.cover_image}
                                            alt={hotel.title}
                                            borderRadius='1.2rem'
                                            type='middle'
                                        />
                                    </div>
                                    <div className={styles.collapse__content__item__wrapper}>
                                        <p className={styles.collapse__content__item__title}>{hotel.title}</p>
                                        <p className={styles.collapse__content__item__location}>{hotel.country.title}</p>
                                        <div className={styles.collapse__content__item__rating}>
                                            <Image src='/images/star3.svg' width={20} height={19} alt='Star' />
                                            <Image src='/images/star3.svg' width={20} height={19} alt='Star' />
                                            <Image src='/images/star3.svg' width={20} height={19} alt='Star' />
                                            <Image src='/images/star3.svg' width={20} height={19} alt='Star' />
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HotelOptions;