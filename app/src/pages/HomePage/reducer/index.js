import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  isOrderReceived: false,
  isLoading: false,
  successGet: {
    response: [],
  },
};

const homePageReducer = handleActions(
  {
    [actions.GET_ORDER_REQUEST]: (state) => {
      return {
        ...state,
        isLoading: true,
        isOrderReceived: true,
      };
    },

    [actions.GET_ORDER_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      successGet: payload,
    }),

    [actions.GET_ORDER_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      successGet: payload,
    }),

    [actions.SET_INIT_STATE]: () => initialState,
  },
  initialState
);

export default homePageReducer;
