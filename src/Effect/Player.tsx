import { useState, useRef, useEffect } from "react";
import './style.scss';

interface VideoPlayerProp {
  isPlaying: boolean;
  src: string;
}

const VideoPlayer = ({isPlaying, src}: VideoPlayerProp) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  });

  return (
    <video ref={ref} src={src} loop playsInline />
  )
}

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  )
}

export default Player;