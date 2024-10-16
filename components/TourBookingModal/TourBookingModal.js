import { Modal } from 'react-responsive-modal';
import Select from 'react-select';
import Image from 'next/image';
import styles from './TourBookingModal.module.scss'
import TourCard from '../TourCard/TourCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';

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

const TourBookingModal = ({ data, selectedOption, openBookingModal, closeBookingModal, handleSelectedOption }) => {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();

    const formatedHotels = data?.options?.map(hotel => ({
        label: hotel.category.title,
        value: hotel.category.id,
        price: hotel.price_per_person - hotel.discount_per_person
    }))

    const [countries, setCountries] = useState([]);
    const [countryCodes, setCountryCodes] = useState([]);

    const [selectedHotelOption, setSelectedHotelOption] = useState({
        label: selectedOption.category.title,
        value: selectedOption.category.id,
        price: selectedOption.price_per_person - selectedOption.discount_per_person
    });

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}all-countries`)
            .then(res => {
                const formatedCountryCodes = res.data.map(country => ({
                    label: country.code,
                    value: country.phone_prefix,
                    flag: country.flag
                }));

                const formatedCountries = res.data.map(country => ({
                    label: country.name,
                    value: country.code,
                }));

                setCountryCodes(formatedCountryCodes);
                setCountries(formatedCountries)
            })
            .catch(err => {
                console.error('Error fetching countries:', err);
            });
    }, []);

    const onSubmit = async (form_data) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}tours/create-rezervation`,
                JSON.stringify({
                    full_name: form_data.full_name,
                    email: form_data.email,
                    country_code: form_data["country-code"].label,
                    phone: form_data.phone,
                    message: form_data.message,
                    country: form_data.country.label,
                    category: selectedHotelOption.value,
                    tour_slug: data.slug
                }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            reset();
        } catch (error) {
            console.error('Error posting review:', error);
        }
    };

    return (
        <Modal open={openBookingModal} onClose={closeBookingModal} center>
            <div className={styles.modal}>
                <div className={styles.modal__left}>
                    {
                        !data.is_daily && (
                            <div className={styles.option}>
                                <div className={styles.option__left}>
                                    <div className={styles.option__icon}>
                                        <Image src="/images/option.svg" width={24} height={24} alt="Option" />
                                        <span className={styles.option__icon__text}>{selectedOption.category.title.charAt(0)}</span>
                                    </div>
                                    <div className={styles.option__content}>
                                        <p className={styles.option__title}>{selectedOption.category.title}</p>
                                        <p className={styles.option__desc}>{selectedOption?.description}</p>
                                    </div>
                                </div>
                                <div className={styles.option__right}>
                                    <p className={styles.option__price}>
                                        ${(selectedOption.price - selectedOption.discount)}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    <form className={styles.modal__wrapper} onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                {...register('full_name', { required: 'Full name is required.' })}
                                type='text'
                                placeholder='Full name'
                                className="g-input"
                            />
                            {errors.full_name && <p className={styles.error}>{errors.full_name.message}</p>}
                        </div>
                        <div>
                            <input
                                {...register('email', { required: 'Email is required.' })}
                                type='email'
                                placeholder='Email'
                                className="g-input"
                            />
                            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
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
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className='g-input'
                                    {...register('phone', { required: 'Phone is required.' })}
                                />
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
                        {
                            !data.is_daily && (
                                <div>
                                    <Controller
                                        name="category"
                                        control={control}
                                        rules={{ required: false }}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                handleSelectedOption
                                                defaultValue={selectedHotelOption}
                                                onChange={(newValue) => {
                                                    setSelectedHotelOption(newValue)
                                                    handleSelectedOption(newValue.value)
                                                    field.onChange(newValue)
                                                }}
                                                options={formatedHotels}
                                                placeholder="Hotel options"
                                                isSearchable={false}
                                                styles={{
                                                    control: (baseStyles) => ({
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
                                    <p className={styles.info__text}>From ${selectedHotelOption?.price} per person</p>
                                </div>
                            )
                        }
                        <div>
                            <textarea
                                {...register("message", { required: false })}
                                placeholder='Message'
                                className="g-textarea"
                            />
                        </div>
                        <button className={styles.modal__submit}>Book</button>
                    </form>
                </div>
                <div className={styles.modal__right}>
                    <TourCard
                        isRow
                        data={{
                            slug: data.slug,
                            image: data.image,
                            title: data.title,
                            days_duration: data.days_duration,
                            nights_duration: data.nights_duration,
                            hours_duration: data.hours_duration,
                            price_per_person: selectedOption.price_per_person,
                            discount_per_person: selectedOption.discount_per_person,
                            rate: data.rate,
                            score: data.score,
                            review_count: data.review_count,
                            best: data.best
                        }}
                    />
                    <div className={styles.tour}>
                        {/* <p className={styles.tour__title}>{data?.limit_adults} x {selectedOption.category.title} ticket</p> */}
                        <div className={styles.tour__info}>
                            <p className={styles.tour__age}>{data?.limit_adults} x Adult</p>
                            <p className={styles.tour__price}>${selectedOption.price - selectedOption.discount}</p>
                        </div>
                        <div className={styles.tour__cancellation}>
                            <p className={styles.tour__cancellation__title}>Cancellation policy</p>
                            <p className={styles.tour__cancellation__text}>
                                {data?.cancellation_policy}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default TourBookingModal