import { Modal } from 'react-responsive-modal';
import Select from 'react-select';
import Image from 'next/image';
import styles from './TourBookingModal.module.scss'
import TourCard from '../TourCard/TourCard';
import { useState } from 'react';

const options = [
    { value: 'United States', label: 'United States' },
    { value: 'Germany', label: 'Germany' },
    { value: 'France', label: 'France' },
];

const options2 = [
    { value: 'economy', label: 'Economy' },
    { value: 'business', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
    { value: 'luxury', label: 'Luxury' },
];

const countryCodeOptions = [
    { value: 'us', label: 'USA', phoneCode: '+1', flagUrl: '/images/flag.svg' },
    { value: 'de', label: 'DE', phoneCode: '+49', flagUrl: '/images/flag.svg' },
    { value: 'fr', label: 'FR', phoneCode: '+33', flagUrl: '/images/flag.svg' },
];

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

const TourBookingModal = ({ data, selectedOption, openBookingModal, closeBookingModal }) => {
    const [selectedCountryOption, setSelectedCountryOption] = useState(null);
    const [selectedHotelOption, setSelectedHotelOption] = useState(null);
    const [selectedCodeOption, setSelectedCodeOption] = useState(countryCodeOptions[0]);

    return (
        <Modal open={openBookingModal} onClose={closeBookingModal} center>
            <div className={styles.modal}>
                <div className={styles.modal__left}>
                    <div className={styles.option}>
                        <div className={styles.option__left}>
                            <div className={styles.option__icon}>
                                <Image src="/images/option.svg" width={24} height={24} alt="Option" />
                                <span className={styles.option__icon__text}>{selectedOption.title.charAt(0)}</span>
                            </div>
                            <div className={styles.option__content}>
                                <p className={styles.option__title}>{selectedOption.title}</p>
                                <p className={styles.option__desc}>Description text will be here</p>
                            </div>
                        </div>
                        <div className={styles.option__right}>
                            <p className={styles.option__price}>
                                ${(selectedOption.price - (selectedOption.discount_price ? selectedOption.discount_price : 0))}
                            </p>
                        </div>
                    </div>
                    <form className={styles.modal__wrapper}>
                        <div>
                            <input type='text' placeholder='Full name' className="g-input" />
                        </div>
                        <div>
                            <input type='email' placeholder='Email' className="g-input" />
                        </div>
                        <div className="g-phone-input">
                            <Select
                                instanceId="country-code"
                                defaultValue={selectedCodeOption}
                                onChange={setSelectedCodeOption}
                                formatOptionLabel={formatOptionLabel}
                                options={countryCodeOptions}
                                isSearchable={false}
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
                            <input type="text" placeholder="Phone" className='g-input' />
                        </div>
                        <div>
                            <Select
                                defaultValue={selectedCountryOption}
                                onChange={setSelectedCountryOption}
                                options={options}
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
                        </div>
                        <div>
                            <Select
                                defaultValue={selectedHotelOption}
                                onChange={setSelectedHotelOption}
                                options={options2}
                                placeholder="Hotel options"
                                isSearchable={false}
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
                            <p className={styles.info__text}>From $252 per person</p>
                        </div>
                        <div>
                            <textarea placeholder='Message' className="g-textarea" />
                        </div>
                        <button className={styles.modal__submit}>Book</button>
                    </form>
                </div>
                <div className={styles.modal__right}>
                    {/* <TourCard isRow /> */}
                    <div className={styles.tour}>
                        <p className={styles.tour__title}>2 x Standart ticket</p>
                        <div className={styles.tour__info}>
                            <p className={styles.tour__age}>2 x Adult (age 18-24)</p>
                            <p className={styles.tour__price}>$293</p>
                        </div>
                        <div className={styles.tour__cancellation}>
                            <p className={styles.tour__cancellation__title}>Cancellation policy</p>
                            <p className={styles.tour__cancellation__text}>
                                Description text will be here for info
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default TourBookingModal