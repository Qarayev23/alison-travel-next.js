import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./GoodToKnowAccordion.module.scss";

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

const GoodToKnowAccordion = ({ data }) => {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const handleItemClick = (index) => {
        setActiveIndexes(prevIndexes => {
            const currentIndex = prevIndexes.indexOf(index);
            if (currentIndex === -1) {
                return [...prevIndexes, index];
            } else {
                return prevIndexes.filter(i => i !== index);
            }
        });
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
                        isOpen={activeIndexes.includes(index)}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default GoodToKnowAccordion;