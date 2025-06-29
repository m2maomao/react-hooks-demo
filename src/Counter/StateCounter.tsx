import { useState } from "react";

const StateCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>你点击了{count}次</button>
    </>
  )
}

export default StateCounter;