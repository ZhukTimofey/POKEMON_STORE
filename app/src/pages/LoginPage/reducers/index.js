import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  isLoading: false,
  isAuth: false,
  errors: null,
  token: null,
  userName: null,
  id: null,
};
const signInReducer = handleActions(
  {
    [actions.LOGIN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isAuth: true,
      token: payload.response.accessToken,
      userName: payload.response.firstName,
      id: payload.response._id,
      phone: payload.response.phone,
      roles: payload.response.roles,
      lastName: payload.response.lastName,
      gender: payload.response.gender,
    }),
    [actions.LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.USER_LOGOUT]: () => {
      localStorage.clear();
      return initialState;
    },
  },
  initialState
);

export default signInReducer;
