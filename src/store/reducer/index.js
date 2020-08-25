import { combineReducers } from "redux";
import numReducer from "./numReducer";
import ctgReducer from "./ctgReducer"
export default combineReducers({ numReducer, ctgReducer });
