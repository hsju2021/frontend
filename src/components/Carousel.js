import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section>
            <Slider {...settings}>
                a
                b
                c
            </Slider>
        </section>
    )
}

export default SimpleSlider;
