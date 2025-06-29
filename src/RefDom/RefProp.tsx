import { useRef, forwardRef } from "react";

const MyInput = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <input type="text" ref={ref} />
  )
})

const App = () => {
  const iptRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    iptRef.current?.focus();
  }
  return (
    <>
      <MyInput ref={iptRef} />
      <button onClick={handleClick}>聚焦输入框</button>
    </>
  )
}

export default App;