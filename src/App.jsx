import { useState } from 'react'
import './App.css'
import FirstVideo from './components/FirstVideo'
import { useEffect } from 'react'
import AboutMe from './components/AboutMe'
import Clients from './components/Clients'
import StandingVideo from './components/StandingVideo'
import SingleLayingVideo from './components/SIngleLayingVideo'
import victorVideo1 from "./assets/victor1.mp4"
import victorVideo2 from "./assets/victor2.mp4"
import liggandevideo from './assets/video2.mp4'
import LayingVideoWithChoise from './components/LayingVideoWithChoise'
import imanDans from './assets/IMAN NEW WALD_02.mp4'
import imandLeende from './assets/IMAN NEW WALD_01.mp4'
import crawl from "./assets/crawl.mp4"
import InteractiveImage from './components/InteractiveImage'
import desktopLogo from './assets/welove.png'
import mobileLogo from './assets/weloveMobile.png'
import StandingImage from './components/StandingImage'
//hej
function App() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [videoSource, setVideoSource] = useState('');


  let vimeoreel916 = "https://player.vimeo.com/progressive_redirect/playback/1031975691/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5b32785b80e5a817d3ba8aa75713a37e11ea35903d4079e6f8e7892d21bce210"
  let vimeoreel169 = "https://player.vimeo.com/progressive_redirect/playback/1031592005/rendition/1080p/file.mp4?loc=external&log_user=0&signature=ef290edddb40d37eb796681a5a749dd451c382304155ee7475c3f8f835fda738"

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    const initialVideoSource = window.innerWidth <= 768 ? vimeoreel169 : vimeoreel916;
    setVideoSource(initialVideoSource);


    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newVideoSource = isDesktop ? vimeoreel169 : vimeoreel916;

    setVideoSource(newVideoSource);

  }, [isDesktop]);

  return (

    <div className="App">
      <section id='section0'>

        <FirstVideo videoSource={videoSource} />
        <StandingImage />

      </section>


      {isDesktop ? (
        <section id="section1">
          <div >
            <StandingVideo video={"https://player.vimeo.com/progressive_redirect/playback/1036104648/rendition/1080p/file.mp4?loc=external&log_user=0&signature=55665f7ac37707189e6d78d64abe86ff1446b57d3d5b65c65a68d8a4396ff429"} />
          </div>
        </section>
      ) : (<section id="section1">
        <div></div>
      </section>
      )}



      {isDesktop ? (
        <section id="section3">
          <LayingVideoWithChoise video={"https://player.vimeo.com/progressive_redirect/playback/1037217899/rendition/1080p/file.mp4?loc=external&log_user=0&signature=24564b7664b74d0c377e464a40509e8789eb360de279c8841b7e7054c39cfc56"} />
          <SingleLayingVideo />
          <LayingVideoWithChoise video={"https://player.vimeo.com/progressive_redirect/playback/894048584/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a6c54192f53b2898169c2c02d51a5ff684afd452404b355975a81e0227ff053d"} />
        </section>
      ) : (
        <section id="section4">
          <LayingVideoWithChoise video={"https://player.vimeo.com/progressive_redirect/playback/1036104648/rendition/1080p/file.mp4?loc=external&log_user=0&signature=55665f7ac37707189e6d78d64abe86ff1446b57d3d5b65c65a68d8a4396ff429"} />
          <LayingVideoWithChoise video={"https://player.vimeo.com/progressive_redirect/playback/1037217899/rendition/1080p/file.mp4?loc=external&log_user=0&signature=24564b7664b74d0c377e464a40509e8789eb360de279c8841b7e7054c39cfc56"} />
          <SingleLayingVideo />

        </section>
      )}
      {isDesktop ? (<section id='aboutme'>
        <AboutMe />

      </section>) : (<section id='aboutme'>
        <AboutMe />

      </section>

      )}
      <section id='contact'>


      </section>
      <section id='clients'>

        <Clients />

      </section>

    </div>


  )
}

export default App
