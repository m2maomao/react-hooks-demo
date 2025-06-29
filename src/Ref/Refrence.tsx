import { useRef } from "react";

const Counter = () => {
  const ref = useRef(0);
  const handleClick = () => {
    ref.current++;
    alert('你点击了' + ref.current + ' 次！');
  }

  return (
    <>
      <span>{ ref.current }</span>
      <button onClick={handleClick}>点击我</button>    
    </>
  )
}

export default Counter;