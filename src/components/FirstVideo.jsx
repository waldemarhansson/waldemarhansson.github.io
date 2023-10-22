import { useEffect, useState } from "react"
import placeholderImage from "../assets/Stills/KBS_HELLO_SPRINGss_wtgh6y.jpeg"



const FirstVideo = ({ videoSource }) => {





  return (
    <div className="firstVideo" >
      <p> WE 🤍 VISUAL STORYTELLING
      </p>

      <video className="video-element" loop muted autoPlay playsInline src={videoSource} />



    </div>

  )
}
export default FirstVideo