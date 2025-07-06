import Child from "./Child";
import { useRef } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    ref.current?.focus();
  }
  return (
    <>
      <Child ref={ref} />
      <button onClick={handleClick}></button>
    </>
  )
}

export default App;