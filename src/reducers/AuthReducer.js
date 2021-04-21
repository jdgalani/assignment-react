import { AUTH_LOGIN, AUTH_REGISTER, AUTH_REGISTER_UPDATE } from "./Types";

const INITIAL_STATE = {
  loginResponse: {},
  registerResponse: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload }) => {

  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        loginResponse: {
          ...payload,
        },
      };
    case AUTH_REGISTER:
      return {
        ...state,
        registerResponse: {
          ...payload,
        },
      };
    default:
      return state;
  }
};
