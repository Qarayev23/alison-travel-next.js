"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import LazyImage from '@/components/LazyImage/LazyImage'
import RelatedNews from '@/components/RelatedNews/RelatedNews'
import NewsCard from '@/components/NewsCard/NewsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './NewsDetailPage.module.scss'

const NewsDetailPage = () => {
    return (
        <>
            <Breadcrumb />
            <div className={styles.news}>
                <div className="g-container">
                    <div className={styles.news__wrapper}>
                        <div className={styles.news__content}>
                            <div className={styles.news__image}>
                                <LazyImage src="https://www.alisontravelgroup.com/uploads/3982f9f947c1813d4281.webp" alt="" />
                            </div>
                            <h1 className={`${styles.news__title} section-title`}>
                                Top 10 Sightseeing in Baku
                            </h1>
                            <p className="section-text">December 19, 2022</p>
                            <div className={styles.news__desc}>
                                <p><strong>Baku</strong> is the capital and largest city of Azerbaijan. It is located on the southern shore of the Caspian Sea and is one of the oldest cities in the world, with a history dating back to at least the 8th century AD. The city has a population of 2.2 million people, making it one of the largest cities in the Caucasus region. Baku is home to many landmarks, including its ancient walled city core, which contains several UNESCO World Heritage Sites such as Maiden Tower and Shirvanshah Palace.</p>
                                <br />
                                <p><strong>1) <a href="https://en.wikipedia.org/wiki/Maiden_Tower_(Baku)" target="_blank" rel="noopener">Maiden Tower</a> </strong>is a 12th-century tower located in the old city of Baku city, Azerbaijan. It is one of the most prominent landmarks and tourist attractions in Baku. The tower's exact purpose has been debated for centuries, but it is believed to have been used as a defense structure, astronomical observatory, or a Zoroastrian temple. It stands 30 meters tall and has eight stories connected by an internal staircase. The walls are made of solid stone blocks and feature inscriptions from various periods of the tower's history.</p>
                                <br />
                                <p><strong>2) <a href="https://www.alisontravelgroup.com/en/search-tour?location=Baku&amp;adult=0&amp;child=0&amp;infant=0" target="_blank" rel="noopener">The Flame Towers</a></strong> are among the tallest buildings in Baku and can be seen from miles away due to their unique design. The towers comprise of three buildings with different functions: a hotel, office building and residential building. The towers are named after the "eternal flame" which is represented on the exterior of each building by a large LED display. The Flame Towers are among the tallest buildings in Baku and can be seen from miles away due to their unique design.</p>
                                <br />
                                <p><strong>3) Baku Boulevard</strong> - This picturesque promenade along the Caspian Sea is filled with restaurants, cafes, shops, fountains, statues, parks and more – perfect for taking a leisurely stroll or enjoying some people watching in one of Baku’s most popular spots!</p>
                                <br />
                                <p><strong>4) Old City (Icheri Sheher) </strong>The ancient walled city of Baku is the oldest part of the city and a UNESCO World Heritage Site. It features cobblestone streets, historic mosques, caravanserais, and the iconic Maiden Tower.</p>
                                <br />
                                <p><strong>5) Palace of the Shirvanshahs</strong> - This 15th-century palace complex was once home to the rulers of Shirvan and is now a UNESCO World Heritage Site located in Baku's old city center.</p>
                                <br />
                                <p><strong>6) </strong><strong>Nizami Street and Fountain Square </strong>- Nizami Street is a pedestrian street in the center of Baku, Azerbaijan. It is named after the 12th-century Azerbaijani poet Nizami Ganjavi, and it is one of the most popular streets in Baku. The street runs from Istiglaliyyat Street to Torgovaya Square, and it is lined with shops and restaurants. At its southern end lies Fountain Square, which is a popular gathering place for locals and tourists alike. The square features several fountains, as well as a monument to Nizami Ganjavi. There are also several cafes and restaurants in the area that offer traditional Azerbaijani cuisine.</p>
                                <br />
                                <p><strong>7</strong><strong>) </strong><strong>Heydar Aliyev Cultural </strong><strong>Center</strong><strong> </strong><strong>- </strong>The Heydar Aliyev Cultural Center is a cultural center in Baku, Azerbaijan. The building was designed by Iraqi-British architect Zaha Hadid and completed in 2012. It is located on a prominent site on the corner of Heydar Aliyev Avenue and Neftchilar Avenue, and it houses a conference hall, auditoriums, exhibition halls, and other facilities. The building has become an iconic symbol of modern Azerbaijan and has been praised for its innovative design.</p>
                                <br />
                                <p><strong>8) The Ateshgah Fire Temple</strong> is an ancient Zoroastrian temple located in the Surakhani suburb of Baku, Azerbaijan. The temple was built on the site of a natural gas vent which was revered by worshippers as a fire temple. The structure was built by Hindu devotees of the Sikh faith in the 17th and 18th centuries, when Baku's oil and gas industry was at its peak. Today, it is a popular tourist attraction and has been designated as an Azerbaijani national monument since 2007.</p>
                                <br />
                                <p><strong>9</strong>) <strong><a href="https://www.alisontravelgroup.com/en/search-tour?location=Yanar+Dag&amp;adult=0&amp;child=0&amp;infant=0" target="_blank" rel="noopener">Yanar Dag</a> </strong>is a natural gas fire which blazes continuously on a hillside on the Absheron Peninsula on the Caspian Sea near Baku, the capital of Azerbaijan. It has been burning since at least the 12th century AD. The fires are said to have been used by local people for religious rites as well as for warmth and cooking. The Yanar Dag fire was designated as a national monument in 2007 and has become an important tourist attraction in Azerbaijan. It is one of several sites where eternal flames can be found around the world, such as Mount Nyiragongo in Congo or Mount Vesuvius in Italy.</p>
                                <br />
                                <p><strong>10) Highland Park</strong> is a park located in Baku, the capital of Azerbaijan. It is situated in the city's Sabail district and covers an area of around 5 hectares. The park was established in 1992 and is one of the most popular recreational areas for locals and tourists alike. It features a variety of attractions, including a lake, playgrounds, walking paths, fountains, cafes, restaurants and more.<strong></strong></p>
                            </div>
                        </div>
                        <div className={styles.relatedNews}>
                            <p className={styles.relatedNews__title}>Related articles</p>
                            <div className={styles.relatedNews__list}>
                                <RelatedNews />
                                <RelatedNews />
                                <RelatedNews />
                                <RelatedNews />
                                <RelatedNews />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.news__slider}>
                    <div className="g-container">
                        <h4 className="section-title">Related news</h4>

                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            slidesPerView={1}
                            spaceBetween={15}
                            className={styles.news__slider__wrapper}
                        >
                            <SwiperSlide>
                                <NewsCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsCard />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsDetailPage