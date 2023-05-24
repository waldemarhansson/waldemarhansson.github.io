import ellineaVideo from "../assets/ELLINEA SHORT_03.mp4"
import { createClient } from 'contentful';
import { useEffect,useState } from "react";


const LayingVideoWithChoise = ({video}) => {

  







    return(

        <div className="laying-photogallery">

<video autoPlay loop muted playsInline src={video}></video>


        
      </div>
    )
}

export default LayingVideoWithChoise;