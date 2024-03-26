import { createStore } from "redux";

// Define action types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

// Define action creators
export const loginSuccess = (token, user) => ({
  type: LOGIN_SUCCESS,
  payload: { token, user },
});

export const logout = () => ({
  type: LOGOUT,
});

// Define initial state
const initialState = {
  token: null,
  user: null,
};

// Define reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(userReducer);

export default store;
