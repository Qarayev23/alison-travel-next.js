"use client"

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AzerbaijanTours from '@/components/AzerbaijanTours/AzerbaijanTours';
import Destination from '@/components/Destination/Destination'
import Search from '@/components/Search/Search'
import WeProvide from '@/components/WeProvide/WeProvide';

const GoogleRating = dynamic(() => import('@/components/GoogleRating/GoogleRating'));
const BestTours = dynamic(() => import('@/components/BestTours/BestTours'));
const VisaBanner = dynamic(() => import('@/components/VisaBanner/VisaBanner'));
const DailyTours = dynamic(() => import('@/components/DailyTours/DailyTours'));
const HotelList = dynamic(() => import('@/components/HotelList/HotelList'));
const ReviewList = dynamic(() => import('@/components/ReviewList/ReviewList'));
const NewsList = dynamic(() => import('@/components/NewsList/NewsList'));

import 'swiper/css';
import 'swiper/css/navigation';
import { useLocale } from 'use-intl';

const HomePage = ({ homeBannerData, destinationsData, weProvideData, cityToursData }) => {
    const locale = useLocale();

    const [data, setData] = useState({
        visaData: {},
        bestToursData: [],
        dailyToursData: [],
        hotelListData: [],
        reviewListData: [],
        NewsListData: [],
    });

    useEffect(() => {
        const fetchDataSequentially = async () => {
            const endpoints = [
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home/visa`,
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home/best-tours`,
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home/daily-tours`,
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home/hotels`,
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home/testimonials`,
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home/news`,
            ];

            const keys = [
                "visaData",
                "bestToursData",
                "dailyToursData",
                "hotelListData",
                "reviewListData",
                "NewsListData",
            ];

            for (let i = 0; i < endpoints.length; i++) {
                try {
                    const response = await axios.get(endpoints[i], {
                        headers: {
                            'Accept-Language': locale,
                        },
                    });

                    const result = response.data;

                    setData(prevData => ({
                        ...prevData,
                        [keys[i]]: result,
                    }));

                } catch (error) {
                    console.error(`Fetching error for ${keys[i]}: `, error.message);

                    setData(prevData => ({
                        ...prevData,
                        [keys[i]]: { error: true, message: error.message },
                    }));
                }
            }
        };

        fetchDataSequentially();
    }, []);

    return (
        <>
            <Search data={homeBannerData} />
            {
                !!destinationsData.data?.length && <Destination data={destinationsData} />
            }
            {
                !!weProvideData.data?.length && <WeProvide data={weProvideData} />
            }
            {
               !!cityToursData.cities.length && <AzerbaijanTours data={cityToursData} locale={locale} />
            }
            <GoogleRating />
            {
                !!Object.keys(data.visaData).length && <VisaBanner data={data?.visaData} />
            }
            {
                !!data.bestToursData.data?.length && <BestTours data={data.bestToursData} />
            }
            {
                !!data?.dailyToursData?.data?.length && <DailyTours data={data.dailyToursData} />
            }
            {
                !!data?.hotelListData.data?.length && <HotelList data={data.hotelListData} />
            }
            {
                !!data?.reviewListData.data?.length && <ReviewList data={data.reviewListData} />
            }
            {/*   <NewsList /> */}
        </>
    )
}

export default HomePage