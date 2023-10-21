"use client"

import React from 'react'
import Link from 'next/link'
import { handleButtonClick } from '@/utils'
import FooterLinks from './FooterLinks'

const Footer = () => {
    return (
        <footer className="footer ">
            <button onClick={() => handleButtonClick("top")} className="footer__scroll-top js-scroll-top">
                <i className="fontello-level-up footer__scroll-icon"></i>
            </button>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo ">
                            <Link href="/" className="logo__link">
                                <img src="/logo-dark.png" alt="Logo" className="logo__image" />
                            </Link>
                        </div>
                        <p className="footer__message">The most secure closed-group private messenger system ever</p>
                    </div>
                    <FooterLinks />
                </div>
            </div>
        </footer>
    )
}

export default Footer