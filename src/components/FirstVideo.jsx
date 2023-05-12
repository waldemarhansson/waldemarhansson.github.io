import firstVideo from "../assets/video3.mp4"

import victorreel from "../assets/victorreel.mp4"



const FirstVideo = ()=>{


//  <p>Waldemar Hansson </p>


    return(
        <div className="firstVideo">
          
<video loop muted autoPlay playsInline  src={victorreel}></video>
        </div>

    )
}
export default FirstVideo