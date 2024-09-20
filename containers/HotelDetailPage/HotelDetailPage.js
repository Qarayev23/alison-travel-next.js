"use client"

import React, { useState } from 'react';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from "next/image";
import LazyImage from "@/components/LazyImage/LazyImage";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Lightbox from 'react-image-lightbox';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-image-lightbox/style.css';
import 'react-responsive-modal/styles.css';
import styles from './HotelDetailPage.module.scss';
import GoodToKnowAccordion from '@/components/GoodToKnowAccordion/GoodToKnowAccordion';
import BookingCard from '@/components/BookingCard/BookingCard';
import BottomBar from '@/components/BottomBar/BottomBar';
import Comment from '@/components/Comment/Comment';
import TourCard from '@/components/TourCard/TourCard';
import ReviewModal from '@/components/ReviewModal/ReviewModal';
import ShowMore from '@/components/UI/ShowMore/ShowMore';

const HotelDetailPage = () => {
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false)

  const images = [
    'https://www.alisontravelgroup.com/uploads/ab9be6ba240a235c2b3a.jpg',
    'https://www.alisontravelgroup.com/uploads/68c188654044732f1dc2.jpeg',
    'https://www.alisontravelgroup.com/uploads/f4f158df4c9ba0d2d240.jpg',
    'https://www.alisontravelgroup.com/uploads/88db133dbf8eea19c973.jpg',
    'https://www.alisontravelgroup.com/uploads/43e0b08722ba290d991e.jpg',
  ];

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <Breadcrumb />
      <div className={styles.hotel}>
        <div className="g-container">
          <h1 className={styles.hotel__title}>Beautiful Gabala Tour Package from Alison</h1>
          <div className={styles.hotel__heading}>
            <div className={styles.hotel__heading__rating}>
              <Image src='/images/star.svg' width={20} height={19} alt='Star' />
              <span className={styles.hotel__heading__rating__value}>4.8</span>
              <span className={styles.hotel__heading__rating__text}>(256 reviews)</span>
            </div>
            <div className={styles.hotel__heading__item}>
              <Image src='/images/home.svg' width={20} height={20} alt='Best Seller' />
              <span className={styles.hotel__heading__item__text}>Best seller</span>
            </div>
            <div className={styles.hotel__heading__item}>
              <Image src='/images/location.svg' width={20} height={20} alt='Location' />
              <span className={styles.hotel__heading__item__text}>Nohur lake, Gabala, Azerbaijan</span>
            </div>
          </div>
          <div className={styles.hotel__images}>
            <div onClick={() => { setIsOpen(true); setPhotoIndex(0); }} className={styles.hotel__images__left}>
              <LazyImage src={images[0]} borderRadius="1.6rem" alt='' />
            </div>
            <div className={styles.hotel__images__right}>
              {images.slice(1).map((image, index) => (
                <div key={index} onClick={() => { setIsOpen(true); setPhotoIndex(index + 1); }} className={styles.hotel__images__right__item}>
                  <LazyImage src={image} borderRadius="1.6rem" alt='' />
                  {
                    index === 0 && (
                      <span className={styles.zoom}>
                        <Image src='/images/zoom.svg' width={16} height={16} alt='Zoom' />
                      </span>
                    )
                  }
                </div>
              ))}
            </div>
          </div>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={15}
            className={styles.hotel__images__slider}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className={styles.hotel__images__slider__item} onClick={() => { setIsOpen(true); setPhotoIndex(index); }}>
                  <LazyImage src={src} borderRadius="0" alt='' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            />
          )}
          <div className={styles.hotel__wrapper}>
            <div className={styles.hotel__content}>
              <h2 className='section-title'>Overview</h2>
              <div className={styles.hotel__cancel}>
                <Image src='/images/line-10.svg' width={16} height={16} alt='Calendar' />
                <span>Free cancellation available</span>
              </div>
              <div className={`${styles.hotel__description} rich-content`}>
                <p>
                  Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you will love relaxing in this newly built, architectural house sitting proudly on Queenstown Hill.
                </p>
                <br />
                <p>
                  Enjoy breathtaking 180' views of Lake Wakatipu from your well appointed & privately accessed bedroom with modern en suite and floor-to-ceiling windows.
                </p>
                <br />
                <p>
                  Your private patio takes in the afternoon sun, letting you soak up unparalleled lake and mountain views by day and the stars & city lights by night.
                </p>
              </div>
              <h2 className='section-title'>Facilities</h2>
              <div className={styles.hotel__facilities}>
                <div className={styles.hotel__facilities__item}>
                  <Image src='/images/facilities.svg' width={24} height={24} alt='' />
                  <span className={styles.hotel__facilities__text}>Free clean bathroom</span>
                </div>
                <div className={styles.hotel__facilities__item}>
                  <Image src='/images/facilities-1.svg' width={24} height={24} alt='' />
                  <span className={styles.hotel__facilities__text}>Free wifi 24/7</span>
                </div>
                <div className={styles.hotel__facilities__item}>
                  <Image src='/images/facilities.svg' width={24} height={24} alt='' />
                  <span className={styles.hotel__facilities__text}>Free clean bathroom</span>
                </div>
                <div className={styles.hotel__facilities__item}>
                  <Image src='/images/facilities-1.svg' width={24} height={24} alt='' />
                  <span className={styles.hotel__facilities__text}>Free wifi 24/7</span>
                </div>
                <div className={styles.hotel__facilities__item}>
                  <Image src='/images/facilities.svg' width={24} height={24} alt='' />
                  <span className={styles.hotel__facilities__text}>Free clean bathroom</span>
                </div>
                <div className={styles.hotel__facilities__item}>
                  <Image src='/images/facilities-1.svg' width={24} height={24} alt='' />
                  <span className={styles.hotel__facilities__text}>Free wifi 24/7</span>
                </div>
                <div className={styles.hotel__facilities__item}>
                  <Image src='/images/facilities.svg' width={24} height={24} alt='' />
                  <span className={styles.hotel__facilities__text}>Free clean bathroom</span>
                </div>
                <div className={styles.hotel__facilities__item}>
                  <Image src='/images/facilities-1.svg' width={24} height={24} alt='' />
                  <span className={styles.hotel__facilities__text}>Free wifi 24/7</span>
                </div>
              </div>
              <GoodToKnowAccordion />
            </div>
            <div className={styles.card}>
              <BookingCard />
            </div>
          </div>
          <Comment onOpenModal={onOpenModal} />
        </div>
        <div className={styles.moreHotel}>
          <div className="g-container">
            <h2 className="section-title">Azerbaijan best travel tours</h2>
            <p className="section-text">Discover Azerbaijan</p>
            <div className={styles.moreHotel__list}>
              <TourCard />
              <TourCard />
              <TourCard />
              <TourCard />
            </div>
            <ShowMore />
          </div>
        </div>
        <BottomBar isHide={isShow} handleShow={handleShow} />
        <div className={`${styles.bottomBar} ${isShow ? styles.show : ''}`}>
          <BookingCard handleShow={handleShow} />
        </div>
        <div
          className={`${styles.overlay} ${isShow ? styles.show : ''}`}
          onClick={handleShow}
        />
      </div>
      <ReviewModal open={open} onCloseModal={onCloseModal} />
    </>
  );
};

export default HotelDetailPage;