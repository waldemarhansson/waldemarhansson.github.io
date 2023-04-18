import bild1 from "../assets/bild1.jpg"
import bild2 from "../assets/bild2.jpg"
import bild3 from "../assets/bild3.jpg"
import bild4 from "../assets/bild4.jpg"

const GalleryOfPhotos =()=>{

    return(
<div className="galleryOfPhotos">
<div id="grid-container">
    <img src={bild1} alt="" />
    <img src={bild2} alt="" />
    <img src={bild3} alt="" />
    <img src={bild4} alt="" />
    <img src={bild1} alt="" />

</div>

</div>

    )
}

export default GalleryOfPhotos