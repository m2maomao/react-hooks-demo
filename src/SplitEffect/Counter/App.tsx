import { useState, useEffect, useRef, useCallback } from "react";

const Counter = () => {
  // 初始化计数
  const [count, setCount] = useState(0);
  // 初始化步长
  const [increment, setIncrement] = useState(1);
  // 保存步长的 ref
  const incrementRef = useRef(increment);

  // 更新ref的值
  useEffect(() => {
    incrementRef.current = increment;
  }, [increment]);

  // 使用 useCallback缓存稳定的回调函数
  const onTick = useCallback(() => {
    setCount(c => c + incrementRef.current); // 通过 ref 读取最新值
  }, []); // 依赖为空，函数不会重建

  // 初始化定时器（仅一次）
  useEffect(() => {
    const id = setInterval(onTick, 1000);
    return () => clearInterval(id);
  }, [onTick]); // 依赖onTick（实际是稳定的）

  return (
     <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button disabled={increment === 0} onClick={() => setIncrement(i => i - 1)}>–</button>
        <b>{increment}</b>
        <button onClick={() => setIncrement(i => i + 1)}>+</button>
      </p>
    </>
  )
}

export default Counter;