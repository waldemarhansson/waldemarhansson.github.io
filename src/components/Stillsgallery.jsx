import bild8 from "../assets/bild8.jpg"
import bild4 from "../assets/bild4.jpg"
import React from "react"

import waldemarhansson01 from "../assets/Stills/WaldemarHansson_11_yuuieb.jpeg"
import waldemarhansson08 from "../assets/Stills/ELLECOVERWALDEMAR2_wnzvqk.jpeg"
import waldemarhansson09 from "../assets/Stills/GOTLAND_02_gccijl.jpeg"
import waldemarhansson10 from "../assets/Stills/KBS_BLKWEEK_27090_s_yvdssq.jpeg"
import waldemarhansson11 from "../assets/Stills/KBS_BLKWEEK_27984_irofrz.jpeg"
import waldemarhansson12 from "../assets/Stills/KBS_HELLO_SPRING_ORG1665_S_rvdgjw.jpeg"
import waldemarhansson13 from "../assets/Stills/KBS_HELLO_SPRING_ORG2494_s4hzu7.jpeg"
import waldemarhansson14 from "../assets/Stills/KBS_HELLO_SPRINGss_wtgh6y.jpeg"
import waldemarhansson15 from "../assets/Stills/KBS_SS22_22623_04_ob7o7v.jpeg"
import waldemarhansson16 from "../assets/Stills/MEMIRA_ARMAND_DUPLANTIS083_S_2_d4fqzq.jpeg"
import waldemarhansson17 from "../assets/Stills/Rickard.jpeg"
import waldemarhansson18 from "../assets/Stills/WALDEMARHANSSON_02_ztixgl-2.jpeg"
import waldemarhansson19 from "../assets/Stills/WALDEMARHANSSON_03_fxvbgz.jpeg"
import waldemarhansson20 from "../assets/Stills/WALDEMARHANSSON_07_pkyeve.jpeg"
import waldemarhansson21 from "../assets/Stills/WaldemarHansson_08_xwhkqg.jpeg"
import waldemarhansson22 from "../assets/Stills/Waldemarhansson_142_q0dcbm.jpeg"
import waldemarhansson23 from "../assets/Stills/WaldemarHansson05_fjnsbi_gcjyjz.jpeg"
import waldemarhansson24 from "../assets/Stills/waldemarhansson_20.jpg"
import waldemarhansson25 from "../assets/Stills/waldemarhansson_31.jpg"
import waldemarhansson26 from "../assets/WaldemarHansson_08__2023_IHOP_s.jpg"
import waldemarhansson27 from "../assets/WaldemarHansson_01_2023_s.jpg"
import waldemarhansson28 from "../assets/omslagjpg2korn.jpg"
import waldemarhansson29 from "../assets/omslagjpg3korn.jpg"
import waldemarhansson30 from "../assets/nyuppdaterad.jpg"
import waldemarhansson31 from "../assets/waldemarhansson_2023_sky.jpg"
import waldemarhansson32 from "../components/WALDEMARHANSSON_0333.jpg"
import waldemarhansson33 from "../assets/GWaldemarHansson_07_spread_kmxk2q.jpeg"
import waldemarhansson34 from "../assets/WALDEMARHANSSON_0344.jpg"
import waldemarhansson35 from "../assets/WaldemarHansson_08_xwhkqg.jpeg"
import waldemarhansson36 from "../assets/WaldemarHansson__2023.jpg"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import waldemarhansson37 from "../assets/KENTARO_FILMSTR.jpg"
import waldemarhansson38 from "../assets/KENTARO_waldemarHansson_01.jpg"
import waldemarhansson39 from "../assets/WALDEMARHANSSON_01_w_ceckdd.jpeg"



const StillsGallery = () => {

    const images = [
        waldemarhansson30,
        waldemarhansson08,
        waldemarhansson29,
        waldemarhansson09,
        waldemarhansson26,
        waldemarhansson10,
        waldemarhansson27,

        waldemarhansson15,
        waldemarhansson31,
        waldemarhansson12,
        waldemarhansson18,
        waldemarhansson34,
        waldemarhansson13,

        waldemarhansson14,

        waldemarhansson36,
        waldemarhansson38,
        waldemarhansson11,
        waldemarhansson19,
        waldemarhansson25,
        waldemarhansson37,

        waldemarhansson28,
        waldemarhansson24,
        waldemarhansson16,
        waldemarhansson32,
        waldemarhansson33,
        waldemarhansson17,


        waldemarhansson20

    ]



    return (


        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>

            <Masonry>

                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{
                            width: "100%", display: "block"
                        }}
                        alt=""></img>

                ))}
            </Masonry>
        </ResponsiveMasonry>









    )
}
export default StillsGallery