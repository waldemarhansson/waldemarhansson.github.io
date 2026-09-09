import React from 'react';
import image from '../assets/optimized/a12d69033bd0-1600.jpg';
import smallImage from '../assets/optimized/a12d69033bd0-800.jpg';
import '../App.css'

const ImageComponent = () => {
    return (
        <div className="standing-image">
            <img src={image} srcSet={`${smallImage} 800w, ${image} 1600w`} sizes="100vw" width="1920" height="1080" alt="" />
        </div>
    );
};

export default ImageComponent;
