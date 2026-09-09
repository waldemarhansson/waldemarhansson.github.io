import { useRef, useState } from 'react';

const VideoWithPoster = ({ poster, videoSrc, videoText, text2 }) => {
    const videoRef = useRef(null);
    const [started, setStarted] = useState(false);
    const start = () => {
        const video = videoRef.current;
        video.src = videoSrc;
        video.controls = true;
        setStarted(true);
        video.play().catch(() => {
            // Native controls remain available if playback needs another tap.
        });
    };
    return (
        <div className="video-with-poster">
            <video ref={videoRef} preload="none" playsInline
                controls={started} poster={poster} />
            {!started && <>
                <div className="text-overlay"><p>{videoText}<br />{text2}</p></div>
                <button className="film-play" type="button" onClick={start}
                    aria-label={'Play ' + videoText}>
                    <span aria-hidden="true">▶</span>
                </button>
            </>}
        </div>
    );
};

export default VideoWithPoster;
