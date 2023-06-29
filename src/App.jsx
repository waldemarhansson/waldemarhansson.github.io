import { useState } from 'react'
import './App.css'
import NavigtionBar from './components/NavigationBar.jsx'
import FirstVideo from './components/FirstVideo'
import GalleryOfPhotos from './components/GalleryOfPhotos'
import { createClient } from 'contentful';
import { useEffect } from 'react'
import Carousell from './components/Carousell'
import LayingVideo from './components/LayingVideo'
import AboutMe from './components/AboutMe'
import Clients from './components/Clients'
import SocialMedia from './components/SocialMedia'
import LayingPictures from './components/LayingPictures'
import StandingVideo from './components/StandingVideo'
import SingleLayingVideo from './components/SIngleLayingVideo'
import Contact from './components/Contact'
import victorVideo1 from "./assets/victor1.mp4"
import victorVideo2 from "./assets/victor2.mp4"
import victorVideo3 from "./assets/victor3.mp4"
import kentaro from "./assets/kentaro.mp4"
import Biglogo from './components/Biglogo'
import liggandevideo from './assets/video2.mp4'
import LayingVideoWithChoise from './components/LayingVideoWithChoise'
import imanDans from './assets/IMAN NEW WALD_02.mp4'
import imandLeende from './assets/IMAN NEW WALD_01.mp4'
import newestreelstand from "./assets/newestreelstanding.mp4"
import newestdesktop from "./assets/newestreel169.mp4"
import victorslide1 from "./assets/victorbild1.jpg"
import victorslide2 from "./assets/victorbild2.jpg"
import ImageSlider from './components/ImageSlider'
import reel29juni from './assets/reel91629juni.mp4'
import victorslide3 from "./assets/victorbild3.jpg"







function App() {
const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
const [videoSource, setVideoSource] = useState('');
let victorSlide = [victorslide1,victorslide2,victorslide3];

let vimeoreel916 = "https://player.vimeo.com/progressive_redirect/playback/840815073/rendition/720p/file.mp4?loc=external&log_user=0&signature=ded11233ac88cc6e7afc71ee067a156d7c92eaaee51264f57722d3c6037297c2"
let vimeoreel169 = "https://player.vimeo.com/progressive_redirect/playback/840815583/rendition/720p/file.mp4?loc=external&log_user=0&signature=eb75fc96bcc60bba7eb08f3963451c71a9752e4f96b5d1d22ff1a28721b90c58"


useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  const initialVideoSource = window.innerWidth >= 768 ? vimeoreel169 : vimeoreel916;
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
   
    <NavigtionBar/>
      <FirstVideo videoSource={videoSource}/>
     
      </section>
 
      <section id="section1">
        {isDesktop ? (
          <div className="carousell-container">
            <div className="carousell-wrapper">
            <StandingVideo video={victorVideo1}/> 
            </div>
            <div className="carousell-wrapper">
            <StandingVideo video={victorVideo2}/> 
            </div>
            <div className="carousell-wrapper">
            <StandingVideo video={victorVideo3}/> 
            </div>
          </div>
        ) : (
         <div></div>
        )}
      </section>
   

      {isDesktop ? ( <section id="section3">
        <SingleLayingVideo/>
        <LayingVideoWithChoise video={liggandevideo}/>
        <LayingVideoWithChoise video={imanDans}/>
        </section>
      ) :(
        <section id="section3">
          <ImageSlider images={victorSlide}/>
   <LayingVideoWithChoise video={imanDans}/>
   <LayingVideoWithChoise video={imandLeende}/>
   
   
  
    <SingleLayingVideo/>
 
   </section>
   )}
  
   
  <Biglogo/>
    <section id='aboutme'>
      <AboutMe/>

      
    </section>
    <section id='contact'>
      <Contact/>
      <SocialMedia/>
    </section>
    <section id='clients'>

    <Clients/>
     
     
    
    </section>
   
   
    </div>
  )
}

export default App
