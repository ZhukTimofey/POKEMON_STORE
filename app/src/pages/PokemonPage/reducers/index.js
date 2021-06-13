import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  data: {
    id: null,
    name: null,
    image: null,
    abilities: [],
    stats: [],
    price: null,
  },
  errors: null,
  isLoading: false,
};
const getItemInfoReducer = handleActions(
  {
    [actions.GET_ITEM_INFO_REQUEST]: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [actions.GET_ITEM_INFO_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      data: payload.response,
    }),
    [actions.GET_ITEM_INFO_FAIL]: (state, { payload }) => ({
      ...state,
      errors: payload.response,
    }),
  },
  initialState
);

export default getItemInfoReducer;
