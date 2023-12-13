import { useState } from "react";
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