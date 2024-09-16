import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HotelOptions.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import LazyImage from '../LazyImage/LazyImage';

const data = [
    { id: 'economy', title: 'Economy', content: 'Piazza Boutique Hotel' },
    { id: 'standard', title: 'Standard', content: 'Piazza Boutique Hotel' },
    { id: 'premium', title: 'Premium', content: 'Piazza Boutique Hotel' },
    { id: 'luxury', title: 'Luxury', content: 'Piazza Boutique Hotel' },
]

const HotelOptions = () => {
    const [selected, setSelected] = useState(data[0].id);
    const contentRefs = useRef({});

    const handleClick = (id) => {
        setSelected(id);
    };

    return (
        <div className={styles.collapse}>
            <h2 className="section-title">Hotel Options</h2>
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
                {data.map(item => (
                    <SwiperSlide className={styles.collapse__item} key={item.id}>
                        <input type="radio" id={item.id} defaultChecked={selected === item.id} name="radio" onChange={() => handleClick(item.id)} />
                        <label htmlFor={item.id} className={styles.collapse__label}>
                            <div className={styles.collapse__label__icon}>
                                <Image src='/images/option.svg' width={32} height={32} alt='Option' />
                                <span>{item.title.charAt(0)}</span>
                            </div>
                            <div className={styles.collapse__label__content}>
                                <p className={styles.collapse__label__content__title}>{item.title}</p>
                                <p className={styles.collapse__label__content__price}>Price $0</p>
                            </div>
                            <span className={styles.collapse__label__arrow}></span>
                        </label>
                    </SwiperSlide>
                ))}
            </Swiper>

            {data.map(item => (
                <div
                    key={`content-${item.id}`}
                    ref={el => contentRefs.current[item.id] = el}
                    style={{
                        maxHeight: selected === item.id ? `${contentRefs.current[item.id]?.scrollHeight}px` : '0',
                    }}
                    className={styles.collapse__content}
                >
                    <div className={styles.collapse__content__wrapper}>
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <Link href='/hotel-bookings/example' className={styles.collapse__content__item} key={index}>
                                    <div className={styles.collapse__content__item__img}>
                                        <LazyImage
                                            src='https://www.alisontravelgroup.com/uploads/b753eec1c847ecdb828f.webp'
                                            alt=''
                                            borderRadius='1.2rem'
                                            type='middle'
                                        />
                                    </div>
                                    <div className={styles.collapse__content__item__wrapper}>
                                        <p className={styles.collapse__content__item__title}>Piazza Boutique Hotel {item.title}</p>
                                        <p className={styles.collapse__content__item__location}>Tbilisi, Georgia</p>
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