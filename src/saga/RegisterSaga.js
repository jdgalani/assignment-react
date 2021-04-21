import { call, put, takeLatest } from "redux-saga/effects";

import { AUTH_REGISTER, AUTH_REGISTER_SAGA } from "../reducers/Types";
import AxiosAPI from "../utils/AxiosAPI";

function* registerApiData(payload) {
  try {
    const data = yield call(registerApi, payload);
    yield put({ type: AUTH_REGISTER, payload: data });
  } catch (e) {
    console.log(e);
  }
}

export default function* registerApiSaga() {
  yield takeLatest(AUTH_REGISTER_SAGA, registerApiData);
}

async function registerApi(payload) {
  if (payload?.isDirectUpdate) {
    return {};
  }
  try {
    const response = await AxiosAPI.post("/v1/auth/register", {
      name: payload?.name,
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
