import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./GoodToKnowAccordion.module.scss";

const data = [
    {
        question: "What are the top places to visit in Georgia Tbilisi?",
        answer:
            'The best 16 passenger small group, intimate and unique, Milford Sound tour. Travel in unparalleled style and comfort in a premium Mercedes van equipped with large panoramic windows, leather reclining seats, quirky on board videos, free wifi and complimentary bottled water. From your accommodation enjoy the stunning scenic drive'
    },
    {
        question: "What are the top places to visit in Georgia Tbilisi?",
        answer:
            'The best 16 passenger small group, intimate and unique, Milford Sound tour. Travel in unparalleled style and comfort in a premium Mercedes van equipped with large panoramic windows, leather reclining seats, quirky on board videos, free wifi and complimentary bottled water. From your accommodation enjoy the stunning scenic drive'
    },
    {
        question: "What are the top places to visit in Georgia Tbilisi?",
        answer:
            'The best 16 passenger small group, intimate and unique, Milford Sound tour. Travel in unparalleled style and comfort in a premium Mercedes van equipped with large panoramic windows, leather reclining seats, quirky on board videos, free wifi and complimentary bottled water. From your accommodation enjoy the stunning scenic drive'
    },
    {
        question: "What are the top places to visit in Georgia Tbilisi?",
        answer:
            'The best 16 passenger small group, intimate and unique, Milford Sound tour. Travel in unparalleled style and comfort in a premium Mercedes van equipped with large panoramic windows, leather reclining seats, quirky on board videos, free wifi and complimentary bottled water. From your accommodation enjoy the stunning scenic drive'
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
                    <Image src="/images/close.svg" priority width={12} height={12} alt="Close" />
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