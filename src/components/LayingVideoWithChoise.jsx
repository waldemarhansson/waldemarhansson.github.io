
const LayingVideoWithChoise = ({ video }) => {

    return (

        <div className="laying-photogallery">

            <video autoPlay loop muted playsInline src={video} controls={true}></video>

        </div>
    )
}

export default LayingVideoWithChoise;