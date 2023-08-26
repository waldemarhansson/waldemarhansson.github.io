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
import crawl from "./assets/crawl.mp4"
import InteractiveImage from './components/InteractiveImage'







function App() {
const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
const [videoSource, setVideoSource] = useState('');

let vimeoreel916 = "https://player.vimeo.com/progressive_redirect/playback/855130465/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2b33a882698be76d4147ea69b3e6b2b2396c653f808ae4c783f643ef14bc045f"
let vimeoreel169 = "https://player.vimeo.com/progressive_redirect/playback/855122929/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0cca314496957ac5e3fb2429eb6fe0b1ad92ac2abb4a2ab48a77ca108b0f7597"

class ImageAndText {
  constructor(imageUrl, name) {
    this.name = name;
    this.imageUrl = imageUrl;
  }
}


const victorimage1 = new ImageAndText(victorslide1,"Victor Smångs")
const victorimage2 = new ImageAndText(victorslide2,"Victor Smångs")
const victorimage3 = new ImageAndText(victorslide3,"Victor Smångs")
let victorSlide = [victorimage1,victorimage2,victorimage3];

  

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
            <StandingVideo video={crawl}/> 
            </div>
            <div className="carousell-wrapper">
            <StandingVideo video={victorVideo2}/> 
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
          <InteractiveImage/>
   <LayingVideoWithChoise video={imanDans}/>
   <LayingVideoWithChoise video={imandLeende}/>
   
   
  
    <SingleLayingVideo/>
 
   </section>
   )}
  
   
 
    <section id='aboutme'>
      <AboutMe/>
     

      
    </section>
    <section id='contact'>
     
      <SocialMedia/>
    </section>
    <section id='clients'>

    <Clients/>
     
     
    
    </section>
   
   
    </div>
  )
}

export default App
