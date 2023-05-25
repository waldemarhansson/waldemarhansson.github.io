import ellineaVideo from "../assets/ELLINEA SHORT_03.mp4"
import { createClient } from 'contentful';
import { useEffect,useState } from "react";


const SingleLayingVideo = () => {

  const [vimeoVideo,setVimeoVideo] = useState('');

  const client = createClient({
    space: '7rhrqfmhk57q',
    environment: 'master', 
    accessToken: 'wW8KI7bfGHi8fqt42MIhrPUchY_c3Om3ZUqorMdaUiA'
  })
  useEffect(( ) => {
  client.getEntry('28D1StFNjU2CbqQhDK5VHR')
  .then((entry) =>{
    
    setVimeoVideo(entry.fields.vimeoUrl)

  } )
  .catch(console.error)
},[])







    return(

        <div className="laying-photogallery">

<video autoPlay loop muted playsInline src={vimeoVideo}></video>


        
      </div>
    )
}

export default SingleLayingVideo