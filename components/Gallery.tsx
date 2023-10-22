"use client"

import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import Carousel from './Carousel';
import Subtitle from './Subtitle';

const Gallery = () => {

  useEffect(() => {
    Aos.init({
        once: true,
    });
}, [])

  return (
    <section className="section section--large " id='gallery' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
      <div className="container">
        <div className="row">
          <div className="col-md-24">
            <h2 className="section-title section-title--center "> App screenshot <span className='section-title__highlight'> gallery </span></h2>
            <Subtitle text='PRVC interface looks familiar to most users. There is no need to get used to it.'/>
          </div>
        </div>
      </div>
      <Carousel />
    </section>
  )
}

export default Gallery