import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigtionBar from './components/NavigationBar.jsx'
import FirstVideo from './components/FirstVideo'
import GalleryOfPhotos from './components/GalleryOfPhotos'
import { createClient } from 'contentful';
import { useEffect } from 'react'
import Carousell from './components/Carousell'
import image1 from './assets/victor1.jpg'
import image2 from './assets/victor2.jpg'
import image3 from './assets/victor3.jpg'

import LayingVideo from './components/LayingVideo'
import AboutMe from './components/AboutMe'
import Clients from './components/Clients'
import SocialMedia from './components/SocialMedia'
import LayingPictures from './components/LayingPictures'
import showreel03 from './assets/kentaro.mp4'



function App() {
  const [content, setContent] = useState([]);
  //CONTENTFUL:
  //Content Delivery API - access token
  const apiKey = "UNyJC-G5KSP8anT255TdcV1Pbru9fvP2u-k8dD5-lko";
  //content preview API:
  const previewApiKey = "t32RTfb1MFZRXPo2QScxaFd1g7h7kO_-O9emLyQZtNs";
  //spaceid:
  const spaceID = "7rhrqfmhk57q";

 const images =[ image1,image2,image3]

 const video ={showreel03 }
 

 
  






  return (
    <div className="App">
     
   
    <NavigtionBar/>
      <FirstVideo/>
     
   
 
    <section id="section1"><Carousell images={images}/> </section>
    <section id="section3"><LayingPictures/>
    <LayingVideo/>
  

   <GalleryOfPhotos/></section>
   
  
    <section id='aboutme'>
      <AboutMe/>
    </section>
    <section id='clients'>

    <Clients/>
     
     
     <SocialMedia/>
    </section>
   
    </div>
  )
}

export default App
