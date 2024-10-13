"use client"

import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from '@/components/Link/Link'
import { usePathname } from 'next/navigation'

const Footer = ({ data }) => {
    const router = usePathname()
    const isTourDetail = (router.split('/').length === 4 && router.split('/')[1] === 'tours') ||
        (router.split('/').length === 3 && router.split('/')[1] === 'hotel-bookings')

    return (
        <footer className={`${styles.footer} ${isTourDetail ? styles.tourDetail : ''}`}>
            <div className="g-container">
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__top}>
                        <div className={styles.footer__logo}>
                            <Image src='/images/logo.svg' fill alt='Alison Travel' />
                        </div>
                        <div className={styles.footer__links}>
                            <ul className={styles.footer__list}>
                                <li className={styles.footer__title}>
                                    Useful links
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/' className={styles.footer__link}>Home</Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/contact' className={styles.footer__link}>Contacts</Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/cancellation-policy' className={styles.footer__link}>Cancellation policy</Link>
                                </li>
                            </ul>
                            <ul className={styles.footer__list}>
                                <li className={styles.footer__title}>
                                    Information
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/about-us' className={styles.footer__link}>About us</Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/guests' className={styles.footer__link}>Our guests</Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/news' className={styles.footer__link}>Travel news</Link>
                                </li>
                            </ul>
                            <ul className={styles.footer__list}>
                                <li className={styles.footer__title}>
                                    Contact us
                                </li>
                                {
                                    data?.contact_info?.phone?.map((item, i) => (
                                        <li className={styles.footer__link} key={i}>
                                            <Image src="/images/wp.svg" alt="whatsapp" width={20} height={20} />
                                            <Link href={`https://wa.me/${item.replaceAll(' ', '')}`} className={styles.footer__link}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))
                                }
                                {
                                    data?.contact_info?.email?.map((item, i) => (
                                        <li className={styles.footer__item} key={i}>
                                            <Link href={`mailto:${item}`} className={styles.footer__link}>
                                                <Image src="/images/sms.svg" alt="whatsapp" width={20} height={20} />
                                                {item}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={styles.footer__right}>
                            <div className={styles.footer__social}>
                                <p className={styles.footer__title}>
                                    Follow us
                                </p>
                                <ul className={styles.footer__social__list}>
                                    {
                                        data?.social_links?.map((item, index) => (
                                            <li key={index} className={styles.footer__social__item}>
                                                <Link href={item.link} target="_blank" className={styles.footer__social__link}>
                                                    <Image src={item.image} alt="social link" width={40} height={40} />
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className={styles.footer__payment}>
                                <p className={styles.footer__title}>
                                    Payment methods
                                </p>
                                <ul className={styles.footer__payment__list}>
                                    <li className={styles.footer__payment__item}>
                                        <Link href='/' className={styles.footer__payment__link}>
                                            <Image src="/images/visa.svg" alt="visa" width={99} height={32} />
                                        </Link>
                                    </li>
                                    <li className={styles.footer__payment__item}>
                                        <Link href='/' className={styles.footer__payment__link}>
                                            <Image src="/images/mastercard.svg" alt="mastercard" width={57} height={32} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className={styles.footer__copyright}>
                        Alison Travel 2023. All Rights Reserved | Developed by
                        <Link href='https://coretech.az/'>CoreTech</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer