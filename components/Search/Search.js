import SvgHolidays from '@/assets/icons/Holidays'
import styles from './Search.module.scss'
import SvgHotels from '@/assets/icons/Hotels'
import SvgTransfers from '@/assets/icons/Transfers'
import SvgSearch from '@/assets/icons/Search'
import SvgDailyTours from '@/assets/icons/DailyTours'
import { useCallback, useRef, useState } from 'react'
import Link from '@/components/Link/Link'
import SvgArrowRight from '@/assets/icons/ArrowRight'
import { Swiper, SwiperSlide } from 'swiper/react';
import LazyImage from '../LazyImage/LazyImage'
import { debounce } from 'lodash'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'

const Search = ({ data }) => {
    const [placeHolders, setPlaceHolders] = useState({
        holidays: data.search_holidays_placeholder,
        hotels: data.search_hotels_placeholder,
        transfers: data.search_transfer_placeholder,
        dailyTours: data.search_daily_placeholder,
    })
    const [acticePlaceholder, setActivePlaceholder] = useState(placeHolders.holidays)
    const [results, setResults] = useState([])
    const [value, setValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [tab, setTab] = useState("holidays")
    const [isFocus, setIsFocus] = useState(false)
    const inputRef = useRef()

    const handleChangeInput = (e) => {
        setValue(e.target.value.trim())
        debouncedCall(e.target.value.trim())
    }

    const debouncedCall = useCallback(debounce((newValue) => {
        if (newValue.length > 2) {
            if (tab === "holidays") {
                setIsLoading(true)

                axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}tours?q=${newValue}&is_daily=${false}&size=5`,)
                    .then((res) => {
                        setResults(res.data.results.tours)
                    })
                    .catch((err) => {
                        console.log(err)
                    }).finally(() => {
                        setIsLoading(false)
                    })
            } else if (tab === "hotels") {
                setIsLoading(true)

                axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}hotels?q=${newValue}&size=5`,)
                    .then((res) => {
                        setResults(res.data.results.hotels)
                    })
                    .catch((err) => {
                        console.log(err)
                    }).finally(() => {
                        setIsLoading(false)
                    })
            } else if (tab === "dailyTours") {
                axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}tours?q=${newValue}&is_daily=${true}&size=5`,)
                    .then((res) => {
                        setResults(res.data.results.tours)
                    })
                    .catch((err) => {
                        console.log(err)
                    }).finally(() => {
                        setIsLoading(false)
                    })
            }
        } else {
            setResults([])
        }
    }, 400), [tab]);

    const handleChangeTab = (e) => {
        setTab(e.target.id)
        setActivePlaceholder(placeHolders[e.target.id])
        setValue("")
        setResults([])
    }

    const handleFocus = () => {
        setIsFocus((prev) => !prev)
    }

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <div className={styles.search}>
            <div className="g-container">
                <div className={styles.search__wrapper}>
                    <h1 className={styles.search__title}>
                        {data?.banner_text}
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
                                        <input
                                            type="radio"
                                            onChange={handleChangeTab}
                                            defaultChecked
                                            name='type'
                                            id='holidays'
                                        />
                                        <label htmlFor="holidays">
                                            <SvgHolidays />
                                            Holidays
                                        </label>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.search__tab__item}>
                                        <input
                                            type="radio"
                                            onChange={handleChangeTab}
                                            name='type'
                                            id='hotels'
                                        />
                                        <label htmlFor="hotels">
                                            <SvgHotels />
                                            Hotels
                                        </label>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.search__tab__item}>
                                        <input
                                            type="radio"
                                            onChange={handleChangeTab}
                                            name='type'
                                            id='dailyTours'
                                        />
                                        <label htmlFor="dailyTours">
                                            <SvgDailyTours />
                                            Daily tours
                                        </label>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.search__tab__item}>
                                        <input
                                            type="radio"
                                            onChange={handleChangeTab}
                                            name='type'
                                            id='transfers'
                                        />
                                        <label htmlFor="transfers">
                                            <SvgTransfers />
                                            Transfers
                                        </label>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={styles.search__field}>
                            <div className={styles.search__field__left}>
                                <span className={styles.search__field__icon} onClick={focusInput}>
                                    <SvgSearch />
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className={styles.search__field__input}
                                    value={value}
                                    onFocus={handleFocus}
                                    onBlur={handleFocus}
                                    onChange={handleChangeInput}
                                />
                                <span className={`${styles.search__field__placeholder} ${value ? styles.hidden : ""}`}>
                                    {acticePlaceholder}
                                </span>
                            </div>
                            <div className={styles.search__field__right}>
                                <button className={styles.search__field__btn} type='submit'>Search</button>
                            </div>

                            <div className={`${styles.autocomplete} ${(isFocus && value.length > 2) ? styles.show : ""}`}>
                                {
                                    !!results.length && (
                                        <ul className={styles.autocomplete__list}>
                                            {
                                                results?.map((item, index) => (
                                                    <li className={styles.autocomplete__item} key={index}>
                                                        <Link
                                                            href={`${(tab === "holidays" || tab === "dailyTours") ? `/tours/${item.slug}` : tab === "transfers" ? `/transfers/${item.slug}` : `/hotels/${item.slug}`}`}
                                                            className={styles.autocomplete__link}
                                                        >
                                                            <span className={styles.autocomplete__img}>
                                                                <LazyImage
                                                                    src={item.image || item.cover_image}
                                                                    alt={item.title}
                                                                    type="small"
                                                                />
                                                            </span>
                                                            <span className={styles.autocomplete__text}>
                                                                {item.title}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                                <div className={`${styles.autocomplete__more} ${results.length === 0 ? styles.hidden : ""}`}>
                                    <Link href='/' className={styles.autocomplete__more__link}>
                                        See all results for &quot;{value}&quot;
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