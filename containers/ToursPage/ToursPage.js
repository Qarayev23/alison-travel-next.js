"use client";

import { useState } from 'react';
import FilterBar from '@/components/FilterBar/FilterBar';
import styles from './ToursPage.module.scss';
import TourList from '@/components/TourList/TourList';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const ToursPage = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <Breadcrumb data={[{ name: "Tours", url: "/tours" }]} />
            <div className={styles.tours}>
                <div className='g-container'>
                    <div className={styles.tours__wrapper}>
                        <FilterBar show={show} handleShow={handleShow} />
                        <TourList handleShow={handleShow} />
                    </div>
                    <div className={`${styles.tours__description} rich-content`}>
                        <h2><strong>Is Azerbaijan worth a visit?</strong></h2>
                        <br />
                        <p>• Azerbaijan has many contrasts with nine climate zones spread across the country. The snow-capped Caucasus Mountains surround hot dry deserts while sunny grasslands merge with the Caspian coast. But Azerbaijan's contrasts go beyond nature: cutting-edge architecture lies among caravans shrouded in secrecy, while Soviet designs mingle with Islamic architecture in a country that never ceases to surprise.</p>
                        <p>• It is home to some of the world's most enviable oil and gas fields, nearly half of the world's mud volcanoes, the Zoroastrian fire temple of Ateshgah and the natural and eternal fire of Yanar Dag (The Burning Mountain).</p>
                        <p>• Affordable Azerbaijan, a land where budget travelers can find viable options for in-depth exploration. With delicious yet inexpensive food and comfortable, budget-friendly hotels and guesthouses, Azerbaijan offers plenty of options for budget travelers.</p>
                        <p>• Azerbaijan combines the best of East and West as it is located at the juxtaposition of many civilizations. The atmosphere of the ancient Silk Road can still be felt among merchants supplying oriental spices in local markets, in cozy teahouses hidden in the shade of office buildings in glass and in the medieval Icheri Sheher (inner city) protected by abandoned Soviet structures.</p>
                        <br />
                        <h2><strong>Your Dream Vacation</strong></h2>
                        <br />
                        <p>Taste the arid winds of the semi-Caucasian desert, pray in the ancient fire temple, walk through the corridors of oriental palaces, and rest in the shade of persistent caravans. Let Azerbaijan fascinate you with its delicious paella, tea served in delicate pear-shaped cups and bustling markets. Frame your visit around the land's fine art traditions, intricate petroglyphs or bubbling mud volcanoes. Our Azerbaijan travel packages also vary according to the type of customers we serve. Whether you love history, outdoor adventures or cultural activities, chances are we have a tour that perfectly suits your interests.</p>
                        <br />
                        <h2><strong>Azerbaijan visa</strong></h2>
                        <br />
                        <p>In recent years, visa regulations in Azerbaijan have been gradually relaxed. Currently, citizens of more than 90 countries, including Australia, EU Member States, UK, Canada, New Zealand, UAE and the US, can apply for an e-Visa and it will be issued within 3 days. Passport holders from 12 other countries, including China, Japan, Israel and South Korea, can obtain visas on arrival, and citizens of 10 countries, including Russia, can enter Azerbaijan without a visa.</p>
                        <br />
                        <h2><strong>Is it safe to travel to Azerbaijan?</strong></h2>
                        <br />
                        <p>Overall, Azerbaijan is a completely safe country for your trip. Azerbaijanis are kind and hospitable people who will do their best to serve visitors. Beware of pickpockets and avoid flaunting your belongings at bus stops, train stations, on public transport and other crowded areas.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToursPage;
