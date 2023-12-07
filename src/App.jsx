import { useState } from 'react'
import './App.css'
import NavigtionBar from './components/NavigationBar.jsx'
import FirstVideo from './components/FirstVideo'
import { useEffect } from 'react'
import AboutMe from './components/AboutMe'
import Clients from './components/Clients'
import SocialMedia from './components/SocialMedia'
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



function App() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [videoSource, setVideoSource] = useState('');

  let vimeoreel916 = "https://player.vimeo.com/progressive_redirect/playback/892227609/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8c36c4f4e62ccda15cc97adff30a02513389b25dc0ccdd32462a7af47a1286d3"
  let vimeoreel169 = "https://player.vimeo.com/progressive_redirect/playback/892229703/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6cd44cc311a79d7a682fa418cb8dd71c135344c83c25b6455014c8cf40de9e32"

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

      </section>


      {isDesktop ? (
        <section id="section1">
          <div className="carousell-container">
            <div className="carousell-wrapper">
              <StandingVideo video={victorVideo1} />
            </div>
            <div className="carousell-wrapper">
              <StandingVideo video={crawl} />
            </div>
            <div className="carousell-wrapper">
              <StandingVideo video={victorVideo2} />
            </div>
          </div>
        </section>
      ) : (<section id="section1">
        <div></div>
      </section>
      )}



      {isDesktop ? (<section id="section3">
        <SingleLayingVideo />
        <LayingVideoWithChoise video={liggandevideo} />
        <LayingVideoWithChoise video={imanDans} />
      </section>
      ) : (
        <section id="section4">
          <InteractiveImage />
          <LayingVideoWithChoise video={imanDans} />
          <LayingVideoWithChoise video={imandLeende} />
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
