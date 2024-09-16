"use client"

import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import SvgHeart from '@/assets/icons/Heart'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [showLangDropDown, setShowLangDropDown] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)
    const dropdownRef = useRef(null)
    const pathname = usePathname()

    const handleShowLangDropdown = () => {
        setShowLangDropDown((prev) => !prev)
    }

    const handleShowNavbar = () => {
        setShowNavbar((prev) => !prev)
    }

    // close menu when click outside dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowLangDropDown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    useEffect(() => {
        if (showNavbar) {
            setShowNavbar(false)
        }
    }, [pathname])


    return (
        <header className={styles.header}>
            <div className="g-container">
                <div className={styles.navMob}>
                    <button className={styles.navMob__menu} onClick={handleShowNavbar}>
                        <Image src="/images/menu.svg" alt="menu" width={24} height={24} priority />
                    </button>
                    <Link href='/' className={styles.navMob__logo}>
                        <Image src="/images/logo.svg" alt="Alison Travel" width={89} height={48} priority />
                    </Link>
                    <Link href="/contact" className={styles.navMob__call}>
                        <Image src="/images/call.svg" alt="call" width={24} height={24} priority />
                    </Link>
                </div>
                <nav className={`${styles.nav} ${showNavbar ? styles.show : ''}`}>
                    <div className={styles.nav__wrapper}>
                        <Link href='/' className={styles.nav__logo}>
                            <Image src="/images/logo.svg" alt="Alison Travel" fill priority />
                        </Link>

                        <div className={styles.nav__links}>
                            <div className={styles.nav__links__desk}>
                                <ul className={styles.nav__list}>
                                    <li className={styles.nav__item}>
                                        <Link href='/' className={styles.nav__link}>Home</Link>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <Link href='/guests' className={styles.nav__link}>Our guests</Link>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <Link href='/contact' className={styles.nav__link}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.nav__links__mob}>
                                <ul className={styles.nav__list}>
                                    <li className={styles.nav__list__title}>
                                        Useful links
                                    </li>
                                    <li className={styles.nav__item}>
                                        <Link href='/' className={styles.nav__link}>Home</Link>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <Link href='/contact' className={styles.nav__link}>Contacts</Link>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <Link href='/cancellation-policy' className={styles.nav__link}>Cancellation policy</Link>
                                    </li>
                                </ul>

                                <ul className={styles.nav__list}>
                                    <li className={styles.nav__list__title}>
                                        Information
                                    </li>
                                    <li className={styles.nav__item}>
                                        <Link href='/about-us' className={styles.nav__link}>About us</Link>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <Link href='/guests' className={styles.nav__link}>Our guests</Link>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <Link href='/news' className={styles.nav__link}>Travel news</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.nav__right}>
                            <div className={styles.lang} ref={dropdownRef}>
                                <button className={styles.lang__btn} onClick={handleShowLangDropdown}>
                                    <Image src="/images/lang.svg" alt="Language" width={15} height={15} priority />
                                    <span className={styles.lang__btn__text}>EN</span>
                                </button>
                                <ul className={`${styles.lang__dropdown} ${showLangDropDown ? styles.show : ''}`}>
                                    <li className={styles.lang__dropdown__item}>
                                        <button className={styles.lang__dropdown__btn} onClick={handleShowLangDropdown}>
                                            AZ
                                        </button>
                                    </li>
                                    <li className={styles.lang__dropdown__item}>
                                        <button className={styles.lang__dropdown__btn} onClick={handleShowLangDropdown}>
                                            RU
                                        </button>
                                    </li>
                                    <li className={styles.lang__dropdown__item}>
                                        <button className={styles.lang__dropdown__btn} onClick={handleShowLangDropdown}>
                                            UA
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <Link href='/favorites' className={styles.nav__fav}>
                                <SvgHeart />
                            </Link>

                            <Link href='/' className={styles.nav__b2b}>
                                B2B
                            </Link>
                        </div>

                        <button className={styles.nav__close} onClick={handleShowNavbar}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z" fill="#777E91" />
                            </svg>
                        </button>
                    </div>
                </nav>
                <div className={`${styles.overlay} ${showNavbar ? styles.show : ''}`} onClick={handleShowNavbar} />
            </div>
        </header>
    )
}

export default Navbar