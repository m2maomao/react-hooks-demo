import { useEffect, useRef, useState } from "react";
import './styles.css';

interface VideoPlayerProp {
  src: string;
  isPlaying: boolean;
}

const VideoPlayer = ({src, isPlaying}: VideoPlayerProp) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if(!ref.current) return;
    
    try {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    } catch (e) {
      console.error('Video operation failed:', e);
    }
  }, [isPlaying]);

  return (
    <video ref={ref} src={src} loop playsInline />
  )
}

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="box">
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  )
}

export default App;