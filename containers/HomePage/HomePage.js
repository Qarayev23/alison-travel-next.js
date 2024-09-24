"use client"

import AzerbaijanTours from '@/components/AzerbaijanTours/AzerbaijanTours';
import DailyTours from '@/components/DailyTours/DailyTours';
import Destination from '@/components/Destination/Destination'
import GoogleRating from '@/components/GoogleRating/GoogleRating';
import HotelList from '@/components/HotelList/HotelList';
import NewsList from '@/components/NewsList/NewsList';
import ReviewList from '@/components/ReviewList/ReviewList';
import Search from '@/components/Search/Search'
import VisaBanner from '@/components/VisaBanner/VisaBanner';
import WeProvide from '@/components/WeProvide/WeProvide';
import HomeTourList from '@/components/HomeTourList/HomeTourList';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Search />
            <Destination />
            <WeProvide />
            <AzerbaijanTours />
            <GoogleRating />
            <VisaBanner />
            <HomeTourList />
            <DailyTours />
            <HotelList />
            <ReviewList />
            <NewsList />
        </>
    )
}

export default HomePage