"use client"

import React, { useEffect } from 'react'
import Subtitle from './Subtitle'
import MapContact from './MapContact'
import Aos from "aos";
import "aos/dist/aos.css"

const Contact = () => {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])

    return (
        <section className="section section--large section--no-pb " id='contacts' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="container">
                <div className="row">
                    <div className="col-md-24">
                        <h2 className="section-title section-title--center "> Get in touch <span className='section-title__highlight'> with us </span></h2>
                        <Subtitle text='We are happy to answer all your questions related to PRVC messenger. Please provide us with your contact information below. We will get in touch with you as soon as possible.' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-20 col-lg-offset-2 col-md-24 col-md-offset-0">
                        <div className="contact-form  ">
                            <form action="blocks/contact-form/contact-form.php" className="contact-form__form js-contact-form">
                                <div className="contact-form__modal js-contact-form__modal">
                                    <h3 className="contact-form__message"> Your message was sent<span> successfully</span><br />Thank you! </h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="contact-form__label" htmlFor="name-input">Your name</label>
                                        <div className="input input--contact  ">
                                            <input type="text" name="name-input" className="input__field" placeholder="" id="name-input" data-validation="required" />
                                        </div>
                                        <label className="contact-form__label" htmlFor="email-input">Your e-mail</label>
                                        <div className="input input--contact  ">
                                            <input type="text" name="email-input" className="input__field" placeholder="" id="email-input" data-validation="required email" />
                                        </div>
                                        <label className="contact-form__label" htmlFor="subject-input">Subject</label>
                                        <div className="input input--contact  ">
                                            <input type="text" name="subject-input" className="input__field" placeholder="" id="subject-input" data-validation="required" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="contact-form__label" htmlFor="message-input">Your Message</label>
                                        <textarea name="message-input" id="message-input" className="contact-form__textarea" data-validation="required"></textarea>
                                        <div className="button button--small button--shadow  ">
                                            <input type="submit" className="button__input" value="Send us the message" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map" id="map" data-lon="43.730459" data-lat="7.4124986">
                <MapContact />
            </div>

        </section>
    )
}

export default Contact