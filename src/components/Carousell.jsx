import { useState, useEffect } from "react";


import victorbild1 from "../assets/victorbild1.jpg"
import victorbild2 from "../assets/victorbild2.jpg"

const Carousell = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const imageSources = [victorbild1,victorbild2];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(current => (current === imageSources.length - 1 ? 0 : current + 1));
      }, 1500);
      return () => clearInterval(interval);
    }, [imageSources.length]);
  
    return (
      <div className="carousell-container">
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
      </div>
    );
  };

  export default Carousell;







