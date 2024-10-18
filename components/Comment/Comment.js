import Image from 'next/image'
import styles from './Comment.module.scss'
import Select from 'react-select';
import { useEffect, useState } from 'react';
import LazyImage from '../LazyImage/LazyImage';
import formatDate from '@/utils/formatDate';
import axios from 'axios';

const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
];

const StarRating = ({ score }) => {
    const roundedScore = Math.round(score);

    const stars = [];
    for (let i = 0; i < roundedScore; i++) {
        stars.push(
            <Image
                key={i}
                src='/images/star2.svg'
                width={14}
                height={13}
                alt='star'
            />
        );
    }

    return <div className={styles.review__item__rating}>{stars}</div>
};

const Comment = ({ data, onOpenReviewModal, isHotel }) => {
    const [page, setPage] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [selectedOption, setSelectedOption] = useState(sortOptions[0]);
    const size = 3;

    useEffect(() => {
        axios.get(`
        ${process.env.NEXT_PUBLIC_BASE_API_URL}${isHotel ? 'hotels' : 'tours'}/${data?.slug}/reviews?sort_by=${selectedOption?.value}&size=${size}&page=${page}
    `).then(response => {
            if (page === 1) {
                setReviews(response.data.results)
            } else {
                setReviews(prev => [...prev, ...response.data.results])
            }
            setNextPage(response.data.next)
        }).catch(error => {
            console.log(error)
        })
    }, [data.slug, page, selectedOption.value])

    const handlePagination = () => {
        setPage((prev) => prev + 1);
    }

    return (
        <div className={styles.comment}>
            <div className={styles.comment__left}>
                <div className={styles.comment__left__top}>
                    <div className={styles.comment__left__top__content}>
                        <p className={styles.comment__title}>
                            Add a review
                        </p>
                        {
                            data.review_count === 0 && (
                                <p className={styles.comment__text}>
                                    Be the first to review
                                    <span> {data.title}</span>
                                </p>
                            )
                        }
                    </div>
                    <div className={styles.comment__left__top__rating} onClick={onOpenReviewModal}>
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                        <Image src="/images/star-line.svg" width={24} height={24} alt="Star" />
                    </div>
                </div>
                <div className={styles.comment__input} onClick={onOpenReviewModal}>
                    <p className={styles.comment__input__text}>Share your thoughts</p>
                    <button className={styles.comment__input__btn}>
                        Post it!
                        <Image src="/images/right.svg" width={12} height={12} alt="Basket" />
                    </button>
                </div>
                {
                    data.review_count > 0 && (
                        <div className={styles.review}>
                            <div className={styles.review__top}>
                                <p className={styles.review__top__text}>
                                    {data.review_count} reviews
                                </p>
                                <Select
                                    instanceId={'sorting-select'}
                                    onChange={(option) => {
                                        setSelectedOption(option)
                                        setPage(1)
                                    }}
                                    options={sortOptions}
                                    isSearchable={false}
                                    placeholder="Newst"
                                    styles={{
                                        control: (baseStyles) => ({
                                            ...baseStyles,
                                            border: '0.2rem solid #E6E8EC !important',
                                            boxShadow: 'none !important',
                                            borderRadius: '1.2rem',
                                            width: '16rem',
                                            height: '4.8rem',
                                            background: "#FCFCFD",
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
                                {
                                    reviews?.map((review, index) => (
                                        <div className={styles.review__item} key={index}>
                                            <p className={styles.review__item__name}>
                                                {review.full_name}
                                            </p>
                                            <div className={styles.review__item__location}>
                                                <Image src={review.country?.flag || ''} width={16} height={12} alt={review.country?.name} />
                                                <span>{review.country?.name}</span>
                                            </div>
                                            <p className={styles.review__item__text}>
                                                {review.message}
                                            </p>
                                            <div className={styles.review__item__footer}>
                                                <StarRating score={review.rating} />

                                                <span className={styles.review__item__date}>
                                                    {formatDate(review.created_at)}
                                                </span>
                                            </div>
                                            {
                                                !!review?.images.length && (
                                                    <div className={styles.review__item__images}>
                                                        {
                                                            review?.images.map((image, imgIndex) => (
                                                                <div className={styles.review__item__image} key={imgIndex}>
                                                                    <LazyImage
                                                                        src={image}
                                                                        alt={data.title}
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                nextPage && (
                                    <button className={styles.review__showMore} onClick={handlePagination}>
                                        <Image src='/images/showMore.svg' width={16} height={16} alt='Show More' />
                                        Loading comment
                                    </button>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div className={styles.comment__right}>
                <div className={styles.comment__right__top}>
                    <p className={styles.comment__title}>Rates</p>
                    <p className={styles.comment__text}>Total review count and overall rating</p>
                </div>
                <style>
                    {Object.entries(data.rates).map(([key, value], index) => {
                        const totalVotes = Object.values(data.rates).reduce((acc, curr) => acc + curr, 0);
                        const width = (value / totalVotes) * 100;
                        return `.comment__rating__item:nth-of-type(${index + 1}) .comment__rating__item__bar::after { width: ${width}% }`;
                    }).join("\n")}
                </style>
                <div className={styles.comment__rating}>
                    {Object.entries(data.rates).map(([key, value], index) => (
                        <div className="comment__rating__item" key={key}>
                            <p className={styles.comment__rating__item__score}>{index + 1} stars</p>
                            <div className="comment__rating__item__bar" />
                            <p className={styles.comment__rating__item__count}>{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comment