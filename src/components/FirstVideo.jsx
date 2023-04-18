import firstVideo from "../assets/video3.mp4"

const FirstVideo = ()=>{





    return(
        <div className="firstVideo">
            <p>Waldemar Hansson </p>
<video loop={true} muted={true} autoplay={true} playsinline={true}  src={firstVideo}></video>
        </div>

    )
}
export default FirstVideo