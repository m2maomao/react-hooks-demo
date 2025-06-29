import { useRef } from 'react';

const App = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current?.focus();
  }

  return (
    <>
      <input type='text' ref={ref} />
      <button onClick={handleClick}>获取焦点</button>
    </>
  )
}

export default App;

