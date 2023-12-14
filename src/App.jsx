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
              <StandingVideo video={"https://player.vimeo.com/progressive_redirect/playback/894506296/rendition/1080p/file.mp4?loc=external&log_user=0&signature=624973b2d411f9f0eaf468ac23c9c3e41faea6869b3faa38d8ec3a57e4534d23"} />
            </div>
          </div>
        </section>
      ) : (<section id="section1">
        <div></div>
      </section>
      )}



      {isDesktop ? (<section id="section3">
        <LayingVideoWithChoise video={"https://player.vimeo.com/progressive_redirect/playback/894051084/rendition/1080p/file.mp4?loc=external&log_user=0&signature=20a3cb1e67b6e301465a1d466bc8890e0c354d2ad8432d34e2e1334563c61a60"} />
        <SingleLayingVideo />
        <LayingVideoWithChoise video={"https://player.vimeo.com/progressive_redirect/playback/894193085/rendition/1080p/file.mp4?loc=external&log_user=0&signature=642c6a1374898c01ec9ecb1a6eb5b0d3e5803feb42859d1fcae30115c28aeca8"} />
        <LayingVideoWithChoise video={imanDans} />
        <LayingVideoWithChoise video={"https://player.vimeo.com/progressive_redirect/playback/894048584/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a6c54192f53b2898169c2c02d51a5ff684afd452404b355975a81e0227ff053d"} />
      </section>
      ) : (
        <section id="section4">
          <InteractiveImage />
          <StandingVideo video={"https://player.vimeo.com/progressive_redirect/playback/894088014/rendition/1080p/file.mp4?loc=external&log_user=0&signature=68dc9c90b1ecdd4f5261f50d30b814b6753e93ef36dc19075dea5c7c225d1abd"} />

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
