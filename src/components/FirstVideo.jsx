import { useEffect, useState } from "react"
import placeholderImage from "../assets/Stills/KBS_HELLO_SPRINGss_wtgh6y.jpeg"



const FirstVideo = ({ videoSource }) => {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Update the 'isDesktop' state when the window is resized
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className="firstVideo" >
      <p> WE 🤍 VISUAL STORYTELLING
      </p>

      <video
        poster={isDesktop ? "src/assets/armand-916_superlow.jpg" : "src/assets/armand169_suprelow.jpg"}
        className="video-element" loop muted autoPlay playsInline src={videoSource} />



    </div>

  )
}
export default FirstVideo