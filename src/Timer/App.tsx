import { useRef, useState } from "react";

const App = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);

  const handleStart = () => {
    setStartTime(Date.now());
    setCurrentTime(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime !== null && currentTime !== null) {
    secondsPassed = (currentTime - startTime) / 1000;
  }

  return (
    <>
      <h3>时间过去了: {secondsPassed.toFixed(3)}秒</h3>
      <button onClick={handleStart}>开始</button>
      <button onClick={handleStop}>停止</button>
    </>
  );
};

export default App;
