import { useRef } from "react";

const Count = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    alert(`你点击了 ` + countRef.current + ' 次！');
  }
  return (
    <>
      <div>countRef.current: {countRef.current}</div>
      <button onClick={handleClick}>点击</button>
    </>
  )
}

export default Count;