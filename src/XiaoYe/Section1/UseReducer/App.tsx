/**
 * 
 * + - * / => 计算count
 * count => 多重操作方案，每一种方案可能有很多地方都需要使用
 */ 

import { useReducer } from "react";

interface CounterAction {
  type: 'PLUS' | 'MINUS' | 'MUL' | 'DIV';
  payload: number;
}

const countReducer = (state: number, action: CounterAction) => {
  switch (action.type) {
    case 'PLUS':
      return state + action.payload;
    case 'MINUS':
      return state - action.payload;
    case 'MUL':
      return state * action.payload;
    case 'DIV':
      return state / action.payload;
    default:
      return state;
  }
}

const App = () => {
  const [count, dispatch] = useReducer(countReducer, 1);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({type: 'PLUS', payload: 1})}>+1</button>
      <button onClick={() => dispatch({type: 'MINUS', payload: 1})}>-1</button>
      <button onClick={() => dispatch({type: 'MUL', payload: 2})}>*2</button>
      <button onClick={() => dispatch({type: 'DIV', payload: 2})}>/2</button>
    </>
  )
}

export default App;