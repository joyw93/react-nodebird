import { all, fork, call, put, takeLatest, delay } from "redux-saga/effects";

import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
