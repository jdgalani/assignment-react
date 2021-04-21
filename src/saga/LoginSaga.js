import { call, put, takeLatest } from "redux-saga/effects";

import { AUTH_LOGIN, AUTH_LOGIN_SAGA } from "../reducers/Types";
import AxiosAPI from "../utils/AxiosAPI";

function* loginApiData(payload) {
  try {
    const data = yield call(loginApi, payload);
    yield put({ type: AUTH_LOGIN, payload: data });
  } catch (e) {
    console.log(e);
  }
}

export default function* loginApiSaga() {
  yield takeLatest(AUTH_LOGIN_SAGA, loginApiData);
}

async function loginApi(payload) {
  if (payload.isDirectUpdate) {
    return {};
  }
  try {
    const response = await AxiosAPI.post("/v1/auth/login", {
      email: payload?.email,
      password: payload?.password,
    });
    if (response?.status && response.status < 400) {
      const data = response.data;
      return data;
    } else return response;

    // eslint-disable-next-line no-unreachable
  } catch (e) {
    const res = JSON.parse(JSON.stringify(e));
    console.log("========e", res);
    if (res?.message) {
      console.log("=========response", res.message);
      return { error: res.message };
    }
    return { error: e };
  }
}
