import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  }
  return (
    <>
      <div>Hello!{count}</div>
      <button onClick={handleClick}>+1</button>
    </>
  )
}

export default App;