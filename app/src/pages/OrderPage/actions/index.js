import { createAction } from "redux-actions";

export const POST_ORDER_REQUEST = createAction("POST_ORDER_REQUEST");
export const POST_ORDER_SUCCESS = createAction("POST_ORDER_SUCCESS");
export const POST_ORDER_FAIL = createAction("POST_ORDER_FAIL");

export const ADD_ITEM_TO_CART = createAction("ADD_ITEM_TO_CART");
export const ADD_QUANTITY = createAction("ADD_QUANTITY");
export const DECREMENT_QUANTITY = createAction("DECREMENT_QUANTITY");
export const REMOVE_ITEM = createAction("REMOVE_ITEM");
