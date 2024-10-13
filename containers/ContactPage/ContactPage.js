"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './ContactPage.module.scss'
import { useState } from 'react';
import Select from 'react-select';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';

const countryCodeOptions = [
    { value: 'us', label: 'USA', phoneCode: '+1', flagUrl: '/images/flag.svg' },
    { value: 'de', label: 'DE', phoneCode: '+49', flagUrl: '/images/flag.svg' },
    { value: 'fr', label: 'FR', phoneCode: '+33', flagUrl: '/images/flag.svg' },
];

const ContactPage = () => {
    const { register, handleSubmit, watch, control, reset, setValue, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);
    const [selectedCodeOption, setSelectedCodeOption] = useState(countryCodeOptions[0]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const formatOptionLabel = ({ label, phoneCode, flagUrl }, { context }) => {
        if (context === 'value') {
            return (
                <div style={{ margin: "0", display: 'flex', alignItems: 'center', justifyContent: "flex-start", gap: "0.8rem", }}>
                    <span style={{ position: 'relative', width: '2.4rem', height: '1.8rem', marginLeft: "0.8rem", flexShrink: "0" }}>
                        <Image src={flagUrl} alt={label} fill style={{ objectFit: "cover", borderRadius: "0.2rem" }} />
                    </span>
                    {label}
                </div>
            );
        } else {
            return (
                <div style={{ margin: "0", display: 'flex', alignItems: 'center', justifyContent: "flex-start", gap: "1rem" }}>
                    <span style={{ position: 'relative', width: '2.4rem', height: '1.8rem', marginLeft: "0.8rem", flexShrink: "0" }}>
                        <Image src={flagUrl} alt={label} fill style={{ objectFit: "cover", borderRadius: "0.2rem" }} />
                    </span>
                    {label} ({phoneCode})
                </div>
            );
        }
    };

    const countries = [
        { value: 'Azerbaijan', label: 'Azerbaijan' },
        { value: 'Turkey', label: 'Turkey' },
    ];

    const handleFileChange = (event) => {
        const file = {
            name: event.target.files[0].name,
            url: URL.createObjectURL(event.target.files[0]),
        };

        if (file) {
            setFile(file);
        }
    };

    const onSubmit = async (data) => {
        console.log(data);
        
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}contact-us/`, {
                full_name: data.full_name,
                email: data.email,
                country_code: data.country.value,
                phone: data.phone,
                message: data.message,
                country: data.country.value,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept-Language': 'en'
                }
            });

            reset();
            closeReviewModal();
        } catch (error) {
            console.error('Error posting review:', error);
        }
    };

    return (
        <>
            <Breadcrumb data={[{ name: "Contact Us", url: "/contact" }]} />
            <div className={styles.contact}>
                <div className={styles.contact__wrapper}>
                    <div className={styles.contact__heading}>
                        <h1 className="page-title">Contact Us</h1>
                        <p className="section-text">Let’s contact!</p>
                    </div>
                    <form className={styles.contact__form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.contact__form__group}>
                            <div className={styles.contact__form__group__item}>
                                <input {...register('full_name', { required: 'Full name is required.' })} type="text" className='g-input' placeholder="Full Name" />
                            </div>
                            <div className={styles.contact__form__group__item}>
                                <input type="email" {...register('email', { required: 'Email is required.' })} placeholder="Email" className='g-input' />
                            </div>
                        </div>

                        <div className="g-phone-input">
                            <Controller
                                name="country"
                                control={control}
                                rules={{ required: 'Country is required.' }}
                                render={({ field }) => (
                                    <Select
                                        instanceId="country-code"
                                        defaultValue={selectedCodeOption}
                                        formatOptionLabel={formatOptionLabel}
                                        options={countryCodeOptions}
                                        isSearchable={false}
                                        {...field}
                                        onChange={(value) => field.onChange(value)}
                                        value={field.value}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                border: 'none !important',
                                                boxShadow: 'none !important',
                                                borderRadius: '2.4rem',
                                                width: '100%',
                                                height: '4.8rem',
                                                width: '10.1rem',
                                                background: "#FCFCFD",
                                                borderTopRightRadius: "0",
                                                borderBottomRightRadius: "0",
                                                "div": {
                                                    paddingRight: "0",
                                                    "div": {
                                                        color: "#23262F",
                                                        fontSize: "1.4rem",
                                                        lineHeight: "2.4rem",
                                                        fontWeight: "400",
                                                        margin: "0",
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
                                                    marginRight: "0.5rem"
                                                },
                                                "span": {
                                                    display: 'none'
                                                }
                                            }),
                                            menu: (baseStyles, state) => ({
                                                ...baseStyles,
                                                width: '14.1rem',
                                            }),
                                            option: (provided) => ({
                                                ...provided,
                                                fontSize: "1.2rem",
                                                lineHeight: "2rem",
                                                fontWeight: "500",
                                            }),
                                        }}
                                    />
                                )}
                            />

                            <input type="text" {...register('phone', { required: 'Phone is required.' })} placeholder="Phone" className='g-input' />
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
                                        background: "#FCFCFD",
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
                            <textarea placeholder="Your message" {...register('message', { required: 'Message is required.' })} className='g-textarea'></textarea>
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
                                <span className={styles.fileUpload__name}>{file?.name ? file.name : 'International Passport Front Side'}</span>
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