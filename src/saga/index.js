import { all } from "@redux-saga/core/effects";
import loginApiSaga from "./LoginSaga";
import registerApiSaga from "./RegisterSaga";

export default function* rootSaga() {
  yield all([loginApiSaga(), registerApiSaga()]);
}
