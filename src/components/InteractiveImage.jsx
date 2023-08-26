import { useState } from "react";
import victor1 from "../assets/victorbild1.jpg"
import victor2 from "../assets/victorbild2.jpg"
import victor3 from "../assets/victorbild3.jpg"
import crawl from "../assets/crawl.mp4"



function InteractiveImage() {
    const images = [
        victor1,
        victor2,
        victor3
        // ... add more image URLs
    ];

    const [info, setInfo] = useState({ visible: false, x: 0, y: 0 });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        const nextImageIndex =
            (currentImageIndex + 1) % images.length;

        setInfo({ visible: true, x, y });
        setCurrentImageIndex(nextImageIndex);
    };

    const handleContainerClick = () => {
        setInfo({ visible: false, x: 0, y: 0 });
    };

    return (
        <div className="image-container" onClick={handleContainerClick}>
            <img
                src={images[currentImageIndex]}
                alt="Interactive"
                className="interactive-image"
                onClick={handleImageClick}
            />
            <div className="image-index">
                {currentImageIndex + 1} / {images.length}
            </div>
            {info.visible && (
                <div
                    className="info-box"
                    style={{ left: info.x, top: info.y }}
                >
                    Info here
                </div>
            )}
        </div>
    );
}

export default InteractiveImage;