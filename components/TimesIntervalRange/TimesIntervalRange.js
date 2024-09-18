"use client";

import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './TimesIntervalRange.module.scss';

const TimesIntervalRange = () => {
    const [inputValues, setInputValues] = useState(['1 night', '10 nights']); // Daxil edilən dəyərlər üçün ayrı state
    const [values, setValues] = useState([1, 10]); // Slider dəyərləri üçün state
    const min = 1;
    const max = 10;

    // Input dəyərlərini idarə etmək üçün funksiya
    const handleInputChange = (index, value) => {
        const numericValue = parseInt(value, 10) || min; // Rəqəmləri çıxarır və min ilə müqayisə edir
        const newValue = `${numericValue} night${numericValue > 1 ? 's' : ''}`; // Pluralization dəstəyi
        const newInputValues = [...inputValues];
        newInputValues[index] = newValue;
        setInputValues(newInputValues);

        // Slider dəyərlərini tənzimləyir
        const newValues = [...values];
        newValues[index] = Math.max(min, Math.min(max, numericValue));
        setValues(newValues);
    };

    return (
        <div className={styles.timesIntervalRange}>
            <div className={styles.timesIntervalRange__inputs}>
                <div className={styles.timesIntervalRange__input}>
                    <p className={styles.timesIntervalRange__input__text}>Min</p>
                    <input
                        type="text"
                        value={inputValues[0]}
                        onChange={(e) => handleInputChange(0, e.target.value)}
                    />
                </div>
                <div className={styles.timesIntervalRange__input}>
                    <p className={styles.timesIntervalRange__input__text}>Max</p>
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
                onChange={(newValues) => {
                    setValues(newValues);
                    setInputValues(newValues.map(value => `${value} night${value > 1 ? 's' : ''}`)); // Slider dəyərlərini yeniləyir
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
                                    colors: ['#E6E8EC', '#3B71FE', '#3B71FE'],
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
                        className={styles.timesIntervalRange__thumb}
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

export default TimesIntervalRange;