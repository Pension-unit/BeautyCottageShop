import { combineReducers } from "redux";
import numReducer from "./numReducer";
import productReducer from "./productReducer";
import loginReducer from "./loginReducer";
import ctgReducer from "./ctgReducer";
export default combineReducers({
  numReducer,
  ctgReducer,
  loginReducer,
  productReducer,
});
