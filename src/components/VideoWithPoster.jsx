import React, { useState } from 'react';

const VideoWithPoster = ({ poster, videoSrc }) => {
    const [isPlaying, setPlaying] = useState(false);

    const handlePlayClick = () => {
        setPlaying(!isPlaying);
    };

    return (
        <div className='video-with-poster'>
            {isPlaying ? (
                <video autoPlay={isPlaying}
                    controls={isPlaying} poster={poster} src={videoSrc}></video>
            ) : (
                <div>
                    <img
                        src={poster}
                        alt="Video Poster"
                        onClick={handlePlayClick}
                        style={{ cursor: 'pointer', width: "100%" }}
                    />

                </div>
            )}
        </div>
    );
};

export default VideoWithPoster;