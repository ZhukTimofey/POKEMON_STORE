import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import watchRequest from "../helpers/request/watchRequest";
import launchSaga from "../helpers/request/launchSaga";
import loginWatcher from "../helpers/sagas/loginWatcher";

function* rootSaga() {
  yield all([watchRequest(), launchSaga(), loginWatcher()]);
}

export default rootSaga;
