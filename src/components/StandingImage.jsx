import React from 'react';
import image from '../assets/svt.jpg';
import '../App.css'

const ImageComponent = () => {
    return (
        <div className="standing-image">
            <img src={image} alt="" />
        </div>
    );
};

export default ImageComponent;
