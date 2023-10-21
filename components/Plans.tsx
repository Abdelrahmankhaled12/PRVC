"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import Subtitle from './Subtitle'
import Aos from "aos";
import "aos/dist/aos.css"

const Plans = () => {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])

    return (
        <section className="section section--large " id='plans' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="container">
                <div className="row">
                    <div className="col-md-24">
                        <h2 className="section-title section-title--center "> Our awesome <span className='section-title__highlight'> pricing plans </span></h2>
                        <Subtitle text="Select the product that best suits your messaging needs." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-16 col-sm-offset-4 col-md-offset-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        <div className="pricing">
                            <h3 className="pricing__title">Paranoic Group</h3>
                            <h4 className="pricing__price"><span className="pricing__placeholder"><span className="pricing__currency">$</span> 390<span className="pricing__frequency">/mo</span></span></h4>
                            <ul className="pricing__features">
                                <li className="pricing__feature">
                                    <span className="pricing__highlight">2</span> domain licenses</li>
                                <li className="pricing__feature">
                                    <span className="pricing__highlight">100</span> users</li>
                                <li className="pricing__feature pricing__feature--passive">integrations</li>
                                <li className="pricing__feature pricing__feature--passive">updates</li>
                                <li className="pricing__feature pricing__feature--passive">premium support</li>
                            </ul>
                            <div className="button button--small button--shadow button--dark  ">
                                <Link href="/" className="button__link">Sign up</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-16 col-sm-offset-4 col-md-offset-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        <div className="pricing pricing--featured  ">
                            <h3 className="pricing__title">Paranoic Office</h3>
                            <h4 className="pricing__price"><span className="pricing__placeholder"><span className="pricing__currency">$</span> 790<span className="pricing__frequency">/mo</span></span></h4>
                            <ul className="pricing__features">
                                <li className="pricing__feature">
                                    <span className="pricing__highlight">5</span> domain licenses</li>
                                <li className="pricing__feature">
                                    <span className="pricing__highlight">500</span> users</li>
                                <li className="pricing__feature">integrations</li>
                                <li className="pricing__feature">updates</li>
                                <li className="pricing__feature pricing__feature--passive">premium support</li>
                            </ul>
                            <div className="button button--small button--shadow button--dark  ">
                                <Link href="/" className="button__link">Sign up</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-16 col-sm-offset-4 col-md-offset-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        <div className="pricing  ">
                            <h3 className="pricing__title">Paranoic Enterprise</h3>
                            <h4 className="pricing__price"><span className="pricing__placeholder">CALL</span></h4>
                            <ul className="pricing__features">
                                <li className="pricing__feature">
                                    <span className="pricing__highlight">unlimited</span> domain licenses</li>
                                <li className="pricing__feature">
                                    <span className="pricing__highlight">unlimited</span> users</li>
                                <li className="pricing__feature">integrations</li>
                                <li className="pricing__feature">updates</li>
                                <li className="pricing__feature">
                                    <span className="pricing__highlight">premium support</span>
                                </li>
                            </ul>
                            <div className="button button--small button--shadow button--dark  ">
                                <Link href="/" className="button__link">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans