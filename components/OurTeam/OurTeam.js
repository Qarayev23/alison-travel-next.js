import Image from 'next/image'
import styles from './OurTeam.module.scss'
import Link from '@/components/Link/Link'
import LazyImage from '../LazyImage/LazyImage'

const OurTeam = ({ data }) => {
    return (
        <div className={styles.ourTeam}>
            <div className="g-container">
                <h2 className="section-title">{data?.section_title}</h2>
                <p className="section-text">{data?.section_subtitle}</p>
                <div className={styles.ourTeam__list}>
                    {
                        data?.data?.map((item, i) => (
                            <div className={styles.ourTeam__item} key={i}>
                                <div className={styles.ourTeam__item__image}>
                                    <LazyImage src={item.photo} fill alt={item.full_name} />
                                </div>
                                <div className={styles.ourTeam__item__content}>
                                    <h3 className={styles.ourTeam__item__title}>{item.full_name}</h3>
                                    <p className={styles.ourTeam__item__desc}>{item.position}</p>
                                    <div className={styles.ourTeam__item__socials}>
                                        <Link href={`https://wa.me/${item.phone.replaceAll(' ', '')}`} className={styles.ourTeam__item__social}>
                                            <Image src="/images/wp.svg" alt="wp" width={20} height={20} />
                                            {item.phone}
                                        </Link>
                                        <Link href={`mailto:${item.email}`} className={styles.ourTeam__item__social}>
                                            <Image src="/images/sms.svg" alt="sms" width={20} height={20} />
                                            {item.email}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurTeam