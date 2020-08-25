import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/index";
import reduxThunk from "redux-thunk";
export default createStore(rootReducer, applyMiddleware(reduxThunk));
