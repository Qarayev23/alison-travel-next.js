import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './TimesIntervalRange.module.scss';

const TimesIntervalRange = () => {
    const [values, setValues] = useState([1]);
    const [hoverIndex, setHoverIndex] = useState(null)

    return (
        <div className={styles.timesIntervalRange}>
            <Range
                step={1}
                min={1}
                max={10}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
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
                                    min: 1,
                                    max: 10
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
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
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
                    >
                        {(hoverIndex === index || isDragged) && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-2.7rem',
                                    color: '#FFF',
                                    fontSize: '1.2rem',
                                    lineHeight: '1.2rem',
                                    padding: '0.6rem',
                                    borderRadius: '0.8rem',
                                    backgroundColor: '#23262F',
                                }}
                            >
                                {`${values[index]}`}
                            </div>
                        )}
                    </div>
                )}
            />
            <div className={styles.timesIntervalRange__footer}>
                <span className={styles.timesIntervalRange__footer__text}>1 nights</span>
                <span className={styles.timesIntervalRange__footer__text}>10 nights</span>
            </div>
        </div>
    );
};

export default TimesIntervalRange;