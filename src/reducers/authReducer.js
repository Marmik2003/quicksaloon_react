import Cookies from "js-cookie";

import {
  UPDATE_AUTH,
} from "../actions";

const INITIAL_AUTH_STATE = {
  token: Cookies.get("auth-token"),
};

const authReducer = (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      if (typeof action.auth.token !== "undefined") {
        Cookies.set("auth-token", action.auth.token, { expires: 3 });
      }

      return Object.assign({}, state, action.auth);
    default:
      return state;
  }
}

export default authReducer;