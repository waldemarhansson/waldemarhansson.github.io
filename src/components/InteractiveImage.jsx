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
    const [initialX, setInitialX] = useState(null);

    const handleStart = (event) => {
        setInitialX(event.touches[0].clientX);
    }

    const handleMove = (event) => {
        if (!initialX) {
            return;
        }
        const currentX = event.touches[0].clientX;
        const diffX = initialX - currentX;

        if (diffX > 0) {
            // Swipe left reaction
            const nextImageIndex =
                (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextImageIndex);
        } else {
            // Swipe right reaction
            const previousImageIndex =
                (currentImageIndex - 1 + images.length) % images.length;
            setCurrentImageIndex(previousImageIndex);
        }

        setInitialX(null);

    }



    const handleImageClick = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        // Calculate the percentage of the click position relative to the container width
        const containerWidth = event.currentTarget.clientWidth;
        const clickPositionPercentage = (x / containerWidth) * 100;

        // Check if the click occurred on the left side (less than 50%)
        if (clickPositionPercentage < 50) {
            // Go to the previous image
            const previousImageIndex =
                (currentImageIndex - 1 + images.length) % images.length;
            setCurrentImageIndex(previousImageIndex);
        } else {
            // Go to the next image
            const nextImageIndex =
                (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextImageIndex);
        }

        setInfo({ visible: true, x, y });
    };

    return (
        <div className="image-container" onTouchStart={handleStart} onTouchMove={handleMove}>
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