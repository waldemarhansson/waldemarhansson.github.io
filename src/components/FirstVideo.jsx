import { useEffect, useState } from "react"

const FirstVideo = ({ videoSource }) => {
  const [isPlaying, setIsPlaying] = useState(true)
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
  const handleCanPlay = () => {
    console.log("can play now")
    setIsPlaying(true);
  };

  return (
    <div className="firstVideo" style={{
      position: 'absolute',
      left: 0,
      width: '100%',
      height: 'auto',
    }}>
      <p> WE 🤍 VISUAL STORYTELLING
      </p>

      <video onPlay={handleCanPlay}
        className="video-element" loop muted autoPlay playsInline src={videoSource} />





    </div>

  )
}
export default FirstVideo