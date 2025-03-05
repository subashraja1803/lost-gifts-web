import { handleActions } from "redux-actions";
import { REDUCER_ACTIONS } from "./constants";

const registerDetailsInitial = {
  fullName: "",
  email: "",
  username: "",
  password: "",
  confirmPW: "",
};

const loginDetailsInitial = {
  username: "",
  password: "",
};

const initialState = {
  userDetails: {
    profilePicture: null,
    username: "subashraja3",
    fullName: "Subash Raja",
    isLoggedIn: true, // set to false after development,
  },
  registerDetails: registerDetailsInitial,
  loginDetails: loginDetailsInitial,
};

export default handleActions(
  {
    [REDUCER_ACTIONS.SET_USER_DETAILS]: (state, { payload }) => ({
      ...state,
      userDetails: payload,
    }),
    [REDUCER_ACTIONS.SET_REGISTER_DETAILS]: (state, { payload }) => ({
      ...state,
      registerDetails: { ...state.registerDetails, ...payload },
    }),
    [REDUCER_ACTIONS.SET_LOGIN_DETAILS]: (state, { payload }) => ({
      ...state,
      loginDetails: { ...state.loginDetails, ...payload },
    }),
  },
  initialState
);
