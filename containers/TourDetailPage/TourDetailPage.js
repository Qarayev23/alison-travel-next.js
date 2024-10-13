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
import styles from './TourDetailPage.module.scss';
import ItineraryAccordion from '@/components/ItineraryAccordion/ItineraryAccordion';
import HotelOptions from '@/components/HotelOptions/HotelOptions';
import GoodToKnowAccordion from '@/components/GoodToKnowAccordion/GoodToKnowAccordion';
import BookingCard from '@/components/BookingCard/BookingCard';
import BottomBar from '@/components/BottomBar/BottomBar';
import Comment from '@/components/Comment/Comment';
import TourCard from '@/components/TourCard/TourCard';
import ReviewModal from '@/components/ReviewModal/ReviewModal';
import TourBookingModal from '@/components/TourBookingModal/TourBookingModal';
import { HtmlContent } from '@/utils/HTMLcontent';

const TourDetailPage = ({ data }) => {
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(data?.options ? data?.options[0] : null);

  const [openReviewModal, setOpenReviewModal] = useState(false);
  const onOpenReviewModal = () => setOpenReviewModal(true);
  const closeReviewModal = () => setOpenReviewModal(false)

  const [openBookingModal, setOpenBookingModal] = useState(false);
  const onOpenBookingModal = () => setOpenBookingModal(true);
  const closeBookingModal = () => setOpenBookingModal(false)

  const images = [...data?.images, data?.image];

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleSelectedOption = (title) => {
    const option = data?.options?.find(item => item.category.title === title);
    setSelectedOption(option);
  }

  return (
    <>
      <Breadcrumb data={[{ name: 'Tours', url: '/tours' }, { name: data?.title, url: '' }]} />
      <div className={styles.tour}>
        <div className="g-container">
          <h1 className={styles.tour__title}>{data?.title}</h1>
          <div className={styles.tour__heading}>
            <div className={styles.tour__heading__rating}>
              <Image src='/images/star.svg' width={20} height={19} alt='Star' />
              <span className={styles.tour__heading__rating__value}>{data?.rate !== 0 ? data?.rate.toFixed(1) : data?.score}</span>
              <span className={styles.tour__heading__rating__text}>({data?.review_count} reviews)</span>
            </div>
            {
              data?.best && (
                <div className={styles.tour__heading__item}>
                  <Image src='/images/home.svg' width={20} height={20} alt='Best Seller' />
                  <span className={styles.tour__heading__item__text}>Best seller</span>
                </div>
              )
            }
            <div className={styles.tour__heading__item}>
              <Image src='/images/location.svg' width={20} height={20} alt='Location' />
              {
                data?.countries?.map((item, index) => (
                  <span key={index} className={styles.tour__heading__item__text}>
                    {item} {data.countries?.length - 1 !== index ? ", " : ""}
                  </span>
                ))
              }
            </div>
          </div>
          <div className={styles.tour__images}>
            <div onClick={() => { setIsOpen(true); setPhotoIndex(0); }} className={styles.tour__images__left}>
              <LazyImage src={data?.image} borderRadius="1.6rem" alt={data?.title} />
            </div>
            <div className={styles.tour__images__right}>
              {data?.images?.map((image, index) => (
                <div key={index} onClick={() => { setIsOpen(true); setPhotoIndex(index + 1); }} className={styles.tour__images__right__item}>
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
            className={styles.tour__images__slider}
          >
            {
              <SwiperSlide>
                <div className={styles.tour__images__slider__item} onClick={() => { setIsOpen(true); setPhotoIndex(0); }}>
                  <LazyImage src={data?.image} borderRadius="0" alt={data?.title} />
                </div>
              </SwiperSlide>
            }
            {data?.images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className={styles.tour__images__slider__item} onClick={() => { setIsOpen(true); setPhotoIndex(index + 1); }}>
                  <LazyImage src={src} borderRadius="0" alt={data?.title} />
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
          <div className={styles.tour__wrapper}>
            <div className={styles.tour__content}>
              <h2 className='section-title'>Overview</h2>
              <div className={styles.tour__content__heading}>
                <div className={styles.tour__content__heading__item}>
                  <Image src='/images/home.svg' width={20} height={20} alt='Home' />
                  <span>{data?.limit_adults} guests</span>
                </div>
                {
                  data?.days_duration && (
                    <div className={styles.tour__content__heading__item}>
                      <Image src='/images/day.svg' width={20} height={20} alt='Day' />
                      <span>{data?.days_duration} days</span>
                    </div>
                  )
                }
                {
                  data?.nights_duration && (
                    <div className={styles.tour__content__heading__item}>
                      <Image src='/images/night.svg' width={20} height={20} alt='Night' />
                      <span>{data?.nights_duration} nights</span>
                    </div>
                  )
                }
                {
                  data?.hours_duration && (
                    <div className={styles.tour__content__heading__item}>
                      <Image src='/images/hour-2.svg' width={20} height={20} alt='Night' />
                      <span>{data?.hours_duration} hours</span>
                    </div>
                  )
                }
              </div>
              <div className={styles.tour__cancel}>
                <Image src='/images/line-10.svg' width={16} height={16} alt='Calendar' />
                <span>Free cancellation available</span>
              </div>
              <HtmlContent html={data?.overview} className={`${styles.tour__description} rich-content`} />
              <div className={styles.tour__includes}>
                {
                  !!data?.includes?.length && (
                    <div className={styles.tour__include}>
                      <h3 className={styles.tour__include__title}>Tour Includes</h3>
                      <ul className={styles.tour__include__list}>
                        {
                          data?.includes?.map((item, index) => (
                            <li className={styles.tour__include__item} key={index}>
                              <Image src={item.icon} width={24} height={24} alt={item.title} />
                              <div className={styles.tour__include__item__content}>
                                <p className={styles.tour__include__item__title}>{item.title}</p>
                                <p className={styles.tour__include__item__desc}>{item.description}</p>
                              </div>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
                {
                  !!data?.excludes?.length && (
                    <div className={styles.tour__include}>
                      <h3 className={styles.tour__include__title}>Tour excludes</h3>
                      <ul className={styles.tour__include__list}>
                        {
                          data?.excludes?.map((item, index) => (
                            <li className={styles.tour__include__item} key={index}>
                              <Image src={item.icon} width={24} height={24} alt={item.title} />
                              <div className={styles.tour__include__item__content}>
                                <p className={styles.tour__include__item__title}>{item.title}</p>
                                <p className={styles.tour__include__item__desc}>{item.description}</p>
                              </div>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
              </div>
              {
                !!data?.itinerary?.length && (
                  <ItineraryAccordion data={data?.itinerary} />
                )
              }
              {
                (!!data?.options?.length > 0 && !data.is_daily) && (
                  <HotelOptions
                    data={data?.options}
                    selectedOption={selectedOption}
                    handleSelectedOption={handleSelectedOption}
                  />
                )
              }
              {
                !!data?.good_to_know.length && (
                  <GoodToKnowAccordion data={data?.good_to_know} />
                )
              }
            </div>
            <div className={styles.card}>
              <BookingCard
                isHoliday={!data.is_daily}
                selectedOption={selectedOption}
                data={data}
                onOpenBookingModal={onOpenBookingModal}
              />
            </div>
          </div>
          <Comment data={data} onOpenReviewModal={onOpenReviewModal} />
        </div>
        {
          !!data?.related_tours.length && (
            <div className={styles.moreTour}>
              <div className="g-container">
                <h2 className="section-title">Azerbaijan best travel tours</h2>
                <p className="section-text">Discover Azerbaijan</p>
                <div className={styles.moreTour__list}>
                  {
                    data?.best_tours?.map((item, index) => (
                      <TourCard key={index} data={item} />
                    ))
                  }
                </div>
              </div>
            </div>
          )
        }
        <BottomBar
          isHoliday={!data.is_daily}
          isHide={isShow}
          selectedOption={selectedOption}
          handleShow={handleShow}
          data={data}
          onOpenBookingModal={onOpenBookingModal}
        />
        <div className={`${styles.bottomBar} ${isShow ? styles.show : ''}`}>
          {/* <BookingCard
            isHoliday={!data.is_daily}
            selectedOption={selectedOption}
            data={data}
            onOpenBookingModal={onOpenBookingModal}
          /> */}
        </div>
        <div
          className={`${styles.overlay} ${isShow ? styles.show : ''}`}
          onClick={handleShow}
        />
      </div>
      <ReviewModal
        slug={data.slug}
        openReviewModal={openReviewModal}
        closeReviewModal={closeReviewModal}
      />
      {/* <TourBookingModal
        data={data}
        selectedOption={selectedOption}
        openBookingModal={openBookingModal}
        closeBookingModal={closeBookingModal}
      /> */}
    </>
  );
};

export default TourDetailPage;