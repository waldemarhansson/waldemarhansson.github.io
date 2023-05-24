import showreel03 from '../assets/kentaro.mp4'


const StandingVideo = ({video}) =>{


  


    return(


        <div className='standing_video_wrapper'>
            <video loop muted autoPlay playsInline src={video}></video>
        </div>
    )
}

export default StandingVideo;