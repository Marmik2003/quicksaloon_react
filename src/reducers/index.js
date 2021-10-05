/**
 * External Dependencies
 */
import { combineReducers } from "redux";

/**
 * Reducer
 */
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
