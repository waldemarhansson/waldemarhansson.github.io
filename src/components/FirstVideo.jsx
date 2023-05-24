import { useEffect, useState } from "react"
import { createClient } from 'contentful';
import desktopVideo from "../assets/desktopshowreel.mp4"




const FirstVideo = ()=>{
  const [videoSource, setVideoSource] = useState("");
const [vimeoVideo,setVimeoVideo] = useState('')
 

const client = createClient({
  space: '7rhrqfmhk57q',
  environment: 'master', 
  accessToken: 'wW8KI7bfGHi8fqt42MIhrPUchY_c3Om3ZUqorMdaUiA'
})
useEffect(( ) => {
client.getEntry('1O7F1H3DMcLLAHLCjFVL4R')
.then((entry) =>{
  console.log(entry.fields.vimeoUrl)
  setVimeoVideo(entry.fields.vimeoUrl)
  setVideoSource(entry.fields.vimeoUrl)

} )
.catch(console.error)
},[])




useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setVideoSource(desktopVideo);
    } else {
      setVideoSource(vimeoVideo);
    }
  };

  handleResize(); // Initial video source based on current screen size
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [vimeoVideo]);




    return(
        <div className="firstVideo" >
          <p>VISUAL <br/> STORYTELLING <br/>
          AND CONTENT CREATION
          
            
          </p>
          <video loop muted autoPlay playsInline  src={videoSource}  />
      
     
        </div>

    )
}
export default FirstVideo