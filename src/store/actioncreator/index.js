import { ADD, SUB } from "../actionTypes";
// 购物车加减
const addAction = () => ({
  type: ADD,
  payload: {
    step: 1,
  },
});
const subAction = () => ({
  type: SUB,
  payload: {
    step: -1,
  },
});
export { addAction, subAction };
