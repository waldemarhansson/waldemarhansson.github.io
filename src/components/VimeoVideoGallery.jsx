import VimeoPlayer from "react-player/vimeo"

const VimeoVideoGallery = ({ videoUrl }) => {


    return (
        <div>

            <VimeoPlayer className="videogallery-wrapper"
                url={videoUrl}
                controls={true}
                width="100%"
                height="100%"
                config={{
                    vimeo: {
                        playerOptions: {
                            title: true,


                        },
                    },
                    badge: false,
                }}>

            </VimeoPlayer>

        </div>


    )
}
export default VimeoVideoGallery