"use client"

const imageList = [
    { id: "1", src: "https://www.alisontravelgroup.com/uploads/433363d509017aa03425.jpeg", thumb: "https://www.alisontravelgroup.com/uploads/433363d509017aa03425.jpeg" },
    { id: "2", src: 'https://www.alisontravelgroup.com/uploads/632619a0cfc94efb4175.jpeg', thumb: 'https://www.alisontravelgroup.com/uploads/632619a0cfc94efb4175.jpeg' },
    { id: "3", src: 'https://www.alisontravelgroup.com/uploads/517c6c634921b0faf852.jpeg', thumb: 'https://www.alisontravelgroup.com/uploads/517c6c634921b0faf852.jpeg' },
    { id: "4", src: 'https://www.alisontravelgroup.com/uploads/f852cf54b505b9e60395.jpeg', thumb: 'https://www.alisontravelgroup.com/uploads/f852cf54b505b9e60395.jpeg' },
    { id: "5", src: 'https://www.alisontravelgroup.com/uploads/13f71c5f2656f4afd702.jpeg', thumb: 'https://www.alisontravelgroup.com/uploads/13f71c5f2656f4afd702.jpeg' },
    { id: "6", src: 'https://www.alisontravelgroup.com/uploads/afc936d553c9286151e5.jpeg', thumb: 'https://www.alisontravelgroup.com/uploads/afc936d553c9286151e5.jpeg' },
];

import LazyImage from '@/components/LazyImage/LazyImage';
import styles from './GuestsPage.module.scss'

const GuestsPage = () => {
    return (
        <div className={styles.guests}>
            <div className="g-container">
                <h1 className='page-title'>Our guests</h1>
                <p className='section-text'>Let’s contact!</p>
                <div className={styles.guests__list}>
                    {
                        imageList.map(image => (
                            <div key={image.id} className={styles.guests__image}>
                                <LazyImage src={image.src} fill alt="our guests" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GuestsPage