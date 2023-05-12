const StandingVideo = ({video}) =>{


    const videoObject = Object.values(video);


    return(


        <div>
            <video src={videoObject}></video>
        </div>
    )
}

export default StandingVideo;