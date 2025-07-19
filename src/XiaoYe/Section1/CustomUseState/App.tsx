import { useState } from "./React.tsx";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
    <h1>{ count }</h1>
    <button onClick={() => setCount(count + 1)}> + </button>
    <button onClick={() => setCount(count - 1)}> - </button>

    <h1>{ count2 }</h1>
    <button onClick={() => setCount2(count2 + 1)}> + </button>
    <button onClick={() => setCount2(count2 - 1)}> - </button>
    </>
  )
}

export default App;