"use client"

import React, { useEffect } from 'react'
import { handleButtonClick } from '@/utils'
import Aos from "aos";
import "aos/dist/aos.css"

const Hero = () => {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])

    return (
        <div className="hero hero--skin-2 hero--center" id="top">
            <div className="container">
                <div className="row" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="col-md-14 col-md-offset-5">
                        <div className="push push--150"> </div>
                        <h2 className="section-title section-title--center section-title--light ">Paranoid enterprise messenger with <span className='section-title__highlight'>open-source&nbsp;on-premise&nbsp;server</span> from corporate banking security experts</h2>
                        <div className="button button--small button--inline button--shadow  ">
                            <button onClick={() => handleButtonClick("features")} className="button__link js-scroll-to">See more</button>
                        </div>
                        <div className="button button--small button--inline button--transparent  ">
                            <button onClick={() => handleButtonClick("download")} className="button__link js-scroll-to">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero