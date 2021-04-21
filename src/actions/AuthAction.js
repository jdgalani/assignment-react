import { AUTH_LOGIN_SAGA, AUTH_REGISTER_SAGA } from "../reducers/Types";

export const loginAction = (email, password, isDirectUpdate) => {
  return {
    type: AUTH_LOGIN_SAGA,
    email,
    password,
    isDirectUpdate,
  };
};

export const registerAction = (name, email, password, isDirectUpdate) => {
  return {
    type: AUTH_REGISTER_SAGA,
    name,
    email,
    password,
    isDirectUpdate,
  };
};
