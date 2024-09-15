"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './ContactPage.module.scss'
import { useState } from 'react';
import Select from 'react-select';
import Image from 'next/image';

const ContactPage = () => {
    const [fileName, setFileName] = useState('International Passport Front Side');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const options = [
        { value: 'us', label: 'United States', phoneCode: '+1', flagUrl: '/images/flag.svg' },
        { value: 'de', label: 'Germany', phoneCode: '+49', flagUrl: '/images/flag.svg' },
        { value: 'fr', label: 'France', phoneCode: '+33', flagUrl: '/images/flag.svg' },
    ];

    const countries = [
        { value: 'Azerbaijan', label: 'Azerbaijan' },
        { value: 'Turkey', label: 'Turkey' },
    ];

    const formatOptionLabel = ({ label, phoneCode, flagUrl }, { context }) => {
        if (context === 'value') {
            return (
                <div style={{ margin: "0", display: 'flex', alignItems: 'center', justifyContent: "flex-start", gap: "0.8rem" }}>
                    <span style={{ position: 'relative', width: '1.8rem', height: '1.8rem' }}>
                        <Image src={flagUrl} alt={label} fill style={{ objectFit: "cover", borderRadius: "50%" }} />
                    </span>
                    {phoneCode}
                </div>
            );
        } else {
            return (
                <div style={{ margin: "0", display: 'flex', alignItems: 'center', justifyContent: "flex-start", gap: "1rem" }}>
                    <span style={{ position: 'relative', width: '1.8rem', height: '1.8rem' }}>
                        <Image src={flagUrl} alt={label} fill style={{ objectFit: "cover", borderRadius: "50%" }} />
                    </span>
                    {label} ({phoneCode})
                </div>
            );
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <>
            <Breadcrumb />
            <div className={styles.contact}>
                <div className={styles.contact__wrapper}>
                    <h1 className="page-title">Contact Us</h1>
                    <p className="section-text">Let’s contact!</p>

                    <form className={styles.contact__form}>
                        <div className={styles.contact__form__group}>
                            <div className={styles.contact__form__group__item}>
                                <input type="text" className='g-input' placeholder="Full Name" />
                            </div>
                            <div className={styles.contact__form__group__item}>
                                <input type="email" placeholder="Email" className='g-input' />
                            </div>
                        </div>

                        <div className={styles.contact__form__country}>
                            <Select
                                instanceId="country-code"
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                formatOptionLabel={formatOptionLabel}
                                options={options}
                                isSearchable={false}
                                placeholder="Country code"
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: '0.2rem solid #E6E8EC !important',
                                        boxShadow: 'none !important',
                                        borderRadius: '2.4rem',
                                        width: '100%',
                                        height: '4.8rem',
                                        width: '15rem',
                                        "div": {
                                            "div": {
                                                color: "#777E90",
                                                fontSize: "1.4rem",
                                                lineHeight: "2.4rem",
                                                fontWeight: "400",
                                                marginLeft: "0.8rem",
                                                marginRight: "1rem",
                                                padding: "0",
                                            }
                                        }
                                    }),
                                    placeholder: (baseStyles, state) => ({
                                        ...baseStyles,
                                        paddingLeft: "0",
                                        fontSize: "1.4rem",
                                        lineHeight: "2.4rem",
                                        fontWeight: "500",
                                        margin: "0",
                                        whiteSpace: "nowrap"
                                    }),
                                    indicatorsContainer: (baseStyles, state) => ({
                                        ...baseStyles,
                                        "svg": {
                                            fill: "#777E90",
                                            width: "1.5rem",
                                            height: "1.5rem",
                                        },
                                        "span": {
                                            display: 'none'
                                        }
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        width: '150%'
                                    }),
                                    option: (provided) => ({
                                        ...provided,
                                        fontSize: "1.2rem",
                                        lineHeight: "2rem",
                                        fontWeight: "500",
                                    }),
                                }}
                            />
                            <input type="text" placeholder="Phone number" className='g-input' />
                        </div>

                        <div>
                            <Select
                                instanceId="country"
                                defaultValue={selectedCountry}
                                onChange={setSelectedCountry}
                                options={countries}
                                isSearchable={false}
                                placeholder="Country"
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: '0.2rem solid #E6E8EC !important',
                                        boxShadow: 'none !important',
                                        borderRadius: '2.4rem',
                                        width: '100%',
                                        height: '4.8rem',
                                        width: '100%',
                                        "div": {
                                            "div": {
                                                color: "#777E90",
                                                fontSize: "1.4rem",
                                                lineHeight: "2.4rem",
                                                fontWeight: "400",
                                                marginLeft: "0.8rem",
                                                marginRight: "1rem",
                                                padding: "0",
                                            }
                                        }
                                    }),
                                    placeholder: (baseStyles, state) => ({
                                        ...baseStyles,
                                        paddingLeft: "0",
                                        fontSize: "1.4rem",
                                        lineHeight: "2.4rem",
                                        fontWeight: "500",
                                        margin: "0",
                                        whiteSpace: "nowrap"
                                    }),
                                    indicatorsContainer: (baseStyles, state) => ({
                                        ...baseStyles,
                                        "svg": {
                                            fill: "#777E90",
                                            width: "1.5rem",
                                            height: "1.5rem",
                                        },
                                        "span": {
                                            display: 'none'
                                        }
                                    }),
                                    option: (provided) => ({
                                        ...provided,
                                        fontSize: "1.2rem",
                                        lineHeight: "2rem",
                                        fontWeight: "500",
                                    }),
                                }}
                            />
                        </div>

                        <div className={styles.contact__form__group}>
                            <textarea placeholder="Your message" className='g-textarea'></textarea>
                        </div>
                        <div className={styles.contact__form__group}>
                            <div className={styles.fileUpload}>
                                <label htmlFor="file-upload" className={styles.fileUpload__label}>
                                    Choose file
                                    <input
                                        id="file-upload"
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                </label>
                                <span className={styles.fileUpload__name}>{fileName}</span>
                            </div>
                        </div>
                        <button type='submit' className={styles.contact__form__submit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactPage