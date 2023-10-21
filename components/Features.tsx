"use client"

import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import AccordionItem from './AccordionItem';
const Features = () => {

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])


    return (
        <section className="section section--skin-1 " id='features' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        <div className="push push--60 "> </div>
                        <h2 className="section-title"> Security comes with expertise </h2>
                        <p className="section-subtitle"> Developed by experts in corporate banking security with more than 20 years of experience </p>
                        <ul className="list list--check">
                            <li className="list__item"> True P2P transport-level encryption </li>
                            <li className="list__item"> Forcible message security policies </li>
                            <li className="list__item"> Advanced man-in-the-middle counter-measures</li>
                        </ul>
                        <ul className="list list--boxes  ">
                            <li className="list__item">
                                <div className="box  ">
                                    <img src="/shield.png" className="box__icon" alt="Box icon" />
                                </div>
                            </li>
                            <li className="list__item">
                                <div className="box  ">
                                    <img src="/moneysend.png" className="box__icon" alt="Box icon" /> </div>
                            </li>
                            <li className="list__item">
                                <div className="box  ">
                                    <img src="/edocument.png" className="box__icon" alt="Box icon" /> </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-12 col-md-11 col-md-offset-1 col-lg-offset-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        <div className="screens-preview screens-preview--right  ">
                            <img src="/ss1-640x1130.png" className="screens-preview__primary" alt="Primary Screenshot" />
                            <img src="/ss2-500x880.png" className="screens-preview__secondary" alt="Secondary Screenshot" /> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-13 col-md-13" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        <div className="screens-preview  ">
                            <img src="/ss3-640x1130.png" className="screens-preview__primary" alt="Primary Screenshot" />
                            <img src="/ss4-500x880.png" className="screens-preview__secondary" alt="Secondary Screenshot" /> </div>
                    </div>
                    <div className="col-lg-11 col-md-10 col-lg-offset-0 col-md-offset-1" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                        <div className="push push--100  "> </div>
                        <h2 className="section-title "> Perfectly balanced feature list </h2>
                        <p className="section-subtitle "> Implemented features do not compromise security being conciously selected for those who care about it </p>
                        <ul className="accordion js-accordion ">
                            <AccordionItem
                                img='/attach.png'
                                title='Attachment management policy'
                                paragraph='You would never want to leave sensitive files floating around in your devices uncontrolably. Our app deploy special encrypted sandbox on your smartphone or desktop computer so that any downloaded file stay inside that sandbox. Yet you can export files into any other app anytime, but you do it conciously.'
                            />
                            <AccordionItem
                                img='/policy.png'
                                title='Voice and video calls policy'
                                paragraph="Voice and video calls are made over encrypted peer-to-peer tunnel. You don't need to use VPN for calls anymore. Archiving, saving and intercepting is impossible. That's the price you pay for security."
                            />
                            <AccordionItem
                                img='/broadcast.png'
                                title='Group messaging and broadcast lists'
                                paragraph='Group members list is unavailable outside the group. Group existance is conceived. Only invited members know the group name and its members. Distribution list members are known to the creator, and kept secret even from members.</p>
                                '
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features