import BackgroundVideo from './BackgroundVideo';

const LayingVideoWithChoise = ({ video, aspectRatio = '16 / 9' }) => {

    return (

        <div className="laying-photogallery" style={{ aspectRatio }}>

            <BackgroundVideo  loop muted playsInline src={video} ></BackgroundVideo>

        </div>
    )
}

export default LayingVideoWithChoise;
