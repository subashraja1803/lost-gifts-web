const BASE_URL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
  registerUser: `${BASE_URL}/register`,
  checkUniqueUsername: `${BASE_URL}/check_unique_username`,
  otpVerification: `${BASE_URL}/otp_verification`,
  loginUser: `${BASE_URL}/login_user`,
};
