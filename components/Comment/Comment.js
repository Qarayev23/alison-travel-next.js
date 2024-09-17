import Image from 'next/image'
import styles from './Comment.module.scss'
import Select from 'react-select';
import { useState } from 'react';
import LazyImage from '../LazyImage/LazyImage';

const options = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
];

const Comment = ({ onOpenModal }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className={styles.comment}>
            <div className={styles.comment__left}>
                <div className={styles.comment__left__top}>
                    <div className={styles.comment__left__top__content}>
                        <p className={styles.comment__title}>
                            Add a review
                        </p>
                        <p className={styles.comment__text}>
                            Be the first to review
                            <span> Beautiful Gabala Tour Package from Alison</span>
                        </p>
                    </div>
                    <div className={styles.comment__left__top__rating} onClick={onOpenModal}>
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                    </div>
                </div>
                <div className={styles.comment__input} onClick={onOpenModal}>
                    <p className={styles.comment__input__text}>Share your thoughts</p>
                    <button className={styles.comment__input__btn}>
                        Post it!
                        <Image src="/images/right.svg" width={12} height={12} alt="Basket" />
                    </button>
                </div>

                <div className={styles.review}>
                    <div className={styles.review__top}>
                        <p className={styles.review__top__text}>
                            3 reviews
                        </p>
                        <Select
                            instanceId={'sorting-select'}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isSearchable={false}
                            placeholder="Newst"
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    border: '0.2rem solid #E6E8EC !important',
                                    boxShadow: 'none !important',
                                    borderRadius: '1.2rem',
                                    width: '16rem',
                                    height: '4.8rem',
                                    "div": {
                                        "div": {
                                            color: "#23262F",
                                            fontSize: "1.4rem",
                                            lineHeight: "2.4rem",
                                            fontWeight: "500",
                                            marginLeft: "0.8rem",
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
                                    "div": {
                                        border: "0.2rem solid #E6E8EC",
                                        borderRadius: "50%",
                                        width: "3.2rem",
                                        padding: "0",
                                        height: "3.2rem",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: "0.8rem",
                                    },
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
                    <div className={styles.review__list}>
                        <div className={styles.review__item}>
                            <p className={styles.review__item__name}>
                                Myrtie Runolfsson
                            </p>
                            <div className={styles.review__item__location}>
                                <Image src="/images/flag.svg" width={16} height={12} alt="Azerbaijan" />
                                <span>Azerbaijan</span>
                            </div>
                            <p className={styles.review__item__text}>
                                We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.
                            </p>
                            <div className={styles.review__item__footer}>
                                <div className={styles.review__item__rating}>
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                </div>
                                <span className={styles.review__item__date}>about 1 hour ago</span>
                            </div>
                        </div>
                        <div className={styles.review__item}>
                            <p className={styles.review__item__name}>
                                Myrtie Runolfsson
                            </p>
                            <div className={styles.review__item__location}>
                                <Image src="/images/flag.svg" width={16} height={12} alt="Azerbaijan" />
                                <span>Azerbaijan</span>
                            </div>
                            <p className={styles.review__item__text}>
                                We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.
                            </p>
                            <div className={styles.review__item__footer}>
                                <div className={styles.review__item__rating}>
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                </div>
                                <span className={styles.review__item__date}>about 1 hour ago</span>
                            </div>
                            <div className={styles.review__item__images}>
                                <div className={styles.review__item__image}>
                                    <LazyImage src="/images/tour-1.svg" type="middle" alt="" />
                                </div>
                                <div className={styles.review__item__image}>
                                    <LazyImage src="/images/tour-1.svg" type="middle" alt="" />
                                </div>
                                <div className={styles.review__item__image}>
                                    <LazyImage src="/images/tour-1.svg" type="middle" alt="" />
                                </div>
                                <div className={styles.review__item__image}>
                                    <LazyImage src="/images/tour-1.svg" type="middle" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.review__item}>
                            <p className={styles.review__item__name}>
                                Myrtie Runolfsson
                            </p>
                            <div className={styles.review__item__location}>
                                <Image src="/images/flag.svg" width={16} height={12} alt="Azerbaijan" />
                                <span>Azerbaijan</span>
                            </div>
                            <p className={styles.review__item__text}>
                                Best place I stayed in all of NZ. 🙌🎉😎
                            </p>
                            <div className={styles.review__item__footer}>
                                <div className={styles.review__item__rating}>
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                    <Image src="/images/star2.svg" width={14} height={13} alt="Star" />
                                </div>
                                <span className={styles.review__item__date}>about 1 hour ago</span>
                            </div>
                        </div>
                    </div>
                    <button className={styles.review__showMore}>
                        <Image src='/images/showMore.svg' width={16} height={16} alt='Show More' />
                        Loading comment
                    </button>
                </div>
            </div>
            <div className={styles.comment__right}>
                <div className={styles.comment__right__top}>
                    <p className={styles.comment__title}>Rates</p>
                    <p className={styles.comment__text}>Total review count and overall rating</p>
                </div>

                <div className={styles.comment__rating}>
                    <div className={styles.comment__rating__item}>
                        <p className={styles.comment__rating__item__score}>5 stars</p>
                        <div className={styles.comment__rating__item__bar} />
                        <p className={styles.comment__rating__item__count}>4753</p>
                    </div>
                    <div className={styles.comment__rating__item}>
                        <p className={styles.comment__rating__item__score}>4 stars</p>
                        <div className={styles.comment__rating__item__bar} />
                        <p className={styles.comment__rating__item__count}>372</p>
                    </div>
                    <div className={styles.comment__rating__item}>
                        <p className={styles.comment__rating__item__score}>3 stars</p>
                        <div className={styles.comment__rating__item__bar} />
                        <p className={styles.comment__rating__item__count}>291</p>
                    </div>
                    <div className={styles.comment__rating__item}>
                        <p className={styles.comment__rating__item__score}>2 stars</p>
                        <div className={styles.comment__rating__item__bar} />
                        <p className={styles.comment__rating__item__count}>23</p>
                    </div>
                    <div className={styles.comment__rating__item}>
                        <p className={styles.comment__rating__item__score}>1 stars</p>
                        <div className={styles.comment__rating__item__bar} />
                        <p className={styles.comment__rating__item__count}>9</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment