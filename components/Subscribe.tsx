"use client"

import React, { useEffect } from 'react'
import Subtitle from './Subtitle'
import SocialsItems from './SocialsItems'
import FormSubscribe from './FormSubscribe'
import Aos from "aos";
import "aos/dist/aos.css"

const Subscribe = () => {

  useEffect(() => {
    Aos.init({
        once: true,
    });
}, [])

  return (
    <section className="section section--skin-3 section--large " id='subscribe'>
      <div className="container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
        <div className="row">
          <div className="col-md-20 col-md-offset-2">
            <h2 className="section-title section-title--center section-title--light "> Subscribe to <span className='section-title__highlight'> our newsletter </span></h2>
            <Subtitle text='Follow us on Twitter, Facebook and Linkedin' />
            <div className="subscribe">
              <FormSubscribe />
            </div>
          </div>
        </div>
      </div>
      <SocialsItems />
    </section>
  )
}

export default Subscribe