const BASE_URL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
  registerUser: `${BASE_URL}/register`,
  checkUniqueUsername: `${BASE_URL}/checkUniqueUsername`,
};
