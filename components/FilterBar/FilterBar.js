import Checkbox from '../Checkbox/Checkbox'
import styles from './FilterBar.module.scss'

const FilterBar = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__wrapper}>
        <div className={styles.filter__header}>
          <p className={styles.filter__title}>FILTER BY:</p>
          <button className={styles.filter__reset}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.00065 13.6654C10.6825 13.6654 13.6673 10.6806 13.6673 6.9987C13.6673 3.3168 10.6825 0.332031 7.00065 0.332031C3.31875 0.332031 0.333984 3.3168 0.333984 6.9987C0.333984 10.6806 3.31875 13.6654 7.00065 13.6654ZM5.47206 4.52729C5.21171 4.26694 4.7896 4.26694 4.52925 4.52729C4.2689 4.78764 4.2689 5.20975 4.52925 5.4701L6.05784 6.9987L4.52925 8.52729C4.2689 8.78764 4.2689 9.20975 4.52925 9.4701C4.7896 9.73045 5.21171 9.73045 5.47206 9.4701L7.00065 7.94151L8.52925 9.4701C8.7896 9.73045 9.21171 9.73045 9.47206 9.4701C9.73241 9.20975 9.73241 8.78764 9.47206 8.52729L7.94346 6.9987L9.47206 5.4701C9.73241 5.20975 9.73241 4.78764 9.47206 4.52729C9.21171 4.26694 8.7896 4.26694 8.52925 4.52729L7.00065 6.05589L5.47206 4.52729Z" fill="#777E91" />
            </svg>
            Reset filter
          </button>
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
            <span className={styles.filter__count}>12</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar