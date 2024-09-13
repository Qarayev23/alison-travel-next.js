"use client"

import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import SvgHeart from '@/assets/icons/Heart'

const Navbar = () => {
    const [showLangDropDown, setShowLangDropDown] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)
    const dropdownRef = useRef(null)

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
                                    <Link href='/' className={styles.nav__link}>Our guests</Link>
                                </li>
                                <li className={styles.nav__item}>
                                    <Link href='/' className={styles.nav__link}>Contact</Link>
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
                                    <Link href='/' className={styles.nav__link}>Contacts</Link>
                                </li>
                                <li className={styles.nav__item}>
                                    <Link href='/' className={styles.nav__link}>Cancellation policy</Link>
                                </li>
                            </ul>


                            <ul className={styles.nav__list}>
                                <li className={styles.nav__list__title}>
                                    Information
                                </li>
                                <li className={styles.nav__item}>
                                    <Link href='/' className={styles.nav__link}>About us</Link>
                                </li>
                                <li className={styles.nav__item}>
                                    <Link href='/' className={styles.nav__link}>Our guests</Link>
                                </li>
                                <li className={styles.nav__item}>
                                    <Link href='/' className={styles.nav__link}>Travel news</Link>
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

                        <Link href='/' className={styles.nav__fav}>
                            <SvgHeart />
                        </Link>

                        <Link href='/' className={styles.nav__b2b}>
                            B2B
                        </Link>
                    </div>
                </nav>
                <div className={`${styles.overlay} ${showNavbar ? styles.show : ''}`} onClick={handleShowNavbar} />
            </div>
        </header>
    )
}

export default Navbar