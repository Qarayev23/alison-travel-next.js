import SvgClose from '@/assets/icons/Close'
import Checkbox from '../Checkbox/Checkbox'
import PriceRange from '../PriceRange/PriceRange'
import TimesIntervalRange from '../TimesIntervalRange/TimesIntervalRange'
import styles from './FilterBar.module.scss'

const FilterBar = ({ show, handleShow }) => {
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
          <PriceRange />
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>Times interval</p>
          <TimesIntervalRange />
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>popular filters</p>
          <div className={styles.filter__content}>
            <Checkbox name="Best Seller" />
            <span className={styles.filter__count}>568</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="Free cancellation" />
            <span className={styles.filter__count}>123</span>
          </div>
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>locations</p>
          <div className={styles.filter__content}>
            <Checkbox name="Baku" />
            <span className={styles.filter__count}>37</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="Gabala" />
            <span className={styles.filter__count}>19</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="Shaki" />
            <span className={styles.filter__count}>4</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="Ganja" />
            <span className={styles.filter__count}>6</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="Lankaran" />
            <span className={styles.filter__count}>28</span>
          </div>
        </div>
        <div className={styles.filter__item}>
          <p className={styles.filter__subtitle}>Rating</p>
          <div className={styles.filter__content}>
            <Checkbox name="5 stars" />
            <span className={styles.filter__count}>201</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="4 stars" />
            <span className={styles.filter__count}>501</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="3 stars" />
            <span className={styles.filter__count}>574</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="2 stars" />
            <span className={styles.filter__count}>86</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="1 stars" />
            <span className={styles.filter__count}>155</span>
          </div>
          <div className={styles.filter__content}>
            <Checkbox name="Unrated" />
            <span className={styles.filter__count}>450</span>
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