import { createClient } from "contentful"
import bild1 from "../assets/bild1.jpg"
import bild2 from "../assets/bild2.jpg"
import bild3 from "../assets/bild3.jpg"
import bild4 from "../assets/bild4.jpg"
import { useEffect, useState } from "react"

 
const GalleryOfPhotos = () => {
const [photos,setPhotos] = useState([]);

     


const client = createClient({
  space: '7rhrqfmhk57q',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'wW8KI7bfGHi8fqt42MIhrPUchY_c3Om3ZUqorMdaUiA'
})

client.getEntries({'content_type' :'frontphotogallery'})
.then((entry =>  {console.log("photos"+entry)}))
.catch(console.error)



    return (
        <div className="galleryOfPhotos">
            <div id="grid-container">
                <img src={bild1} alt="" />
                <img src={bild2} alt="" />
                <img src={bild3} alt="" />
                <img src={bild4} alt="" />

            </div>
            <div className="projects">
                <p>memira</p>
                <img src={bild1} alt="" />

                <img src={bild2} alt="" />

                <img src={bild3} alt="" />

                <img src={bild4} alt="" />
            </div>

        </div>

    )
}

export default GalleryOfPhotos