import axios from "axios";
import { endpoints } from "./endpoints";

export const registerUser = (payload) =>
  axios.post(endpoints.registerUser, payload).then(({ data }) => data);

export const checkUniqueUsername = (payload) =>
  axios.post(endpoints.checkUniqueUsername, payload).then(({ data }) => data);

export const verifyOTP = (payload) =>
  axios.post(endpoints.otpVerification, payload).then(({ data }) => data);

export const loginUser = (payload) =>
  axios.post(endpoints.loginUser, payload).then(({ data }) => data);
