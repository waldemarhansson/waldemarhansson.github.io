import { useEffect, useRef } from 'react';

// Keep decorative videos paused outside the viewport or in a hidden tab.
export default function BackgroundVideo({ src, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    let visible = false;
    const update = () => {
      if (visible && !document.hidden && src) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(video);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
      video.pause();
    };
  }, [src]);

  return <video {...props} ref={ref} src={src || undefined} muted loop playsInline />;
}
