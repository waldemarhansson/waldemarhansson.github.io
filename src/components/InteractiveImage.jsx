import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/Stills/InteractiveImage/WALDEMARHANSSON_ARK_01.jpg"
import image3 from "../assets/Stills/InteractiveImage/WALDEMARHANSSON_ARK_02.jpg"
import image4 from "../assets/Stills/InteractiveImage/WALDEMARHANSSON_ARK_03.jpg"
import image5 from "../assets/Stills/InteractiveImage/WALDEMARHANSSON_ARK_04.jpg"
import image6 from "../assets/Stills/InteractiveImage/WALDEMARHANSSON_ARK_05.jpg"
import image7 from "../assets/Stills/InteractiveImage/WALDEMARHANSSON_ARK_06.jpg"
function InteractiveImage() {
    const images = [
        image3,
        image1,
        image4,
        image5,
        image6,
        image7
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
    };

    return (
        <Slider {...settings}>
            {images.map((photo, index) => (
                <div className="interactive-wrapper" key={index}>
                    <img className="interactive-images" src={photo} alt={`Photo ${index}`} />
                    <div className="interactive-image-overlay"><p>{index + 1}/{images.length}</p></div>
                </div>
            ))}
        </Slider>
    );
}

export default InteractiveImage;