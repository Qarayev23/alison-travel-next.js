"use client";

import { useState } from 'react';
import FilterBar from '@/components/FilterBar/FilterBar';
import styles from './HotelsPage.module.scss';
import TourList from '@/components/TourList/TourList';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { HtmlContent } from '@/utils/HTMLcontent';

const HotelsPage = ({ data }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <Breadcrumb data={[{ name: "Azerbaijan tours", url: "" }]} />
            <div className={styles.tours}>
                <div className='g-container'>
                    <div className={styles.tours__wrapper}>
                        <FilterBar isHotel data={data} show={show} handleShow={handleShow} />
                        <TourList tourData={data} handleShow={handleShow} />
                    </div>
                    {
                        data.results?.country?.body && (
                            <HtmlContent
                                html={data.results?.country?.body}
                                className={`${styles.tours__description} rich-content`}
                            />
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default HotelsPage;
