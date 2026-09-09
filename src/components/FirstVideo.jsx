import BackgroundVideo from './BackgroundVideo';
import desktopLogo from '../assets/welove.png';
import mobileLogo from '../assets/weloveMobile.png';
import mobilePoster from '../assets/optimized/1ad02ea14ef0-1080.jpg';
import desktopPoster from '../assets/optimized/01eb1fda3d07-1600.jpg';

const FirstVideo = ({ videoSource, isDesktop }) => (
  <div className="firstVideo">
    <BackgroundVideo
      key={videoSource}
      poster={isDesktop ? desktopPoster : mobilePoster}
      className="video-element"
      width={isDesktop ? 1920 : 1080}
      height={isDesktop ? 1080 : 1920}
      preload="metadata"
      loop muted  playsInline
      src={videoSource}
    />
    <img className="weLove-logo"
      src={isDesktop ? desktopLogo : mobileLogo}
      alt="We love visual storytelling"
    />
  </div>
);

export default FirstVideo;
