const BASE_URL = import.meta.env.BASE_URL;

export const endpoints = {
  registerUser: `${BASE_URL}/register`,
  checkUniqueUsername: `${BASE_URL}/check_unique_username`,
  otpVerification: `${BASE_URL}/otp_verification`,
  loginUser: `${BASE_URL}/login_user`,
};
