import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
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
                                    <Link href='/' className={styles.footer__link}>Contacts</Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/' className={styles.footer__link}>Cancellation policy</Link>
                                </li>
                            </ul>
                            <ul className={styles.footer__list}>
                                <li className={styles.footer__title}>
                                    Information
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/' className={styles.footer__link}>About us</Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/' className={styles.footer__link}>Our guests</Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='/' className={styles.footer__link}>Travel news</Link>
                                </li>
                            </ul>
                            <ul className={styles.footer__list}>
                                <li className={styles.footer__title}>
                                    Contact us
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='tel:+994702729499' className={styles.footer__link}>
                                        <Image src="/images/wp.svg" alt="whatsapp" width={20} height={20} />
                                        +994 70 272 94 99
                                    </Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='tel:+994702729499' className={styles.footer__link}>
                                        <Image src="/images/wp.svg" alt="whatsapp" width={20} height={20} />
                                        +994 70 272 94 99
                                    </Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='tel:+994702729499' className={styles.footer__link}>
                                        <Image src="/images/wp.svg" alt="whatsapp" width={20} height={20} />
                                        +994 70 272 94 99
                                    </Link>
                                </li>
                                <li className={styles.footer__item}>
                                    <Link href='mailto:booking@alisontravelgroup.com' className={styles.footer__link}>
                                        <Image src="/images/sms.svg" alt="whatsapp" width={20} height={20} />
                                        booking@alisontravelgroup.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__right}>
                            <div className={styles.footer__social}>
                                <p className={styles.footer__title}>
                                    Follow us
                                </p>
                                <ul className={styles.footer__social__list}>
                                    <li className={styles.footer__social__item}>
                                        <Link href='/' className={styles.footer__social__link}>
                                            <Image src="/images/facebook.svg" alt="facebook" width={40} height={40} />
                                        </Link>
                                    </li>
                                    <li className={styles.footer__social__item}>
                                        <Link href='/' className={styles.footer__social__link}>
                                            <Image src="/images/youtube.svg" alt="youtube" width={40} height={40} />
                                        </Link>
                                    </li>
                                    <li className={styles.footer__social__item}>
                                        <Link href='/' className={styles.footer__social__link}>
                                            <Image src="/images/instagram.svg" alt="instagram" width={40} height={40} />
                                        </Link>
                                    </li>
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
                        <Link href='https://trustmedigital.com/'>Trustme Digital</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer