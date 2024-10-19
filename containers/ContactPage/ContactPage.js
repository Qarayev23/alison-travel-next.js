"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactPage.module.scss'

const ContactPage = () => {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);
    const [countries, setCountries] = useState([]);
    const [countryCodes, setCountryCodes] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}all-countries`)
            .then(res => {
                const formatedCountries = res.data.map(country => ({
                    label: country.name,
                    value: country.code,
                }));

                const formatedCountryCodes = res.data.map(country => ({
                    label: country.code,
                    value: country.phone_prefix,
                    flag: country.flag
                }));

                setCountries(formatedCountries)
                setCountryCodes(formatedCountryCodes);
            })
            .catch(err => {
                console.error('Error fetching countries:', err);
            });
    }, []);

    const formatOptionLabel = ({ label, value, flag }, { context }) => {
        if (context === 'value') {
            return (
                <div style={{ margin: "0", display: 'flex', alignItems: 'center', justifyContent: "flex-start", marginLeft: "-0.8rem", gap: "0.8rem", }}>
                    <span style={{ position: 'relative', width: '2.4rem', height: '1.8rem', flexShrink: "0" }}>
                        <Image src={flag} alt={label} fill style={{ objectFit: "cover", borderRadius: "0.2rem" }} />
                    </span>
                    {label}
                </div>
            );
        } else {
            return (
                <div style={{ margin: "0", display: 'flex', alignItems: 'center', justifyContent: "flex-start", gap: "1rem", whiteSpace: "nowrap" }}>
                    <span style={{ position: 'relative', width: '2.4rem', height: '1.8rem', marginLeft: "0.8rem", flexShrink: "0" }}>
                        <Image src={flag} alt={label} fill style={{ objectFit: "cover", borderRadius: "0.2rem" }} />
                    </span>
                    {label} ({value})
                </div>
            );
        }
    };

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
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}contact-us`, {
                full_name: data.full_name,
                email: data.email,
                country_code: data.country.value,
                phone: data.phone,
                message: data.message,
                country: data.country.value,
                file: file,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept-Language': 'en'
                }
            });

            toast.success('Your request has been sent successfully!');
            reset();
            setFile(null);
        } catch (error) {
            console.error('Error posting review:', error);
            toast.error('Oops, request failed!');
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
                                <div style={{ width: "100%" }}>
                                    <input
                                        {...register('full_name', { required: 'Full name is required.' })}
                                        type="text"
                                        className='g-input'
                                        placeholder="Full Name"
                                    />
                                    <p className={styles.error}>{errors.full_name?.message}</p>
                                </div>
                            </div>
                            <div className={styles.contact__form__group__item}>
                                <div style={{ width: "100%" }}>
                                    <input type="email" {...register('email', { required: 'Email is required.' })} placeholder="Email" className='g-input' />
                                    <p className={styles.error}>{errors.email?.message}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="g-phone-input">
                                <Controller
                                    name="country-code"
                                    control={control}
                                    rules={{ required: 'Country code is required.' }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            instanceId="country-code"
                                            onChange={(newValue) => {
                                                field.onChange(newValue)
                                            }}
                                            formatOptionLabel={formatOptionLabel}
                                            options={countryCodes}
                                            placeholder="Select"
                                            styles={{
                                                control: (baseStyles) => ({
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
                                                            color: "#777E90",
                                                            fontSize: "1.4rem",
                                                            lineHeight: "2.4rem",
                                                            fontWeight: "400",
                                                            margin: "0",
                                                            padding: "0",
                                                            paddingLeft: "0.8rem"
                                                        }
                                                    },
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
                            {(errors.phone || errors["country-code"]) && <p className={styles.error}>{errors?.phone?.message || errors["country-code"].message}</p>}
                        </div>

                        <div>
                            <Controller
                                name="country"
                                control={control}
                                rules={{ required: 'Country is required.' }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        onChange={(newValue) => {
                                            field.onChange(newValue)
                                        }}
                                        options={countries}
                                        placeholder="Country"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                border: '0.2rem solid #E6E8EC !important',
                                                boxShadow: 'none !important',
                                                borderRadius: '2.4rem',
                                                width: '100%',
                                                height: '4.8rem',
                                                background: "#FCFCFD",
                                                "div": {
                                                    "div": {
                                                        color: "#23262F",
                                                        fontSize: "1.4rem",
                                                        lineHeight: "2.4rem",
                                                        fontWeight: "400",
                                                        marginLeft: "0.8rem",
                                                        marginRight: "0.8rem",
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
                                                color: "#777E90 !important",
                                            }),
                                            indicatorsContainer: (baseStyles, state) => ({
                                                ...baseStyles,
                                                "svg": {
                                                    fill: "#B1B5C3",
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
                                )}
                            />
                            {(errors.country) && <p className={styles.error}>{errors?.country?.message}</p>}
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
            <ToastContainer />
        </>
    )
}

export default ContactPage