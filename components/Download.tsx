"use client"

import React, { useEffect } from 'react'
import DowmloadBoxes from './DowmloadBoxes'
import Aos from "aos";
import "aos/dist/aos.css"

const Download = () => {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])

    return (
        <section className="section section--grey " id='download' >
            <div className="container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                <div className="row" >
                    <div className="col-md-24">
                        <h2 className="section-title section-title--center ">Download this <span className='section-title__highlight'>secure</span> app</h2>
                        <p className="section-subtitle section-subtitle--center "> available on all modern operating systems </p>
                    </div>
                </div>
                <div className="row">
                    <DowmloadBoxes />
                </div>
            </div>
        </section>
    )
}

export default Download