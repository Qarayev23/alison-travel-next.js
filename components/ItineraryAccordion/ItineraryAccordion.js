import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./ItineraryAccordion.module.scss";
import { HtmlContent } from "@/utils/HTMLcontent";

const AccordionItem = ({data, question, answer, isOpen, onClick, index }) => {
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
                <HtmlContent html={answer} className={`${styles.accordion__content__text} rich-content`} />
            </div>
        </div>
    );
};

const ItineraryAccordion = ({ data }) => {
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
                        question={item.title}
                        answer={item.body}
                        data={data}
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
