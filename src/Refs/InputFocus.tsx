import { useRef } from "react";

const InputFocus = () => {
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = (): void => {
    if (ref.current) {
      ref.current.focus();
    }
  }
  return (
    <>
      <input type="text" ref={ref} /><button onClick={handleClick}>聚焦输入框</button>
    </>
  )
}

export default InputFocus;