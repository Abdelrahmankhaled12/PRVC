import React from 'react'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { carousel_items } from '@/constants';

var $ = require("jquery");

if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});


const Carousel = () => {

    const options = {
        responsiveclassName: true,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        navclassName: ["owl-prev", "owl-next"],
        navText: [
            '',
            '',
        ],
        responsive: {
            0: { items: 3 },
            768: { items: 4 },
            991: { items: 5 },
            1200: { items: 7 },
        },
    };


    return (
        <div className="carousel  ">
            <div className="carousel__outer">
                <OwlCarousel className="carousel__inner js-carousel owl-carousel" loop {...options}>
                    {carousel_items.map((element, index) => (
                        <div className="carousel__slide" key={element.title}>
                            <img src={element.img} className="carousel__image" alt="Carousel Slide Image" />
                            <h3 className="carousel__title">{element.title}</h3>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Carousel