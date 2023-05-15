import video2 from "../assets/video2.mp4"


const LayingVideo = () =>{


    return(
        <div className="layingvideo">
            <video loop muted autoPlay playsInline  src={video2}></video>
            <video loop muted autoPlay playsInline  src={video2}></video>
            <video loop muted autoPlay playsInline  src={video2}></video>
        </div>
    )


}

export default LayingVideo;