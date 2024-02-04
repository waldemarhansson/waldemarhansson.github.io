
const LayingVideoWithChoise = ({ video }) => {

    return (

        <div className="laying-photogallery">

            <video autoPlay loop muted playsInline src={video} ></video>

        </div>
    )
}

export default LayingVideoWithChoise;