"use client";

import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './PriceRange.module.scss';

const PriceRange = () => {
    const [inputValues, setInputValues] = useState(['$1000', '$5000']); // Daxil edilən dəyərlər üçün ayrı state
    const [values, setValues] = useState([1000, 5000]); // Slider dəyərləri üçün state
    const min = 1000;
    const max = 5000;

    // Input dəyərlərini yeniləmək üçün funksiya
    const handleInputChange = (index, value) => {
        const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
        const formattedValue = `$${numericValue}`;
        const newInputValues = [...inputValues];
        newInputValues[index] = formattedValue;
        setInputValues(newInputValues);

        // Dəyər sliderin min və max aralığında olduqda slider dəyərlərini yeniləyir
        const newValues = [...values];
        const intValue = Math.max(min, Math.min(max, numericValue));
        newValues[index] = intValue;
        setValues(newValues);
    };

    return (
        <div className={styles.priceRange}>
            <div className={styles.priceRange__inputs}>
                <div className={styles.priceRange__input}>
                    <p className={styles.priceRange__input__text}>Min</p>
                    <input
                        type="text"
                        value={inputValues[0]}
                        onChange={(e) => handleInputChange(0, e.target.value)}
                    />
                </div>
                <div className={styles.priceRange__input}>
                    <p className={styles.priceRange__input__text}>Max</p>
                    <input
                        type="text"
                        value={inputValues[1]}
                        onChange={(e) => handleInputChange(1, e.target.value)}
                    />
                </div>
            </div>
            <Range
                step={1}
                min={min}
                max={max}
                values={values}
                onChange={(newRangeValues) => {
                    setValues(newRangeValues);
                    setInputValues(newRangeValues.map(value => `$${value}`));
                }}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            padding: '0 0.8rem',
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: '0.2rem',
                                width: '100%',
                                borderRadius: '0.2rem',
                                background: getTrackBackground({
                                    values: values,
                                    colors: ['#E6E8EC', '#3B71FE', '#E6E8EC'],
                                    min: min,
                                    max: max
                                }),
                                alignSelf: 'center'
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ index, props, isDragged }) => (
                    <div
                        {...props}
                        key={props.key}
                        className={styles.priceRange__thumb}
                        style={{
                            ...props.style,
                            height: '2.4rem',
                            width: '2.4rem',
                            border: '0.5rem solid #FCFCFD',
                            borderRadius: '50%',
                            backgroundColor: '#3B71FE',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    />
                )}
            />
        </div>
    );
};

export default PriceRange;