import Iman from "../assets/IMAN NEW WALD_01.mp4"
import React from "react"
import VideoPlayer from "./VideoPlayer"


const VideoGallery = () => {






    return (

        <div className="videogallery-wrapper">

            <VideoPlayer videoUrl={"https://player.vimeo.com/progressive_redirect/playback/876839330/rendition/1080p/file.mp4?loc=external&log_user=0&signature=9530692ac98c88194bc396d4b4034b0b717a290a54ac5dbf0901b449dc9a4ceb"}></VideoPlayer>
            <VideoPlayer videoUrl={"https://player.vimeo.com/progressive_redirect/playback/855122929/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0cca314496957ac5e3fb2429eb6fe0b1ad92ac2abb4a2ab48a77ca108b0f7597"}></VideoPlayer>
            <VideoPlayer videoUrl={"https://player.vimeo.com/progressive_redirect/playback/737185087/rendition/1080p/file.mp4?loc=external&log_user=0&signature=ebeda3593841b3ec906aa18464f0cbf618d54f36638bf92189fefecfd247ab2c"}></VideoPlayer>
            <VideoPlayer videoUrl={"https://player.vimeo.com/progressive_redirect/playback/818372812/rendition/1080p/file.mp4?loc=external&log_user=0&signature=95457a1e29f052999671dca36cd66e5ec4f02b9eecc2eae21a23287e4451b9f2"}></VideoPlayer>
        </div>

    )





}
export default VideoGallery