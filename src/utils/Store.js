import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxThunk from "redux-thunk";

import reducer from "./../reducers";
import rootSaga from "../saga/index";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducer,
  applyMiddleware(reduxThunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
