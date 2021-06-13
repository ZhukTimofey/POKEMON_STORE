import { call, put, takeEvery, delay } from "redux-saga/effects";
import { isEmpty } from "lodash";

import {
  POSTFIXES,
  REQUEST_PENDING_DELAY,
} from "../../constants/actionsPostfixes";
import createActionWithPostfix from "./actionPostfixCreator";
import apiCallsMapping from "../../api/apiCallsMapping";

const { SUCCESS_POSTFIX, FAIL_POSTFIX, REQUEST_POSTFIX } = POSTFIXES;

function* sendRequest(action) {
  try {
    const callMethod = apiCallsMapping(action);
    const response = yield call(callMethod, action.payload);

    yield put(
      createActionWithPostfix(
        action.type,
        {
          response: !isEmpty(response) ? response.data : {},
          actionPayload: action.payload,
        },
        SUCCESS_POSTFIX
      )
    );
  } catch (error) {
    yield put(
      createActionWithPostfix(
        action.type,
        {
          response: !isEmpty(error.response) ? error.response.data.message : "",
        },
        FAIL_POSTFIX
      )
    );
  }
}
function* requestEnded() {
  yield delay(REQUEST_PENDING_DELAY);
}

const isApiCallAction = (action) => {
  return action.type.endsWith(REQUEST_POSTFIX);
};

const isApiCallEndedAction = (action) => {
  action.type.endsWith(SUCCESS_POSTFIX) || action.type.endsWith(FAIL_POSTFIX);
};

function* apiCallsSaga() {
  yield takeEvery(isApiCallAction, sendRequest);
  yield takeEvery(isApiCallEndedAction, requestEnded);
}

export default apiCallsSaga;
