import { useEffect, useState } from "react"
import welove from '../assets/welove.png'

const FirstVideo = ({ videoSource, logoSource }) => {

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
    <div className="firstVideo" >

      <img className="weLove-logo" src={welove}></img>

      <video poster={isDesktop ? "src/assets/VST_DP_02.jpg" : "src/assets/SHOWREEL_2025_DP.jpg"}
        className="video-element" loop muted autoPlay playsInline src={videoSource} />
    </div>

  )
}
export default FirstVideo