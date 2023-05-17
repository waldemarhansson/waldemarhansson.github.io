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






function App() {
  const [photoslider, setPhotoslider] = useState([]);




 


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

 
  






  return (
    <div className="App">

     
     <section id='section0'>
   
    <NavigtionBar/>
      <FirstVideo/>
     
      </section>
 
    <section id="section1">
      <Carousell images={photoslider}/> 
      </section>
    <section id="section3">
    <LayingVideo/>
    <StandingVideo/>
  

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
