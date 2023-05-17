import { useEffect, useState } from "react"




import showreel01 from "../assets/showreel01.mp4"



const FirstVideo = ()=>{
 
const videoUrl = "https://vimeo.com/827551777"

 



    return(
        <div className="firstVideo" >
          <p>Waldemar Hansson <br/>
            dop   - photographer
          </p>
          <video loop muted autoPlay playsInline >
        <source src={showreel01} type="video/mp4" />
      </video>
     
        </div>

    )
}
export default FirstVideo