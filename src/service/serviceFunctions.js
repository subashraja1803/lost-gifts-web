import axios from "axios";
import { endpoints } from "./endpoints";

export const registerUser = (payload) =>
  axios.post(endpoints.registerUser, payload).then((data) => console.log(data));

export const checkUniqueUsername = (payload) =>
  axios.post(endpoints.checkUniqueUsername, payload).then(({ data }) => data);
