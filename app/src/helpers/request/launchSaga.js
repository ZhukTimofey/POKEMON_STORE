import axios from "axios";
import { select, take } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist/lib/constants";

import api from "../../api/apiConfig";

const authSelector = (state) => state.signIn;

export default function* launchSaga(action) {
  if (action) {
    const { response } = action.payload;

    yield (axios.defaults.headers.Authorization = `Bearer `);

    yield (api.defaults.headers.Authorization = `Bearer ${response.accessToken}`);
  } else {
    try {
      yield take(REHYDRATE);

      const state = yield select(authSelector);

      const { token } = state;

      if (token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        api.defaults.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      yield console.log(err);
    }
  }
}
