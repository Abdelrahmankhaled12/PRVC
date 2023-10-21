"use client"

import React, { useEffect, useState } from 'react'
import { handleButtonClick } from '@/utils'
import { header_links } from '@/constants'

const Header = () => {

    const [show, setShow] = useState("");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY])

    const controlNavbar = () => {
        if (window.scrollY > 50) {
            setShow("header--fixed")
        } else {
            setShow("")
        }
        setLastScrollY(window.scrollY)
    }

    const mobileMenuFunction = () => {
        setMobileMenu(!mobileMenu)
    }


    return (
        <div>
            <header className={`header js-header ${show}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="logo">
                                <button onClick={() => handleButtonClick("top")} className="logo__link" style={{ "background": "transparent", "border": "none" }}>
                                    <img src={show === "" ? "/logo.png" : "/logo-dark.png"} alt="Logo" className="logo__image js-logo__image" data-switch="true" />
                                </button>
                            </div>
                        </div>
                        <div className="col-md-20 col-sm-20 col-xs-12">
                            <nav>
                                <ul className="menu menu--right js-menu sf-menu ">
                                    {header_links.map((link) => (
                                        <li className="menu__item" key={link.title}>
                                            <button onClick={() => handleButtonClick(link.href)}
                                                className="menu__link js-scroll-top"
                                                style={{ "background": "transparent", "border": "none" }}>
                                                {link.title}
                                            </button>
                                        </li>
                                    ))}
                                    <li className="menu__item menu__item--button">
                                        <button
                                            onClick={() => handleButtonClick("download")}
                                            className="menu__link js-scroll-to"
                                            style={{ "background": "transparent", "border": "none" }}>
                                            Download
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                            <button className='iconMenu' onClick={() => mobileMenuFunction()}>
                                <img src={show === "" ? '/menu-white.png' : '/menu.png'} alt='menu' />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`menuMobile ${mobileMenu ? "right" : ""}`}>
                <div className="mobile-menu__close js-mobile-menu__close" onClick={() => mobileMenuFunction()}></div>
                <ul className="mobile-menu js-mobile-menu ">
                    {header_links.map((link) => (
                        <li className="mobile-menu__item" key={link.title}>
                            <button onClick={() => {
                                handleButtonClick(link.href)
                                mobileMenuFunction()
                            }}
                                className="mobile-menu__link js-scroll-top"
                                style={{ "background": "transparent", "border": "none" }}>
                                {link.title}
                            </button>
                        </li>
                    ))}
                    <li className="mobile-menu__item mobile-menu__item--button">
                        <button
                            onClick={() => {
                                handleButtonClick("download")
                                mobileMenuFunction()
                            }}
                            className="mobile-menu__link js-scroll-to"
                            style={{ "border": "none", "width": "90%", "height": "50px" }}>
                            Download
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header