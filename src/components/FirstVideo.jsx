import firstVideo from "../assets/video3.mp4"

import victorreel from "../assets/victorreel.mp4"
import showreel01 from "../assets/showreel01.mp4"



const FirstVideo = ()=>{


//  <p>Waldemar Hansson </p>


    return(
        <div className="firstVideo">
          <p>Waldemar Hansson <br/>
            dop   - photographer
          </p>
<video loop muted autoPlay playsInline  src={showreel01}></video>
        </div>

    )
}
export default FirstVideo