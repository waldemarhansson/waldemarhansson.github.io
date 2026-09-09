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
import waldemarhansson39 from "../assets/Stills/recentStills/Y4A1426 1.JPG"
import waldemarhansson40 from "../assets/Stills/recentStills/Y4A1764.JPG"
import waldemarhansson42 from "../assets/Stills/recentStills/Y4A4972fixad mark_mer_upptill.JPG"
import waldemarhansson44 from "../assets/Stills/recentStills/Y4A5077_s.JPG"
import waldemarhansson45 from "../assets/Stills/recentStills/Y4A5705_NN_new_3_crop9_16_s.JPG"
import waldemarhansson46 from "../assets/Stills/recentStills/Y4A5897ihop_s.JPG"
import waldemarhansson47 from "../assets/Stills/recentStills/Y4A5946.JPG"
import waldemarhansson48 from "../assets/Stills/recentStills/Y4A5974_merihop_s3.JPG"
import waldemarhansson49 from "../assets/Stills/recentStills/victorbild2.JPG"
import shortwaldemarhansson50 from "../assets/Stills/recentStills/WALDEMARHANSSON_01_s.jpg"
import waldemarhansson51 from "../assets/Stills/recentStills/WALDEMARHANSSON_04.JPG"
import waldemarhansson52 from "../assets/Stills/recentStills/WALDEMARHANSSON_112.JPG"
import waldemarhansson53 from "../assets/Stills/recentStills/WALDEMARHANSSON_115.JPG"
import waldemarhansson54 from "../assets/Stills/recentStills/WALDEMARHANSSON_117.JPG"
import waldemarhansson55 from "../assets/Stills/recentStills/WALDEMARHANSSON_124.JPG"
import waldemarhansson56 from "../assets/Stills/recentStills/WALDEMARHANSSON_126.JPG"
import waldemarhansson57 from "../assets/Stills/recentStills/Y4A1480_4_s.jpg"
import waldemarhansson59 from "../assets/svt1.jpg"
import waldemarhansson60 from "../assets/Stills/recentStills/Y4A1088_ORG_10_kornilager_4_5_4_size_NCOL_s.jpg"
import waldemarhansson61 from "../assets/Stills/recentStills/STILL_FROM_FILM_01_2_s.jpg"
import waldemarhansson62 from "../assets/Stills/recentStills/Y4A2179_169_0rg_08_s.jpg"
import waldemarhansson63 from "../assets/Stills/recentStills/TALL_29178.jpg"
import waldemarhansson64 from "../assets/Stills/recentStills/REKT_KVADR_28839.jpg"
import waldemarhansson65 from "../assets/Stills/recentStills/ARK_PADDLES_24799 6.jpg"
import waldemarhansson66 from "../assets/Stills/recentStills/Y4A1620_916_new_s.jpg"


const imageDimensions = new Map([
  [waldemarhansson08, {"width":957,"height":1198}],
  [waldemarhansson09, {"width":1020,"height":1814}],
  [waldemarhansson11, {"width":2001,"height":3000}],
  [waldemarhansson13, {"width":2001,"height":3000}],
  [waldemarhansson14, {"width":1000,"height":1500}],
  [waldemarhansson15, {"width":1080,"height":1920}],
  [waldemarhansson16, {"width":1175,"height":1920}],
  [waldemarhansson18, {"width":1500,"height":2032}],
  [waldemarhansson19, {"width":1500,"height":2032}],
  [waldemarhansson20, {"width":1500,"height":2032}],
  [waldemarhansson24, {"width":2000,"height":1334}],
  [waldemarhansson25, {"width":1413,"height":2000}],
  [shortwaldemarhansson26, {"width":2500,"height":1621}],
  [shortwaldemarhansson27, {"width":2500,"height":1621}],
  [shortwaldemarhansson28, {"width":3358,"height":1888}],
  [shortwaldemarhansson29, {"width":1920,"height":1080}],
  [waldemarhansson30, {"width":2000,"height":1568}],
  [waldemarhansson31, {"width":1667,"height":2500}],
  [waldemarhansson32, {"width":1500,"height":1977}],
  [waldemarhansson33, {"width":1080,"height":1920}],
  [waldemarhansson34, {"width":1500,"height":1977}],
  [waldemarhansson36, {"width":1536,"height":1953}],
  [shortwaldemarhansson37, {"width":2407,"height":1470}],
  [shortwaldemarhansson38, {"width":1500,"height":916}],
  [waldemarhansson39, {"width":2000,"height":2999}],
  [waldemarhansson40, {"width":2000,"height":2999}],
  [waldemarhansson42, {"width":2000,"height":3246}],
  [waldemarhansson44, {"width":1467,"height":2200}],
  [waldemarhansson45, {"width":2250,"height":4000}],
  [waldemarhansson46, {"width":1000,"height":1463}],
  [waldemarhansson47, {"width":1500,"height":2249}],
  [waldemarhansson48, {"width":934,"height":1400}],
  [waldemarhansson49, {"width":1080,"height":1920}],
  [shortwaldemarhansson50, {"width":2500,"height":1611}],
  [waldemarhansson51, {"width":2160,"height":2700}],
  [waldemarhansson52, {"width":1080,"height":1920}],
  [waldemarhansson53, {"width":1080,"height":1920}],
  [waldemarhansson54, {"width":1080,"height":1920}],
  [waldemarhansson55, {"width":1080,"height":1920}],
  [waldemarhansson56, {"width":1080,"height":1920}],
  [waldemarhansson57, {"width":1422,"height":800}],
  [waldemarhansson59, {"width":1080,"height":1920}],
  [waldemarhansson60, {"width":954,"height":1200}],
  [waldemarhansson61, {"width":1422,"height":800}],
  [waldemarhansson62, {"width":1503,"height":800}],
  [waldemarhansson63, {"width":1681,"height":2580}],
  [waldemarhansson64, {"width":3000,"height":2001}],
  [waldemarhansson65, {"width":1999,"height":2992}],
  [waldemarhansson66, {"width":675,"height":1200}],
]);

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
                        loading={i < 3 ? "eager" : "lazy"}
                        decoding="async"
                        width={imageDimensions.get(image).width}
                        height={imageDimensions.get(image).height}
                        style={{
                            width: "100%", height: "auto", display: "block"
                        }}
                        alt=""></img>

                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}
export default StillsGallery