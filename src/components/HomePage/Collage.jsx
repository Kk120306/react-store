import { FRUITS } from "../Constants";
import './Collage.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Collage = () => {

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1100,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };


    return (
        <div className="carousel-wrapper">
            <Slider {...settings}>
                {FRUITS.map(fruit => (
                    <Link key={fruit.id} to={`/store/${encodeURIComponent(fruit.name)}`}>
                        <div key={fruit.id} className="fruit-card">
                            <img src={fruit.src} alt={fruit.name} />
                            <h3>{fruit.name}</h3>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
}

export default Collage;