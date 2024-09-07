"use client"

import AzerbaijanTours from '@/components/AzerbaijanTours/AzerbaijanTours';
import DailyTours from '@/components/DailyTours/DailyTours';
import Destination from '@/components/Destination/Destination'
import GoogleRating from '@/components/GoogleRating/GoogleRating';
import HotelList from '@/components/HotelList/HotelList';
import NewsList from '@/components/NewsList/NewsList';
import ReviewList from '@/components/ReviewList/ReviewList';
import Search from '@/components/Search/Search'
import TourList from '@/components/TourList/TourList';
import VisaBanner from '@/components/VisaBanner/VisaBanner';
import WeProvide from '@/components/WeProvide/WeProvide';
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
    return (
        <>
            <Search />
            <Destination />
            <WeProvide />
            <AzerbaijanTours />
            <GoogleRating />
            <VisaBanner />
            <TourList />
            <DailyTours />
            <HotelList />
            <ReviewList />
            <NewsList />
        </>
    )
}

export default Home