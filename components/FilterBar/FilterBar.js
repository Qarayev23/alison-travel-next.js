import SvgClose from '@/assets/icons/Close'
import Checkbox from '../Checkbox/Checkbox'
import PriceRange from '../PriceRange/PriceRange'
import TimesIntervalRange from '../TimesIntervalRange/TimesIntervalRange'
import styles from './FilterBar.module.scss'

const FilterBar = ({ data, show, handleShow }) => {
  return (
    <div className={`${styles.filter} ${show ? styles.show : ''}`}>
      <div className={styles.filter__header}>
        <div className={styles.filter__header__desk}>
          <p className={styles.filter__title}>FILTER BY:</p>
          <button className={styles.filter__reset}>
            <SvgClose />
            Reset filter
          </button>
        </div>
        <div className={styles.filter__header__mob}>
          <button className={styles.filter__close} onClick={handleShow}>
            <SvgClose />
          </button>
          <p className={styles.filter__title}>FILTER</p>
          <button className={styles.filter__reset}>
            Reset
          </button>
        </div>
      </div>
      <div className={styles.filter__wrapper}>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>price range</p>
          <PriceRange priceRange={data?.results?.filter_param?.price_range} />
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>Times interval</p>
          <TimesIntervalRange timesIntervalRange={data?.results?.filter_param?.times_interval} />
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>popular filters</p>
          <div className={styles.filter__content}>
            <Checkbox title="Best Seller" />
            <span className={styles.filter__count}>568</span>
          </div>
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>locations</p>
          <div className={styles.filter__content}>
            <Checkbox title="Baku" />
            <span className={styles.filter__count}>37</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox title="Gabala" />
            <span className={styles.filter__count}>19</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox title="Shaki" />
            <span className={styles.filter__count}>4</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox title="Ganja" />
            <span className={styles.filter__count}>6</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox title="Lankaran" />
            <span className={styles.filter__count}>28</span>
          </div>
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>Rating</p>
          <div className={styles.filter__content}>
            <Checkbox title="4-5 stars" param="ratings" value={[4, 5]} />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["5_star"]}
            </span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox title="3-4 stars" param="ratings" value={[3, 4]} />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["4_star"]}
            </span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox title="2-3 stars" param="ratings" value={[2, 3]} />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["3_star"]}
            </span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox title="1-2 stars" param="ratings" value={[2, 1]} />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["2_star"]}
            </span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox title="0-1 stars" param="ratings" value={[1, 0]} />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["1_star"]}
            </span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox title="Unrated" />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["unrated"]}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.filter__footer}>
        <button className={styles.filter__resultBtn}>Show results</button>
      </div>
    </div>
  )
}

export default FilterBar