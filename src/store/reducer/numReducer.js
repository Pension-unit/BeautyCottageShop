import { ADD, SUB } from "../actionTypes";

const defaultState = {
  num: 1,
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD:
      newState.num = state.num + action.payload.step;
      break;
    case SUB:
      newState.num = state.num + action.payload.step;
      break;
    default:
      break;
  }
  return newState;
};
