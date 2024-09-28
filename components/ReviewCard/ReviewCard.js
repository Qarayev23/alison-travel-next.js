import Link from '@/components/Link/Link'
import styles from './ReviewCard.module.scss'
import Image from 'next/image'

const ReviewCard = () => {
  return (
    <Link href='/' className={styles.card}>
      <h4 className={styles.card__title}>
        Sam Atman
      </h4>
      <div className={styles.card__location}>
        <Image
          src='/images/flag.svg'
          width={16}
          height={12}
          alt=''
        />
        <span className={styles.card__location__text}>Azerbaijan</span>
      </div>
      <p className={styles.card__desc}>
        We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.
      </p>
      <div className={styles.card__footer}>
        <div className={styles.card__stars}>
          <Image src='/images/star2.svg' width={14} height={13} alt='star' />
          <Image src='/images/star2.svg' width={14} height={13} alt='star' />
          <Image src='/images/star2.svg' width={14} height={13} alt='star' />
          <Image src='/images/star2.svg' width={14} height={13} alt='star' />
          <Image src='/images/star2.svg' width={14} height={13} alt='star' />
        </div>
        <p className={styles.card__date}>
          about 1 hour ago
        </p>
      </div>
    </Link>
  )
}

export default ReviewCard