import { useReducer } from "react";

const reducer = (state: {count: number}, action: {type: string, payload: number}) => {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + action.payload
      };
    case 'MINUS':
      return {
        count: state.count - action.payload
      };
    case 'MUL':
      return {
        count: state.count * action.payload
      }
    case 'DIV':
      return {
        count: state.count / action.payload
      }
    default:
      return {
        count: state.count
      }
  }
}

const App = () => {
  const initialState = {count: 1}
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <h1>{ state.count }</h1>
      <button onClick={() => dispatch({type: 'ADD', payload: 2})}>+ 2</button>
      <button onClick={() => dispatch({type: 'MINUS', payload: 2})}>- 2</button>
      <button onClick={() => dispatch({type: 'MUL', payload: 2})}>* 2</button>
      <button onClick={() => dispatch({type: 'DIV', payload: 2})}>/ 2</button>
    </>
  )
}

export default App;