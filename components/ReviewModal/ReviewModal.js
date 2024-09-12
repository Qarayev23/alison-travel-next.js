import { useState } from 'react'
import { Modal } from 'react-responsive-modal';
import styles from './ReviewModal.module.scss'
import Select from 'react-select';
import Image from 'next/image';

const options = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
];

const ReviewModal = ({ open, onCloseModal }) => {
    const [rating, setRating] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleCloseModal = () => {
        onCloseModal();
        setRating(null);
    };

    const handleChange = (event) => {
        setRating(parseInt(event.target.value, 10));
    };

    const starIcon = (filled) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule={filled ? '' : 'evenodd'} clip-rule="evenodd" d="M9.52226 8.93409C9.42123 9.17607 9.19343 9.34129 8.93203 9.36216L4.18276 9.74143C3.56134 9.79106 3.3099 10.5671 3.78412 10.9717L7.39855 14.0558C7.59877 14.2267 7.68623 14.4954 7.62494 14.7514L6.51997 19.3657C6.37503 19.9709 7.03288 20.4502 7.56457 20.1267L11.636 17.6495C11.8595 17.5136 12.1402 17.5136 12.3637 17.6495L16.4351 20.1267C16.9668 20.4502 17.6246 19.9709 17.4797 19.3657L16.3747 14.7514C16.3134 14.4954 16.4009 14.2267 16.6011 14.0558L20.2155 10.9717C20.6897 10.5671 20.4383 9.79106 19.8169 9.74143L15.0676 9.36216C14.8062 9.34129 14.5784 9.17607 14.4774 8.93409L12.6458 4.54747C12.4062 3.97376 11.5934 3.97376 11.3539 4.54748L9.52226 8.93409ZM16.0174 7.43164L14.4914 3.77687C13.5674 1.56395 10.4323 1.56397 9.50829 3.77687L7.98226 7.43164L4.02355 7.74778C1.62663 7.93919 0.656782 10.9323 2.48593 12.4931L5.49443 15.0602L4.57496 18.8999C4.01591 21.2344 6.55334 23.083 8.60413 21.8353L11.9998 19.7693L15.3955 21.8353C17.4463 23.0831 19.9837 21.2344 19.4247 18.8999L18.5052 15.0602L21.5137 12.4931C23.3429 10.9323 22.373 7.93919 19.9761 7.74778L16.0174 7.43164Z"
                fill={filled ? '#FFD166' : '#777E90'} />
        </svg>
    );

    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => ({
            url: URL.createObjectURL(file),
            id: URL.createObjectURL(file)
        }));

        setImages(prev => [...prev, ...newImages].slice(0, 4));
    };

    const handleRemoveImage = (id) => {
        setImages(images.filter(image => image.id !== id));
    };

    return (
        <Modal open={open} onClose={handleCloseModal} center>
            <div className={styles.modal}>
                <p className={styles.modal__title}>Add a review</p>
                <div className={styles.modal__rating}>
                    <p className={styles.modal__rating__text}>Give rate</p>
                    <div className={styles.modal__rating__stars}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <label key={num} className={styles.modal__rating__star}>
                                {starIcon(rating >= num)}
                                <input
                                    type="radio"
                                    value={num}
                                    checked={rating === num}
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                />
                            </label>
                        ))}
                    </div>
                </div>
                <form className={styles.modal__wrapper}>
                    <div>
                        <input type='text' placeholder='Full name' className="g-input" />
                    </div>
                    <div>
                        <div className="g-select">
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
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
                                        "div": {
                                            "div": {
                                                color: "#777E90",
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
                    </div>
                    <div className={styles.upload}>
                        <label className={styles.upload__box}>
                            <input
                                type="file"
                                onChange={handleImageChange}
                                multiple
                                accept="image/*"
                                style={{ display: 'none' }}
                            />
                            <span className={styles.upload__icon}>+</span>
                            <span className={styles.upload__text}>Upload photo (max 4)</span>
                        </label>
                        <div className={styles.preview}>
                            {images.map(image => (
                                <div key={image.id} className={styles.preview__image}>
                                    <Image src={image.url} fill alt="Preview" />
                                    <button
                                        className={styles.delete__btn}
                                        onClick={() => handleRemoveImage(image.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <path d="M3.88314 3.00078L5.7998 1.08411C6.04147 0.842447 6.04147 0.442448 5.7998 0.200781C5.55814 -0.0408854 5.15814 -0.0408854 4.91647 0.200781L2.9998 2.11745L1.08314 0.200781C0.841471 -0.0408854 0.441471 -0.0408854 0.199805 0.200781C-0.041862 0.442448 -0.041862 0.842447 0.199805 1.08411L2.11647 3.00078L0.199805 4.91745C-0.041862 5.15911 -0.041862 5.55911 0.199805 5.80078C0.324805 5.92578 0.483138 5.98411 0.641471 5.98411C0.799804 5.98411 0.958138 5.92578 1.08314 5.80078L2.9998 3.88411L4.91647 5.80078C5.04147 5.92578 5.1998 5.98411 5.35814 5.98411C5.51647 5.98411 5.6748 5.92578 5.7998 5.80078C6.04147 5.55911 6.04147 5.15911 5.7998 4.91745L3.88314 3.00078Z" fill="#DB593D" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div>
                        <textarea placeholder='Message' className="g-textarea" />
                    </div>
                    <button className={styles.modal__submit}>Submit</button>
                </form>
            </div>
        </Modal>
    )
}

export default ReviewModal