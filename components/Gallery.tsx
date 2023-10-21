"use client"

import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

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
            <p className="section-subtitle section-subtitle--center "> PRVC interface looks familiar to most users. There is no need to get used to it. </p>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel__outer">
          <div  className="carousel__inner js-carousel owl-carousel">
            <div className="carousel__slide">
              <img src="/ss01-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Launch Screen</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss02-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Login</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss03-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Add Contacts</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss04-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Contact List (Roster)</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss05-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Contact Details</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss06-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Contact Edit</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss07-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Chat Basic Text</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss08-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Pictures and Audio Message</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss09-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Message Purge</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss10-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Active Call</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss11-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Active Chats List</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss12-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Chat List Purge</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss13-432x768.png" className="carousel__image" alt="Carousel Slide Image"/>
                <h3 className="carousel__title">Incoming Call</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss14-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Group Chat Contact Select</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss15-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Group Chat Name Edit</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss16-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Audio Message</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss17-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Distribution List Edit</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss18-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Distribution Lists</h3>
            </div>
            <div className="carousel__slide">
              <img src="/ss19-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
              <h3 className="carousel__title">Personal Details Edit</h3>
            </div>
          </div >
        </div>
      </div>
    </section>
  )
}

export default Gallery