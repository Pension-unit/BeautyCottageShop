import { combineReducers } from "redux";
import numReducer from "./numReducer";
import productReducer from "./productReducer";
export default combineReducers({ numReducer, productReducer });
