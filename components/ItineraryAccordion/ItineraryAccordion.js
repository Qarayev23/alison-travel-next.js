import Image from "next/image";
import React, { useRef, useState } from "react";

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
        <div className="wrapper">
            <button
                className={`question-container ${isOpen ? "active" : ""}`}
                onClick={onClick}
            >
                {
                    index === 0 ? (
                        <span className="icon">
                            <Image src="/images/marker.svg" width={16} height={16} alt="Marker" />
                        </span>
                    ) : index === data.length - 1 ? (
                            <span className="icon">
                                <Image src="/images/routing.svg" width={16} height={16} alt="Routing" />
                            </span>
                        ) : (
                            <span className="icon">
                                O
                            </span>
                        )
                }
                <p className="question-content">{question}</p>
                <span className={`arrow ${isOpen ? "active" : ""}`}>+</span>
            </button>

            <div
                ref={contentHeight}
                className="answer-container"
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <p className="answer-content">{answer}</p>
            </div>
        </div>
    );
};

const ItineraryAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="container">
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                    index={index}
                />
            ))}
        </div>
    );
};

export default ItineraryAccordion;
