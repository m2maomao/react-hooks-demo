/**
 * data => state
 * 
 * React => view library
 * 
 * view => update => 视图上的具体状态
 * 
 * state <=> view
 * 
 * 视图上某一个状态发生了变化，所以视图要进行相应的更新
 * 
 * useState() => state setState
 * 创建一个状态与设置状态的方法
 * 
 * react => 运行时
 * vue => 编译时的行为
 */ 

import { useState } from "react";

const App  = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  // const handleClick = () => {
  //   setCount((count) => count + 1);
  // }
  // 函数是一等公民
  return (
    <>
      <div>Hello, React!{count}</div>
      <button onClick={handleClick}>+</button>
    </>
  )
}

export default App;