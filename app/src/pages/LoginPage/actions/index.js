import { createAction } from "redux-actions";

export const LOGIN_REQUEST = createAction("LOGIN_REQUEST");
export const LOGIN_SUCCESS = createAction("LOGIN_SUCCESS");
export const LOGIN_FAIL = createAction("LOGIN_FAIL");
export const USER_LOGOUT = createAction("USER_LOGOUT");
