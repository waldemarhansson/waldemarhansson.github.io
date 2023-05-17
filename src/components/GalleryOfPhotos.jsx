import { createClient } from "contentful"
import bild1 from "../assets/bild1.jpg"
import bild2 from "../assets/bild2.jpg"
import bild3 from "../assets/bild3.jpg"
import bild4 from "../assets/bild4.jpg"
import bild5 from "../assets/WALDEMARHANSSON_07.jpg"
import { useEffect, useState } from "react"
import firstVideo from "../assets/video3.mp4"
import ellineaVideo from "../assets/ELLINEA SHORT_03.mp4"


 
const GalleryOfPhotos = () => {
    const [images, setImages] = useState([]);

     





 


    return (
        <div className="galleryOfPhotos">
            <div id="grid-container">
           

          
          
            </div>
            <div className="projects">
           

               <video loop muted autoPlay playsInline  src={firstVideo}></video>
               <video loop muted autoPlay playsInline  src={firstVideo}></video>
               
              
               

               
            </div>
           
        </div>

    )
}

export default GalleryOfPhotos