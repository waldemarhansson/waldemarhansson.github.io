import video2 from "../assets/video2.mp4"
import { useNavigate } from 'react-router-dom';


const LayingVideo = () =>{

    let navigate = useNavigate()

const handleVideoClick = ()=>{
navigate('/slideshowprojects')

}


    return(
        <div className="layingvideo" onClick={handleVideoClick}>
            <video loop muted autoPlay playsInline  src={video2}></video>
            <video loop muted autoPlay playsInline  src={video2}></video>
            <video loop muted autoPlay playsInline  src={video2}></video>
        </div>
    )


}

export default LayingVideo;