import formatDate from '@/utils/formatDate';
import styles from './ReviewCard.module.scss'
import Image from 'next/image'

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

  return <div className={styles.card__stars}>{stars}</div>;
};

const ReviewCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.card__title}>
        {data.name}
      </h4>
      <div className={styles.card__location}>
        <Image
          src='/images/flag.svg'
          width={16}
          height={12}
          alt=''
        />
        <span className={styles.card__location__text}>{data.country_name}</span>
      </div>
      <p className={styles.card__desc}>
        {data.review}
      </p>
      <div className={styles.card__footer}>
        <StarRating score={data.score} />
        <p className={styles.card__date}>
          {formatDate(data.created_at)}
        </p>
      </div>
    </div>
  )
}

export default ReviewCard