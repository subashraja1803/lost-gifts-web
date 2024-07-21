import { REDUCER_ACTIONS } from "./constants";

export class LostGiftsActionHandlers {
  static setRegisterDetails(payload) {
    return { type: REDUCER_ACTIONS.SET_REGISTER_DETAILS, payload };
  }
  static setLoginDetails(payload) {
    return { type: REDUCER_ACTIONS.SET_LOGIN_DETAILS, payload };
  }
}
