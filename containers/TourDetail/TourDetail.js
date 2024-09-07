"use client"

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import styles from './TourDetail.module.scss'
import Image from "next/image"
import LazyImage from "@/components/LazyImage/LazyImage"

const TourDetail = () => {
  return (
    <>
      <Breadcrumb />
      <div className={styles.tour}>
        <div className="g-container">
          <h1 className={styles.tour__title}>Beautiful Gabala Tour Package from Alison</h1>
          <div className={styles.tour__heading}>
            <div className={styles.tour__heading__rating}>
              <Image src='/images/star.svg' width={20} height={19} alt='Star' />
              <span className={styles.tour__heading__rating__value}>4.8</span>
              <span className={styles.tour__heading__rating__text}>(256 reviews)</span>
            </div>
            <div className={styles.tour__heading__item}>
              <Image src='/images/home.svg' width={20} height={20} alt='Best Seller' />
              <span className={styles.tour__heading__item__text}>Best seller</span>
            </div>
            <div className={styles.tour__heading__item}>
              <Image src='/images/location.svg' width={20} height={20} alt='Location' />
              <span className={styles.tour__heading__item__text}>Nohur lake, Gabala, Azerbaijan</span>
            </div>
          </div>
          <div className={styles.tour__images}>
            <div className={styles.tour__images__left}>
              <div className={styles.tour__images__left__item}>
                <LazyImage src='/images/tour-1.png' borderRadius="1.6rem" alt='' />
              </div>
            </div>
            <div className={styles.tour__images__right}>
              <div className={styles.tour__images__right__item}>
                <LazyImage src='/images/tour-1.png' borderRadius="1.6rem" alt='' />
              </div>
              <div className={styles.tour__images__right__item}>
                <LazyImage src='/images/tour-1.png' borderRadius="1.6rem" alt='' />
              </div>
              <div className={styles.tour__images__right__item}>
                <LazyImage src='/images/tour-1.png' borderRadius="1.6rem" alt='' />
              </div>
              <div className={styles.tour__images__right__item}>
                <LazyImage src='/images/tour-1.png' borderRadius="1.6rem" alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourDetail