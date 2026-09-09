import BackgroundVideo from './BackgroundVideo';
import showreel03 from '../assets/kentaro.mp4'


const StandingVideo = ({video}) =>{


  


    return(


        <div className='standing_video_wrapper' style={{ aspectRatio: '1 / 1' }}>
            <BackgroundVideo loop muted  playsInline src={video}></BackgroundVideo>
        </div>
    )
}

export default StandingVideo;
