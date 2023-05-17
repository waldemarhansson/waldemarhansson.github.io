import ellineaVideo from "../assets/ELLINEA SHORT_03.mp4"



const SingleLayingVideo = () => {







    return(

        <div className="laying-photogallery">
        <video loop muted autoPlay playsInline src={ellineaVideo}></video>
      </div>
    )
}

export default SingleLayingVideo