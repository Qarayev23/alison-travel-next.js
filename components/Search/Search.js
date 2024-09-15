import SvgHolidays from '@/assets/icons/Holidays'
import styles from './Search.module.scss'
import SvgHotels from '@/assets/icons/Hotels'
import SvgTransfers from '@/assets/icons/Transfers'
import SvgSearch from '@/assets/icons/Search'
import SvgDailyTours from '@/assets/icons/DailyTours'
import { useRef, useState } from 'react'
import Link from 'next/link'
import SvgArrowRight from '@/assets/icons/ArrowRight'
import { Swiper, SwiperSlide } from 'swiper/react';
import LazyImage from '../LazyImage/LazyImage'

const Search = () => {
    const [value, setValue] = useState("")
    const [isFocus, setIsFocus] = useState(false)
    const inputRef = useRef()

    const handleFocus = () => {
        setIsFocus((prev) => !prev)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <div className={styles.search}>
            <div className="g-container">
                <div className={styles.search__wrapper}>
                    <h1 className={styles.search__title}>
                        Best travel packages in one place
                    </h1>
                    <form className={styles.search__form}>
                        <div className={styles.search__tab}>
                            <Swiper
                                slidesPerView='auto'
                                spaceBetween={0}
                                className='search__tab__slider'
                            >
                                <SwiperSlide>
                                    <div className={styles.search__tab__item}>
                                        <input type="radio" defaultChecked name='type' id='holidays' />
                                        <label htmlFor="holidays">
                                            <SvgHolidays />
                                            Holidays
                                        </label>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.search__tab__item}>
                                        <input type="radio" name='type' id='hotels' />
                                        <label htmlFor="hotels">
                                            <SvgHotels />
                                            Hotels
                                        </label>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.search__tab__item}>
                                        <input type="radio" name='type' id='dailyTours' />
                                        <label htmlFor="dailyTours">
                                            <SvgDailyTours />
                                            Daily tours
                                        </label>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.search__tab__item}>
                                        <input type="radio" name='type' id='transfers' />
                                        <label htmlFor="transfers">
                                            <SvgTransfers />
                                            Transfers
                                        </label>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={styles.search__field}>
                            <div className={`${styles.search__field__left} ${value ? styles.active : ""}`}>
                                <span className={styles.search__field__icon} onClick={focusInput}>
                                    <SvgSearch />
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className={styles.search__field__input}
                                    onFocus={handleFocus}
                                    onBlur={handleFocus}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.search__field__right}>
                                <button className={styles.search__field__btn} type='submit'>Search</button>
                            </div>

                            <div className={`${styles.autocomplete} ${isFocus ? styles.show : ""}`}>
                                <ul className={styles.autocomplete__list}>
                                    <li className={styles.autocomplete__item}>
                                        <Link href='/' className={styles.autocomplete__link}>
                                            <span className={styles.autocomplete__img}>
                                                <LazyImage
                                                    src="https://www.alisontravelgroup.com/uploads/193e836144ed6b0a2296.webp"
                                                    alt=""
                                                    type="small"
                                                />
                                            </span>
                                            <span className={styles.autocomplete__text}>A luxurious New Year&apos;s tour package in Azerbaijan</span>
                                        </Link>
                                    </li>
                                    <li className={styles.autocomplete__item}>
                                        <Link href='/' className={styles.autocomplete__link}>
                                            <span className={styles.autocomplete__img}>
                                                <LazyImage
                                                    src="https://www.alisontravelgroup.com/uploads/40fbcf7b2def78973793.webp"
                                                    alt=""
                                                    type="small"
                                                />
                                            </span>
                                            <span className={styles.autocomplete__text}>Baku: Icheri Sheher walking tour package
                                            </span>
                                        </Link>
                                    </li>
                                    <li className={styles.autocomplete__item}>
                                        <Link href='/' className={styles.autocomplete__link}>
                                            <span className={styles.autocomplete__img}>
                                                <LazyImage
                                                    src="https://www.alisontravelgroup.com/uploads/447c35f5e28d0ada8886.webp"
                                                    alt=""
                                                    type="small"
                                                />
                                            </span>
                                            <span className={styles.autocomplete__text}>Great Azerbaijan tour package</span>
                                        </Link>
                                    </li>
                                    <li className={styles.autocomplete__item}>
                                        <Link href='/' className={styles.autocomplete__link}>
                                            <span className={styles.autocomplete__img}>
                                                <LazyImage
                                                    src="https://www.alisontravelgroup.com/uploads/193e836144ed6b0a2296.webp"
                                                    alt=""
                                                    type="small"
                                                />
                                            </span>
                                            <span className={styles.autocomplete__text}>A luxurious New Year&apos;s tour package in Azerbaijan</span>
                                        </Link>
                                    </li>
                                    <li className={styles.autocomplete__item}>
                                        <Link href='/' className={styles.autocomplete__link}>
                                            <span className={styles.autocomplete__img}>
                                                <LazyImage
                                                    src="https://www.alisontravelgroup.com/uploads/40fbcf7b2def78973793.webp"
                                                    alt=""
                                                    type="small"
                                                />
                                            </span>
                                            <span className={styles.autocomplete__text}>Baku: Icheri Sheher walking tour package
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className={styles.autocomplete__more}>
                                    <Link href='/' className={styles.autocomplete__more__link}>
                                        See all results for &quot;baku&quot;
                                        <SvgArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search