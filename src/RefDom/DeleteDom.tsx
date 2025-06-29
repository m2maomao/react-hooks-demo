import { useState, useRef } from "react";

const App = () => {

  const [state, setState] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    setState(!state);
  }

  const removeChild = () => {
    ref.current?.remove();
  }

  return (
    <>
      <button onClick={handleClick}>通过setState切换</button>
      <button onClick={removeChild}>从DOM中删除</button>
      {state && <div ref={ref}>Hello world!</div>}
    </>
  )
}

export default App;