import React from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { useRef } from 'react';

function VideoPlayer({ videoUrl, text }) {
    const [showOverlay, setShowOverlay] = useState(true);
    const [showControls, setShowControls] = useState(false);
    const [play, setPlaying] = useState(false)


    const onPause = () => {
        setShowControls(false)
    }

    const handlePlayerClick = () => {
        setShowControls(true); // Enable controls on click


    };

    return (
        <div className="video-overlay" >


            <ReactPlayer
                onClick={handlePlayerClick}
                url={videoUrl}
                width="100%"
                height="100%"
                onPause={onPause}
                controls={showControls}


            />
        </div>
    );
}

export default VideoPlayer;