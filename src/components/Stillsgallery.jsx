import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import waldemarhansson08 from "../assets/Stills/ELLECOVERWALDEMAR2_wnzvqk.jpeg"
import waldemarhansson09 from "../assets/Stills/GOTLAND_02_gccijl.jpeg"
import waldemarhansson11 from "../assets/Stills/KBS_BLKWEEK_27984_irofrz.jpeg"
import waldemarhansson13 from "../assets/Stills/KBS_HELLO_SPRING_ORG2494_s4hzu7.jpeg"
import waldemarhansson14 from "../assets/Stills/KBS_HELLO_SPRINGss_wtgh6y.jpeg"
import waldemarhansson15 from "../assets/Stills/KBS_SS22_22623_04_ob7o7v.jpeg"
import waldemarhansson16 from "../assets/Stills/MEMIRA_ARMAND_DUPLANTIS083_S_2_d4fqzq.jpeg"
import waldemarhansson18 from "../assets/Stills/WALDEMARHANSSON_02_ztixgl-2.jpeg"
import waldemarhansson19 from "../assets/Stills/WALDEMARHANSSON_03_fxvbgz.jpeg"
import waldemarhansson20 from "../assets/Stills/WALDEMARHANSSON_07_pkyeve.jpeg"
import waldemarhansson24 from "../assets/Stills/waldemarhansson_20.jpg"
import waldemarhansson25 from "../assets/Stills/waldemarhansson_31.jpg"
import shortwaldemarhansson26 from "../assets/WaldemarHansson_08__2023_IHOP_s.jpg"
import shortwaldemarhansson27 from "../assets/WaldemarHansson_01_2023_s.jpg"
import shortwaldemarhansson28 from "../assets/omslagjpg2korn.jpg"
import shortwaldemarhansson29 from "../assets/omslagjpg3korn.jpg"
import waldemarhansson30 from "../assets/nyuppdaterad.jpg"
import waldemarhansson31 from "../assets/waldemarhansson_2023_sky.jpg"
import waldemarhansson32 from "../components/WALDEMARHANSSON_0333.jpg"
import waldemarhansson33 from "../assets/GWaldemarHansson_07_spread_kmxk2q.jpeg"
import waldemarhansson34 from "../assets/WALDEMARHANSSON_0344.jpg"
import waldemarhansson36 from "../assets/WaldemarHansson__2023.jpg"
import shortwaldemarhansson37 from "../assets/KENTARO_FILMSTR.jpg"
import shortwaldemarhansson38 from "../assets/KENTARO_waldemarHansson_01.jpg"
import waldemarhansson39 from "../assets/Stills/recentStills/Y4A1426 1.jpg"
import waldemarhansson40 from "../assets/Stills/recentStills/Y4A1764.jpg"
import waldemarhansson42 from "../assets/Stills/recentStills/Y4A4972fixad mark_mer_upptill.jpg"
import waldemarhansson44 from "../assets/Stills/recentStills/Y4A5077_s.jpg"
import waldemarhansson45 from "../assets/Stills/recentStills/Y4A5705_NN_new_3_crop9_16_s.jpg"
import waldemarhansson46 from "../assets/Stills/recentStills/Y4A5897ihop_s.jpg"
import waldemarhansson47 from "../assets/Stills/recentStills/Y4A5946.jpg"
import waldemarhansson48 from "../assets/Stills/recentStills/Y4A5974_merihop_s3.jpg"
import waldemarhansson49 from "../assets/Stills/recentStills/victorbild2.jpg"
import shortwaldemarhansson50 from "../assets/Stills/recentStills/WALDEMARHANSSON_01_s.jpg"
import waldemarhansson51 from "../assets/Stills/recentStills/WALDEMARHANSSON_04.jpg"
import waldemarhansson52 from "../assets/Stills/recentStills/WALDEMARHANSSON_112.jpg"
import waldemarhansson53 from "../assets/Stills/recentStills/WALDEMARHANSSON_115.jpg"
import waldemarhansson54 from "../assets/Stills/recentStills/WALDEMARHANSSON_117.jpg"
import waldemarhansson55 from "../assets/Stills/recentStills/WALDEMARHANSSON_124.jpg"
import waldemarhansson56 from "../assets/Stills/recentStills/WALDEMARHANSSON_126.jpg"
import waldemarhansson57 from "../assets/Stills/recentStills/Y4A1480_4_s.jpg"
import waldemarhansson59 from "../assets/svt1.jpg"
import waldemarhansson60 from "../assets/Stills/recentStills/Y4A1088_ORG_10_kornilager_4_5_4_size_NCOL_s.jpg"
import waldemarhansson61 from "../assets/Stills/recentStills/STILL_FROM_FILM_01_2_s.jpg"
import waldemarhansson62 from "../assets/Stills/recentStills/Y4A2179_169_0rg_08_s.jpg"
import waldemarhansson63 from "../assets/Stills/recentStills/TALL_29178.jpg"
import waldemarhansson64 from "../assets/Stills/recentStills/REKT_KVADR_28839.jpg"
import waldemarhansson65 from "../assets/Stills/recentStills/ARK_PADDLES_24799 6.jpg"
import waldemarhansson66 from "../assets/Stills/recentStills/Y4A1620_916_new_s.jpg"


const StillsGallery = () => {

    const images = [
        waldemarhansson57,
        waldemarhansson30,
        waldemarhansson59,
        waldemarhansson09,
        waldemarhansson64,
        waldemarhansson18,
        waldemarhansson48,
        waldemarhansson65,
        shortwaldemarhansson29,
        waldemarhansson60,
        waldemarhansson49,
        waldemarhansson62,
        waldemarhansson61,
        waldemarhansson31,
        shortwaldemarhansson28,
        shortwaldemarhansson38,



        shortwaldemarhansson26,
        waldemarhansson42,
        waldemarhansson56,
        waldemarhansson63,
        waldemarhansson34,
        waldemarhansson55,
        waldemarhansson54,
        waldemarhansson13,
        waldemarhansson40,
        waldemarhansson14,
        waldemarhansson36,
        waldemarhansson53,
        waldemarhansson47,
        shortwaldemarhansson50,
        waldemarhansson20,

        waldemarhansson11,
        waldemarhansson44,
        waldemarhansson51,
        waldemarhansson19,
        waldemarhansson25,
        waldemarhansson15,
        waldemarhansson52,
        waldemarhansson45,
        waldemarhansson46,
        waldemarhansson24,
        waldemarhansson16,
        waldemarhansson33,
        waldemarhansson32,
        waldemarhansson39,




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