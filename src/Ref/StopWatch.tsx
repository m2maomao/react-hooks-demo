import { useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);

  const handleStart = () => {
    // 开始计时
    setStartTime(Date.now());
    setNow(Date.now());
    setInterval(() => {
      // 每10ms更新一次当前时间
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <>
      <h1>时间过去了：{secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>开始</button>
    </>
  )
}

export default StopWatch;