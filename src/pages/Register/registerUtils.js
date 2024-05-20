import { toast } from "react-toastify";
import Utility from "../../Utils/Utility";
import { EMPTY_OBJECT } from "../../constants/frozenObjects";

export const checkValidRegisterPayload = (registerDetails = EMPTY_OBJECT) => {
  const {
    email = "",
    fullName = "",
    username = "",
    password = "",
    confirmPW = "",
  } = registerDetails;
  const missingItems = [];
  if (!fullName) missingItems.push("Full Name");
  if (!email) missingItems.push("Email");
  if (!username) missingItems.push("Username");
  if (!password) missingItems.push("Password");
  if (!confirmPW) missingItems.push("Confirm Password");

  if (!Utility.isEmptyArray(missingItems)) {
    toast.error(`${missingItems.toString()} cannot be empty`);
    return false;
  }
  if (password !== confirmPW) {
    toast.error("Password and Confirm Password must be equal");
    return false;
  }
  return true;
};
