"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './AboutUsPage.module.scss'
import WeProvide from '@/components/WeProvide/WeProvide'
import OurTeam from '@/components/OurTeam/OurTeam'

const AboutUsPage = () => {
    return (
        <>
        <Breadcrumb data={[{name: 'About us', url: '/about-us'}]} />
            <div className={styles.about}>
                <div className='g-container'>
                    <h1 className='page-title'>
                        About us
                    </h1>
                    <p className='section-text'>Let’s contact!</p>
                    <div className={`${styles.about__content} rich-content`}>
                        <p>Alison Travel Group is a full-service travel agency that specializes in providing custom and personalized travel services for individuals, families, groups, and businesses. We offer a variety of services including vacation planning, honeymoons, corporate events and meetings, cruises and more. With our extensive network of suppliers and industry experts we are able to provide our clients with the best prices on flights, hotels and car rentals. Our experienced agents are dedicated to assisting you in finding the perfect trip for your budget and needs. We take pride in offering exceptional customer service before, during and after your travels so you can be sure that you’re getting the most out of your vacation experience.
                            <br /><br />
                            As a brand, we aim to provide the best travel booking platform for everyone and provide it to our customers as a reliable travel partner. Our services include offering cheap flights and hotel booking services, great tours, visa support, etc. Here you will find the best tours and hotel offers. Alison Travel is one of the best travel sites for you to plan your trip flawlessly.
                            <br /><br />
                            <strong>Flights Ticket Booking</strong>
                            <br /><br />
                            Booking flights can often be a time-consuming and complex process, but with Alison Travel, it becomes a breeze. Our user-friendly online platform allows you to search and compare a wide selection of airlines and flight options, ensuring that you find the best fares and most convenient routes for your journey. With our expertise and access to the latest industry tools, we help you secure the most competitive prices, saving you both time and money.
                            <br /><br />
                            <strong>Online Hotel Booking</strong>
                        </p>
                        <br />
                        <p>Online hotel reservations are now very easy with Alison Travel. Our team has carefully handpicked the best hotels with the best deals and reviews to bring our customers the best and only the best!</p>
                        <p>We haven't forgotten about people who don't like staying in hotels.</p>
                    </div>
                </div>
                <WeProvide />
                <OurTeam />
            </div>
        </>
    )
}

export default AboutUsPage