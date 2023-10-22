import React from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { useRef } from 'react';

function VideoPlayer({ videoUrl, text }) {
    const [showOverlay, setShowOverlay] = useState(true);
    const [showControls, setShowControls] = useState(false);


    const onPause = () => {
        setShowOverlay(true)
        setShowControls(false)
    }

    const handlePlayerClick = () => {

        if (showOverlay) {
            setShowOverlay(false);
            setShowControls(true); // Enable controls on click

        }
    };

    return (
        <div className="video-overlay" >

            <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                controls={true}

            />
        </div>
    );
}

export default VideoPlayer;