import { useReducer } from "react";

interface State {
  count: number;
}

type CounterAction = {type: "reset"} | {type: 'setCount'; value: State['count']}

const initialState: State = { count: 0 };

const stateReducer = (state: State, action: CounterAction): State => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return {...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({
    type: 'setCount',
    value: state.count + 5
  });
  const reset = () => dispatch({
    type: 'reset'
  });
  return (
    <div>
      <h1>欢迎来到我的计数器</h1>
      <p>计数：{state.count}</p>
      <button onClick={addFive}>加 5</button>
      <button onClick={reset}>重置</button>
    </div>
  )
}

export default App;