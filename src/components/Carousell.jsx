import { useState, useEffect } from "react";

const Carousell = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const imageSources = Object.values(images);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(current => (current === imageSources.length - 1 ? 0 : current + 1));
      }, 1500);
      return () => clearInterval(interval);
    }, [imageSources.length]);
  
    return (
      <div className="image-slider">
        {imageSources.map((image, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    );
  };

  export default Carousell;







