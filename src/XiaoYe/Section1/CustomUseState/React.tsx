const states = [];
const stateSetters = [];

let stateIndex = 0;

const createState = (initialState, stateIndex) => {
  return states[stateIndex] ? states[stateIndex] : initialState;
}

const createStateSetter = (stateIndex) => {
  return (newState) => {
    if(typeof newState === 'function') {
      states[stateIndex] = newState(states[stateIndex]);
    } else {
      states[stateIndex] = newState;
    }
  }
}

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  }
  return [
    state,
    dispatch
  ]
}

const useState = (initialState) => {
  states[stateIndex] = createState(initialState, stateIndex);

  if(!stateSetters[stateIndex]) {
    stateSetters.push(createStateSetter(stateIndex));
  }
  
  const _state = states[stateIndex]
  const _setState = stateSetters[stateIndex];

  stateIndex++;
  return [
    _state,
    _setState
  ]
}

export {
  useState,
  useReducer
}