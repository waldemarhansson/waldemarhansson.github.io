import showreel03 from '../assets/kentaro.mp4'


const StandingVideo = () =>{


  


    return(


        <div className='standing_video_wrapper'>
            <video loop muted autoPlay playsInline src={showreel03}></video>
        </div>
    )
}

export default StandingVideo;