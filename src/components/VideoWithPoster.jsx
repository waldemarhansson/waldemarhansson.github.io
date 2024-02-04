import React, { useState } from 'react';

const VideoWithPoster = ({ poster, videoSrc }) => {
    const [isPlaying, setPlaying] = useState(false);

    const handlePlayClick = () => {
        setPlaying(!isPlaying);
    };

    return (
        <div className='video-with-poster'>

            <video onClick={handlePlayClick} onPause={() => setPlaying(false)}
                controls={isPlaying} poster={poster} src={videoSrc}></video>

        </div>
    );
};

export default VideoWithPoster;