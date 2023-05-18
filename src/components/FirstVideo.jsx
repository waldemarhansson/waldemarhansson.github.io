import { useEffect, useState } from "react"
import { createClient } from 'contentful';




const FirstVideo = ()=>{
 
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

} )
.catch(console.error)
},[])




    return(
        <div className="firstVideo" >
          <p>VISUAL STORYTELLING <br/>
          AND CONTENT CREATION
          
            
          </p>
          <video loop muted autoPlay playsInline  src={vimeoVideo}  />
      
     
        </div>

    )
}
export default FirstVideo