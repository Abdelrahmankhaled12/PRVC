import React from 'react'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
                        <img src="/ss13-432x768.png" className="carousel__image" alt="Carousel Slide Image" />
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
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Carousel