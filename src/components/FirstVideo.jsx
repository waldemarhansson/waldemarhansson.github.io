import { useEffect, useState } from "react"

const FirstVideo = ({ videoSource }) => {

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
      <p> WE 🤍 VISUAL STORYTELLING
      </p>
      <video
        poster={isDesktop ? "src/assets/armand-916_superlow.jpg" : "src/assets/armand169_suprelow.jpg"}
        className="video-element" loop muted autoPlay playsInline src={videoSource} />

    </div>

  )
}
export default FirstVideo