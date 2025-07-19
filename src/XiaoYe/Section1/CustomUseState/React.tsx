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
  useState
}