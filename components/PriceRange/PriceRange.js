"use client";

import { useCallback, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './PriceRange.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { debounce } from 'lodash';

const PriceRange = ({ priceRange }) => {
    const [inputValues, setInputValues] = useState([`${priceRange.min}`, `${priceRange.max}`]);
    const [values, setValues] = useState([priceRange.min, priceRange.max]);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const min = priceRange.min;
    const max = priceRange.max;

    const handleInputChange = (index, value) => {
        const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
        const formattedValue = `$${numericValue}`;
        const newInputValues = [...inputValues];
        newInputValues[index] = formattedValue;
        setInputValues(newInputValues);

        const newValues = [...values];
        const intValue = Math.max(min, Math.min(max, numericValue));
        newValues[index] = intValue;
        setValues(newValues);
        debouncedUpdateRouter(newValues);
    };

    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)

        return params.toString()
    }, [searchParams])

    const debouncedUpdateRouter = useCallback(debounce((newValue) => {
        router.push(pathname + '?' + createQueryString('prices', `${newValue[0]},${newValue[1]}`), { scroll: false });
    }, 700), [createQueryString, pathname, router]);

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
                onFinalChange={(newValue) => debouncedUpdateRouter(newValue)}
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
                renderThumb={({ props }) => (
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