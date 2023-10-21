"use client"

import React, { useEffect } from 'react'
import Members from './Members'
import Subtitle from './Subtitle'
import Aos from "aos";
import "aos/dist/aos.css"

const Team = () => {

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])

    return (
        <section className="section section--large" id='team' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="container">
                <div className="row">
                    <div className="col-md-24">
                        <h2 className="section-title section-title--center "> Meet our <span className='section-title__highlight'> amazing team </span></h2>
                        <Subtitle text='Good project needs a good team, but awesome project needs the dream team. Thats who we are.' />
                    </div>
                </div>
                <div className="row">
                    <Members />
                </div>
            </div>
        </section>
    )
}

export default Team