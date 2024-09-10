import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./GoodToKnowAccordion.module.scss";

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

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef();

    return (
        <div className={styles.accordion__item}>
            <button
                className={`${styles.accordion__btn} ${isOpen ? styles.active : ""}`}
                onClick={onClick}
            >
                <p className={styles.accordion__btn__text}>{question}</p>
                <span className={styles.accordion__icon}>
                    <Image src="/images/close.svg" width={12} height={12} alt="Close" />
                </span>
            </button>

            <div
                ref={contentHeight}
                className={styles.accordion__container}
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
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

const GoodToKnowAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <h2 className="section-title">Good to know</h2>
            <div className={styles.accordion}>
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default GoodToKnowAccordion;