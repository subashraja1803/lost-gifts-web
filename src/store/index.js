import { handleActions } from "redux-actions";
import { REDUCER_ACTIONS } from "./constants";

const registerDetailsInitial = {
  fullName: "",
  email: "",
};

const initialState = {
  userDetails: {
    isLoggedIn: false,
  },
  registerDetails: registerDetailsInitial,
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
  },
  initialState
);
