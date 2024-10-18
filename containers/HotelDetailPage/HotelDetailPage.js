"use client"

import React, { useEffect, useState } from 'react';
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
import 'react-toastify/dist/ReactToastify.css';
import styles from './HotelDetailPage.module.scss';
import GoodToKnowAccordion from '@/components/GoodToKnowAccordion/GoodToKnowAccordion';
import Comment from '@/components/Comment/Comment';
import ReviewModal from '@/components/ReviewModal/ReviewModal';
import ShowMore from '@/components/UI/ShowMore/ShowMore';
import HotelBookingModal from '@/components/HotelBookingModal/HotelBookingModal';
import { HtmlContent } from '@/utils/HTMLcontent';
import HotelBookingCard from '@/components/HotelBookingCard/HotelBookingCard';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import HotelCard from '@/components/HotelCard/HotelCard';
import HotelBottomBar from '@/components/HotelBottomBar/HotelBottomBar';

const HotelDetailPage = ({ data, reservationData }) => {
  const [countries, setCountries] = useState([]);
  const [countryCodes, setCountryCodes] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const onOpenReviewModal = () => setOpenReviewModal(true);
  const closeReviewModal = () => setOpenReviewModal(false)
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const onOpenBookingModal = () => setOpenBookingModal(true);
  const closeBookingModal = () => setOpenBookingModal(false)

  const handleShow = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}all-countries`)
      .then(res => {
        const formatedCountries = res.data.map(country => ({
          label: country.name,
          value: country.code,
        }));

        const formatedCountryCodes = res.data.map(country => ({
          label: country.code,
          value: country.phone_prefix,
          flag: country.flag
        }));

        setCountries(formatedCountries)
        setCountryCodes(formatedCountryCodes);
      })
      .catch(err => {
        console.error('Error fetching countries:', err);
      });
  }, []);

  return (
    <>
      <Breadcrumb data={[{ name: 'Hotels', url: '/hotels' }, { name: data?.title, url: '' }]} />
      <div className={styles.hotel}>
        <div className="g-container">
          <h1 className={styles.hotel__title}>
            {data?.title}
          </h1>
          <div className={styles.hotel__heading}>
            <div className={styles.hotel__heading__rating}>
              <Image src='/images/star.svg' width={20} height={19} alt='Star' />
              <span className={styles.hotel__heading__rating__value}>
                {data?.rate !== 0 ? data?.rate.toFixed(1) : data?.score}
              </span>
              <span className={styles.hotel__heading__rating__text}>
                ({data?.review_count} reviews)
              </span>
            </div>
            {
              data.best && (
                <div className={styles.hotel__heading__item}>
                  <Image src='/images/home.svg' width={20} height={20} alt='Best Seller' />
                  <span className={styles.hotel__heading__item__text}>Best seller</span>
                </div>
              )
            }
            <div className={styles.hotel__heading__item}>
              <Image src='/images/location.svg' width={20} height={20} alt='Location' />
              <span className={styles.hotel__heading__item__text}>
                {data?.country?.title}
              </span>
            </div>
          </div>
          <div className={styles.hotel__images}>
            <div onClick={() => { setIsOpen(true); setPhotoIndex(0); }} className={styles.hotel__images__left}>
              <LazyImage src={data?.images[0]} borderRadius="1.6rem" alt={data?.title} />
            </div>
            <div className={styles.hotel__images__right}>
              {data?.images?.slice(1, 5)?.map((image, index) => (
                <div key={index} onClick={() => { setIsOpen(true); setPhotoIndex(index + 1); }} className={styles.hotel__images__right__item}>
                  <LazyImage src={image} borderRadius="1.6rem" alt={data?.title} />
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
            {data?.images?.map((src, index) => (
              <SwiperSlide key={index}>
                <div className={styles.hotel__images__slider__item} onClick={() => { setIsOpen(true); setPhotoIndex(index); }}>
                  <LazyImage src={src} borderRadius="0" alt={data?.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {isOpen && (
            <Lightbox
              mainSrc={data?.images[photoIndex]}
              nextSrc={data?.images[(photoIndex + 1) % data?.images.length]}
              prevSrc={data?.images[(photoIndex + data?.images.length - 1) % data?.images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + data?.images.length - 1) % data?.images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % data?.images.length)}
            />
          )}
          <div className={styles.hotel__wrapper}>
            <div className={styles.hotel__content}>
              <h2 className='section-title'>Overview</h2>
              <div className={styles.hotel__cancel}>
                <Image src='/images/line-10.svg' width={16} height={16} alt='Calendar' />
                <span>Free cancellation available</span>
              </div>
              <HtmlContent html={data?.overview} className={`${styles.hotel__description} rich-content`} />
              {
                !!data?.includes?.length && (
                  <>
                    <h2 className='section-title'>Facilities</h2>
                    <div className={styles.hotel__facilities}>
                      {
                        data?.includes?.map((item, index) => (
                          <div className={styles.hotel__facilities__item} key={index}>
                            <Image src={item.image || ''} width={24} height={24} alt={item.title} />
                            <span className={styles.hotel__facilities__text}>{item.title}</span>
                          </div>
                        ))
                      }
                    </div>
                  </>
                )
              }
              {
                !!data?.good_to_know?.length && (
                  <GoodToKnowAccordion data={data?.good_to_know} />
                )
              }
            </div>
            <div className={styles.card}>
              <HotelBookingCard
                data={data}
                reservationData={reservationData}
                handleShow={handleShow}
                onOpenBookingModal={onOpenBookingModal}
              />
            </div>
          </div>
          <Comment
            data={data}
            onOpenReviewModal={onOpenReviewModal}
            isHotel
          />
        </div>
        {
          !!data?.related_hotels?.length && (
            <div className={styles.moreHotel}>
              <div className="g-container">
                <h2 className="section-title">Related hotels</h2>
                <p className="section-text">Discover related hotels</p>
                <div className={styles.moreHotel__list}>
                  {
                    !data?.related_hotels.map((item, index) => (
                      <HotelCard key={index} data={item} />
                    ))
                  }
                </div>
                <ShowMore />
              </div>
            </div>
          )
        }
        <HotelBottomBar
          isHide={isShow}
          handleShow={handleShow}
          onOpenBookingModal={onOpenBookingModal}
          data={data}
        />
        <div className={`${styles.bottomBar} ${isShow ? styles.show : ''}`}>
          <HotelBookingCard
            data={data}
            reservationData={reservationData}
            handleShow={handleShow}
            onOpenBookingModal={onOpenBookingModal}
          />
        </div>
        <div
          className={`${styles.overlay} ${isShow ? styles.show : ''}`}
          onClick={handleShow}
        />
      </div>
      <ReviewModal
        countries={countries}
        slug={data?.slug}
        openReviewModal={openReviewModal}
        closeReviewModal={closeReviewModal}
        isHotel
      />
      <HotelBookingModal
        data={data}
        openBookingModal={openBookingModal}
        closeBookingModal={closeBookingModal}
        countries={countries}
        countryCodes={countryCodes}
      />
      <ToastContainer />
    </>
  );
};

export default HotelDetailPage;