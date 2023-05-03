import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigtionBar from './components/NavigationBar.jsx'
import FirstVideo from './components/FirstVideo'
import GalleryOfPhotos from './components/GalleryOfPhotos'
import { createClient } from 'contentful';
import { useEffect } from 'react'


function App() {
  const [content, setContent] = useState([]);
  //CONTENTFUL:
  //Content Delivery API - access token
  const apiKey = "UNyJC-G5KSP8anT255TdcV1Pbru9fvP2u-k8dD5-lko";
  //content preview API:
  const previewApiKey = "t32RTfb1MFZRXPo2QScxaFd1g7h7kO_-O9emLyQZtNs";
  //spaceid:
  const spaceID = "7rhrqfmhk57q";

 

 
  

 
  /*useEffect(() => {
    const client = createClient({
      space: '7rhrqfmhk57q',
      environment: 'master',
      accessToken: 'wW8KI7bfGHi8fqt42MIhrPUchY_c3Om3ZUqorMdaUiA'
    });

    async function fetchData() {
      const response = await client.getEntries();
      setContent(response.items);
      console.log(response.items);
    }

    fetchData();
  }, []);*/
/* {content.map((item) => (
        <div key={item.sys.id}>
         
          <p>{item.fields.description}</p>
          <img src={item.fields.bigPicture.fields.file.url}></img>

        </div>
      ))}*/

  





  return (
    <div className="App">
     <NavigtionBar/>
    
     <FirstVideo/>
     <GalleryOfPhotos/>
    <section id="section1"><GalleryOfPhotos/> </section>
    <section id="section2">ABOUT ME</section>
     
     
 
    </div>
  )
}

export default App
