import { useRef } from "react";

const RefCounter = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  return (
    <>
      <button onClick={handleClick}>你点击了{countRef.current}次</button>
    </>
  )
}

export default RefCounter;