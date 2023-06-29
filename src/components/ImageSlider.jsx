import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CustomStatusFormatter = ({ currentSlide, slideCount }) => {
  return (
    <div >
      {currentSlide } / {slideCount}
    </div>
  );
};

const CustomArrowRenderer = ({ type, onClick }) => {
  return (
    <div
      className={`custom-arrow custom-arrow-${type}`}
      onClick={onClick}
    ></div>
  );
};


const ImageSlider = ({images}) =>{
  




return(
<Carousel
showArrows={true}
arrowRenderer={CustomArrowRenderer}
showStatus={true}
statusFormatter={(currentSlide, slideCount) => (
  <CustomStatusFormatter currentSlide={currentSlide} slideCount={slideCount} />
)}
showIndicators={false}
showThumbs={false}
infiniteLoop
autoPlay
interval={4000}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>

)

}
export default ImageSlider