import { createAction } from "redux-actions";

export const GET_ITEMS_REQUEST = createAction("GET_ITEMS_REQUEST");
export const GET_ITEMS_SUCCESS = createAction("GET_ITEMS_SUCCESS");
export const GET_ITEMS_FAIL = createAction("GET_ITEMS_FAIL");
export const SET_PAGE = createAction("SET_PAGE");
