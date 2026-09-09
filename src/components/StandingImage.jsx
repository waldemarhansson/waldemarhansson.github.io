import React from 'react';
import image from '../assets/svt.jpg';
import '../App.css'

const ImageComponent = () => {
    return (
        <div className="standing-image">
            <img src={image} width="1920" height="1080" alt="" />
        </div>
    );
};

export default ImageComponent;
