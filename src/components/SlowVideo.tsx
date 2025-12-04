'use client';

import { useEffect, useRef } from "react";

type SlowVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  speed?: number;
};

export function SlowVideo({ speed = 0.5, ...props }: SlowVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const applyRate = () => {
      video.playbackRate = speed;
    };

    applyRate();
    video.addEventListener("loadedmetadata", applyRate);

    return () => {
      video.removeEventListener("loadedmetadata", applyRate);
    };
  }, [speed]);

  return <video ref={videoRef} {...props} />;
}







