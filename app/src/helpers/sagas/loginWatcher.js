import { takeEvery } from "redux-saga/effects";
import { LOGIN_SUCCESS } from "../../pages/LoginPage/actions";
import launchSaga from "../request/launchSaga";

function* loginWatcher() {
  yield takeEvery(LOGIN_SUCCESS, launchSaga);
}

export default loginWatcher;
