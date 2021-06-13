import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  data: [],
  errors: null,
  isLoading: false,
  page: 1,
};

const getItemsReducer = handleActions(
  {
    [actions.GET_ITEMS_REQUEST]: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [actions.GET_ITEMS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      data: payload.response,
    }),

    [actions.GET_ITEMS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      data: payload.response,
    }),

    [actions.SET_PAGE]: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        page: payload,
      };
    },
  },
  initialState
);

export default getItemsReducer;
