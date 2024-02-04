import { useState, useEffect } from "react";

useState

const LoadingImage = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <img
            className="firstImage"
            src={isDesktop ? "src/assets/armand-916_superlow.jpg" : "src/assets/armand169_suprelow.jpg"}
            alt=""
            style={{
                position: 'relative',

            }}
        />
    )
}
export default LoadingImage