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

const HomePage = ({ destinationsData, weProvideData, cityToursData, locale }) => {
    const [data, setData] = useState({
        bestToursData: [],
        DailyToursData: [],
        HotelListData: [],
        ReviewListData: [],
        NewsListData: [],
    });

    useEffect(() => {
        const fetchDataSequentially = async () => {
            const endpoints = [
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home-best-tours`,
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home-daily-tours`,
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home-hotels-and-chips`,
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home-testimonials`,
                `${process.env.NEXT_PUBLIC_BASE_API_URL}home-news`,
            ];

            const keys = [
                "bestToursData",
                "DailyToursData",
                "HotelListData",
                "ReviewListData",
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
            <Search />
            <Destination data={destinationsData} />
            <WeProvide data={weProvideData} />
            <AzerbaijanTours data={cityToursData} locale={locale} />
            <GoogleRating />
            <VisaBanner />
            <BestTours data={data.bestToursData} />
          {/*   <DailyTours />
            <HotelList />
            <ReviewList />
            <NewsList /> */}
        </>
    )
}

export default HomePage