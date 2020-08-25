import { combineReducers } from "redux";
import numReducer from "./numReducer";
import loginReducer from './loginReducer'
export default combineReducers({ numReducer, loginReducer});
