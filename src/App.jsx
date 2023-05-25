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
import standingMan from './assets/video3.mp4'






function App() {
  const [photoslider, setPhotoslider] = useState([]);
const [isDesktop, setIsDesktop] = useState(false)
const client = createClient({
  space: '7rhrqfmhk57q',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'wW8KI7bfGHi8fqt42MIhrPUchY_c3Om3ZUqorMdaUiA'
})

useEffect(() => {
  client.getEntry('70AvnVwxbm0JIfiElckpVH')
    .then((entry) => {
      const images = entry.fields.photoSliderfirstpage.map(image => image.fields.file.url);
      setPhotoslider(images);
    })
    .catch(console.error)
}, []);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  window.addEventListener("resize", handleResize);
  handleResize(); // Set the initial state

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
  






  return (
    <div className="App">

     
     <section id='section0'>
   
    <NavigtionBar/>
      <FirstVideo/>
     
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
          <Carousell images={photoslider} />
        )}
      </section>
   

      {isDesktop ? ( <section id="section3">
        <SingleLayingVideo/>
        <LayingVideoWithChoise video={liggandevideo}/>
        <LayingVideoWithChoise video={imanDans}/>
        </section>
      ) :(
        <section id="section3">
          <LayingVideoWithChoise video={liggandevideo}/>
   <LayingVideoWithChoise video={imanDans}/>
   <LayingVideoWithChoise video={imandLeende}/>
   
    <StandingVideo video={kentaro}/>
  
    <SingleLayingVideo/>
  <StandingVideo video={standingMan}/>
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
