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
    const [dragDistance, setDragDistance] = useState(0);
    const [dragDirection, setDragDirection] = useState(null);

    const handleStart = (event) => {
        event.preventDefault();
        setInitialX(event.touches[0].clientX);
    }
    const handleTouchMove = (event) => {
        event.preventDefault();
        if (!initialX) {
            return;
        }

        const currentX = event.touches[0].clientX;
        const diffX = initialX - currentX;

        setDragDistance(diffX);
        setDragDirection(diffX > 0 ? "left" : "right");
    };

    const handleTouchEnd = () => {
        if (!initialX || Math.abs(dragDistance) < 60) {
            // Reset drag if it's a small movement
            setDragDistance(0);
            setDragDirection(0);

            return;
        }

        const direction = dragDistance > 0 ? 1 : -1;
        const nextImageIndex = (currentImageIndex + direction + images.length) % images.length;
        setCurrentImageIndex(nextImageIndex);

        // Reset drag distance
        setDragDistance(0);
        setInitialX(null);
    };

    return (
        <div className="interactive-wrapper" onTouchStart={handleStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <img
                src={images[currentImageIndex]}
                alt="Interactive"
                className="interactive-image"
                style={{
                    position: "relative",
                    left: 0,
                    top: 0,
                    transform: `translateX(-${dragDistance}px)`,

                    width: "100%",
                    height: "auto",
                    zIndex: 1
                }}

            />
            <div className="image-index" style={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}>
                {(currentImageIndex + 1) % images.length + 1} / {images.length}
            </div>
            <img
                src={images[(currentImageIndex + 1) % images.length]}
                alt="Next"
                className="next-image"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transition: dragDistance === 0 ? "transform 0.6s ease" : "none",

                    width: "100%",
                    height: "auto",
                    zIndex: 0
                }}
            />

        </div>
    );
}

export default InteractiveImage;