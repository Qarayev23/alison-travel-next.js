import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./ItineraryAccordion.module.scss";

const data = [
    {
        question: "Day 1: Arrive in Tbilisi. Transfer to hotel",
        answer:
            'Breakfast at the hotel. Around 10am we will drive to Old Tbilisi and start a walking tour to discover the beauty of the ancient city. The walking tour will start from Europe Square, Meteki Church, Funicular to Narikala Fortress ( cable car), the "Mother of Kartli" and the descent to the Abano area. Afterwards, walk to Legtahevi Waterfall.'
    },
    {
        question: "Day 2: Full day Tbilisi city tour",
        answer:
            'Breakfast at the hotel. Around 10am we will drive to Old Tbilisi and start a walking tour to discover the beauty of the ancient city. The walking tour will start from Europe Square, Meteki Church, Funicular to Narikala Fortress ( cable car), the "Mother of Kartli" and the descent to the Abano area. Afterwards, walk to Legtahevi Waterfall.'
    },
    {
        question: "Day 3: Day excursion to Kakheti region",
        answer:
            'Breakfast at the hotel. Around 10am we will drive to Old Tbilisi and start a walking tour to discover the beauty of the ancient city. The walking tour will start from Europe Square, Meteki Church, Funicular to Narikala Fortress ( cable car), the "Mother of Kartli" and the descent to the Abano area. Afterwards, walk to Legtahevi Waterfall.'
    },
    {
        question: "Day 4: Full day tour to Uplistikhe and Borjomi",
        answer:
            'Breakfast at the hotel. Around 10am we will drive to Old Tbilisi and start a walking tour to discover the beauty of the ancient city. The walking tour will start from Europe Square, Meteki Church, Funicular to Narikala Fortress ( cable car), the "Mother of Kartli" and the descent to the Abano area. Afterwards, walk to Legtahevi Waterfall.'
    }
];

const AccordionItem = ({ question, answer, isOpen, onClick, index }) => {
    const contentHeight = useRef();

    return (
        <div className={styles.accordion__item}>
            <button
                className={`${styles.accordion__btn} ${isOpen ? styles.active : ""}`}
                onClick={() => onClick(index)}
            >
                <div className={styles.accordion__btn__left}>
                    {
                        index === 0 ? (
                            <span className={`${styles.accordion__btn__icon__img}`}>
                                <Image src="/images/marker.svg" width={16} height={16} alt="Marker" />
                            </span>
                        ) : index === data.length - 1 ? (
                            <span className={`${styles.accordion__btn__icon__img}`}>
                                <Image src="/images/routing.svg" width={16} height={16} alt="Routing" />
                            </span>
                        ) : (
                            <span className={`${styles.accordion__btn__icon}`} />
                        )
                    }
                    <p className={styles.accordion__btn__text}>{question}</p>
                </div>
                <span className={styles.accordion__icon}>
                    <Image src="/images/close.svg" width={12} height={12} alt="Close" />
                </span>
            </button>

            <div
                ref={contentHeight}
                className={styles.accordion__container}
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight + "px" }
                        : { height: "0px" }
                }
            >
                <div className={styles.accordion__content}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const ItineraryAccordion = () => {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const handleItemClick = (index) => {
        setActiveIndexes(prevIndexes => {
            const currentIndex = prevIndexes.indexOf(index);
            if (currentIndex === -1) {
                return [...prevIndexes, index]; // Add index to array
            } else {
                return prevIndexes.filter(i => i !== index); // Remove index from array
            }
        });
    };

    return (
        <>
            <h2 className="section-title">Itinerary</h2>
            <div className={styles.accordion}>
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndexes.includes(index)}
                        onClick={handleItemClick}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
};

export default ItineraryAccordion;
