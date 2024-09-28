import Image from 'next/image'
import styles from './OurTeam.module.scss'
import Link from '@/components/Link/Link'
import LazyImage from '../LazyImage/LazyImage'

const OurTeam = () => {
    return (
        <div className={styles.ourTeam}>
            <div className="g-container">
                <h2 className="section-title">Our team</h2>
                <p className="section-text">Let’s contact!</p>
                <div className={styles.ourTeam__list}>
                    <div className={styles.ourTeam__item}>
                        <div className={styles.ourTeam__item__image}>
                            <LazyImage src="https://www.alisontravelgroup.com/uploads/8b9c31ee377c90a4dc10.jpg" fill alt="" />
                        </div>
                        <div className={styles.ourTeam__item__content}>
                            <h3 className={styles.ourTeam__item__title}>Sabina Taghiyeva</h3>
                            <p className={styles.ourTeam__item__desc}>Incoming Tour Manager</p>
                            <div className={styles.ourTeam__item__socials}>
                                <Link href="https://wa.me/+994998003315" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/wp.svg" alt="wp" width={20} height={20} />
                                    +994 99 800 33 15
                                </Link>
                                <Link href="mailto:outgoing@alisontravel.eu" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/sms.svg" alt="sms" width={20} height={20} />
                                    outgoing@alisontravel.eu
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ourTeam__item}>
                        <div className={styles.ourTeam__item__image}>
                            <LazyImage src="https://www.alisontravelgroup.com/uploads/8b9c31ee377c90a4dc10.jpg" fill alt="" />
                        </div>
                        <div className={styles.ourTeam__item__content}>
                            <h3 className={styles.ourTeam__item__title}>Sabina Taghiyeva</h3>
                            <p className={styles.ourTeam__item__desc}>Incoming Tour Manager</p>
                            <div className={styles.ourTeam__item__socials}>
                                <Link href="https://wa.me/+994998003315" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/wp.svg" alt="wp" width={20} height={20} />
                                    +994 99 800 33 15
                                </Link>
                                <Link href="mailto:outgoing@alisontravel.eu" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/sms.svg" alt="sms" width={20} height={20} />
                                    outgoing@alisontravel.eu
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ourTeam__item}>
                        <div className={styles.ourTeam__item__image}>
                            <LazyImage src="https://www.alisontravelgroup.com/uploads/8b9c31ee377c90a4dc10.jpg" fill alt="" />
                        </div>
                        <div className={styles.ourTeam__item__content}>
                            <h3 className={styles.ourTeam__item__title}>Sabina Taghiyeva</h3>
                            <p className={styles.ourTeam__item__desc}>Incoming Tour Manager</p>
                            <div className={styles.ourTeam__item__socials}>
                                <Link href="https://wa.me/+994998003315" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/wp.svg" alt="wp" width={20} height={20} />
                                    +994 99 800 33 15
                                </Link>
                                <Link href="mailto:outgoing@alisontravel.eu" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/sms.svg" alt="sms" width={20} height={20} />
                                    outgoing@alisontravel.eu
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ourTeam__item}>
                        <div className={styles.ourTeam__item__image}>
                            <LazyImage src="https://www.alisontravelgroup.com/uploads/8b9c31ee377c90a4dc10.jpg" fill alt="" />
                        </div>
                        <div className={styles.ourTeam__item__content}>
                            <h3 className={styles.ourTeam__item__title}>Sabina Taghiyeva</h3>
                            <p className={styles.ourTeam__item__desc}>Incoming Tour Manager</p>
                            <div className={styles.ourTeam__item__socials}>
                                <Link href="https://wa.me/+994998003315" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/wp.svg" alt="wp" width={20} height={20} />
                                    +994 99 800 33 15
                                </Link>
                                <Link href="mailto:outgoing@alisontravel.eu" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/sms.svg" alt="sms" width={20} height={20} />
                                    outgoing@alisontravel.eu
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ourTeam__item}>
                        <div className={styles.ourTeam__item__image}>
                            <LazyImage src="https://www.alisontravelgroup.com/uploads/8b9c31ee377c90a4dc10.jpg" fill alt="" />
                        </div>
                        <div className={styles.ourTeam__item__content}>
                            <h3 className={styles.ourTeam__item__title}>Sabina Taghiyeva</h3>
                            <p className={styles.ourTeam__item__desc}>Incoming Tour Manager</p>
                            <div className={styles.ourTeam__item__socials}>
                                <Link href="https://wa.me/+994998003315" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/wp.svg" alt="wp" width={20} height={20} />
                                    +994 99 800 33 15
                                </Link>
                                <Link href="mailto:outgoing@alisontravel.eu" target="_blank" className={styles.ourTeam__item__social}>
                                    <Image src="/images/sms.svg" alt="sms" width={20} height={20} />
                                    outgoing@alisontravel.eu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam