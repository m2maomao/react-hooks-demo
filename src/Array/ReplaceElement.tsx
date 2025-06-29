import { useState } from "react";

const initialCounters = [0, 0, 0];



const CounterList = () => {
  const [counters, setCounters] = useState(initialCounters);

  const handleClick = (index: number) => {
    const nextCounters = counters.map((counter, i) => {
      if (i === index) {
        return counter + 1;
      } else {
        return counter;
      }
    });
    setCounters(nextCounters);
  }
  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => handleClick(i)}>+1</button>
        </li>
      ))}
    </ul>
  )
}

export default CounterList;