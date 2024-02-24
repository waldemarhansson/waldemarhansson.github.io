import React, { useState } from 'react';

const VideoWithPoster = ({ poster, videoSrc, videoText, text2 }) => {
    const [isPlaying, setPlaying] = useState(false);
    const [showTextOverlay, setShowTextOverlay] = useState(true);

    const handlePlayClick = () => {
        setPlaying(!isPlaying);
    };

    return (
        <div className='video-with-poster'>

            <video onClick={handlePlayClick} onPause={() => setPlaying(false)}
                controls={isPlaying} poster={poster} src={videoSrc}></video>
            {!isPlaying ? (
                <div className="text-overlay"><p>{videoText}<br /> {text2}</p></div>

            ) : <div></div>}
        </div>
    );
};

export default VideoWithPoster;