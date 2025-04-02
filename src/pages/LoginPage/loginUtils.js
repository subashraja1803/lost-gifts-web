import { toast } from "react-toastify";
import Utility from "../../Utils/Utility";
import { EMPTY_OBJECT } from "../../constants/frozenObjects";

export const checkLoginPayload = (loginDetails = EMPTY_OBJECT) => {
  const { username = "", password = "" } = loginDetails;
  const missingItems = [];
  if (!username) missingItems.push("Username");
  if (!password) missingItems.push("Password");

  if (!Utility.isEmptyArray(missingItems)) {
    toast.error(`${missingItems.toString()} cannot be empty`);
    return false;
  }
  return true;
};
