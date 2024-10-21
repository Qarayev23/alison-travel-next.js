import SvgClose from '@/assets/icons/Close'
import Checkbox from '../Checkbox/Checkbox'
import PriceRange from '../PriceRange/PriceRange'
import TimesIntervalRange from '../TimesIntervalRange/TimesIntervalRange'
import styles from './FilterBar.module.scss'
import { useRouter } from '@/src/i18n/routing'
import { useSearchParams } from 'next/navigation'

const FilterBar = ({ data, show, handleShow, isHotel }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const resetFilter = () => {
    router.push('/hotels')
  }

  return (
    <div className={`${styles.filter} ${show ? styles.show : ''}`}>
      <div className={styles.filter__header}>
        <div className={styles.filter__header__desk}>
          <p className={styles.filter__title}>FILTER BY:</p>
          {
            params.size > 0 && (
              <button className={styles.filter__reset} onClick={resetFilter}>
                <SvgClose />
                Reset filter
              </button>
            )
          }
        </div>
        <div className={styles.filter__header__mob}>
          <button className={styles.filter__close} onClick={handleShow}>
            <SvgClose />
          </button>
          <p className={styles.filter__title}>FILTER</p>
          {
            params.size > 0 && (
              <button className={styles.filter__reset} onClick={resetFilter}>
                Reset
              </button>
            )
          }
        </div>
      </div>
      <div className={styles.filter__wrapper}>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>price range</p>
          <PriceRange priceRange={data?.results?.filter_param?.price_range} />
        </div>
        {
          !isHotel && (
            <div className={styles.filter__item}>
              <p className={styles.filter__subtitle}>Times interval</p>
              <TimesIntervalRange timesIntervalRange={data?.results?.filter_param?.times_interval} />
            </div>
          )
        }
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>popular filters</p>
          <div className={styles.filter__content}>
            <Checkbox
              title="Best seller"
              param={isHotel ? "best" : "best_seller"}
              value={true}
              isSelected={isHotel ? data?.results?.filter_param?.best_count.is_selected : data?.results?.filter_param?.best_seller_count.is_selected}
            />
            <span className={styles.filter__count}>
              {isHotel ? data?.results?.filter_param?.best_count.count : data?.results?.filter_param?.best_seller_count.count}
            </span>
          </div>
          {
            !isHotel && (
              <div className={styles.filter__content}>
                <Checkbox
                  title="Daily tours"
                  param="is_daily"
                  value={true}
                  isSelected={data?.results?.filter_param?.is_daily.is_selected}
                />
                <span className={styles.filter__count}>{data?.results?.filter_param?.is_daily.count}</span>
              </div>
            )
          }
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>locations</p>
          {
            data?.results?.filter_param?.locations.map((location, index) => (
              <div className={styles.filter__content} key={index}>
                <Checkbox
                  title={location.title}
                  param="city"
                  value={location.slug}
                  isSelected={location.is_selected}
                />
                <span className={styles.filter__count}>{location.count}</span>
              </div>
            ))
          }
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>Rating</p>
          <div className={styles.filter__content}>
            <Checkbox
              title="4-5 stars"
              param="ratings"
              value="45"
              isSelected={data?.results?.filter_param?.rating["4-5_star"].is_selected}
            />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["4-5_star"].count}
            </span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox
              title="3-4 stars"
              param="ratings"
              value="34"
              isSelected={data?.results?.filter_param?.rating["3-4_star"].is_selected}
            />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["3-4_star"].count}
            </span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox
              title="2-3 stars"
              param="ratings"
              value="23"
              isSelected={data?.results?.filter_param?.rating["2-3_star"].is_selected}
            />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["2-3_star"].count}
            </span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox
              title="1-2 stars"
              param="ratings"
              value="12"
              isSelected={data?.results?.filter_param?.rating["1-2_star"].is_selected}
            />
            <span className={styles.filter__count}>
              {data?.results?.filter_param?.rating["1-2_star"].count}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.filter__footer}>
        <button className={styles.filter__resultBtn} onClick={handleShow}>Show results</button>
      </div>
    </div>
  )
}

export default FilterBar