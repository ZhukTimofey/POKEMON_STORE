import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  success: {
    success: false,
    message: null,
  },
  isLoading: false,
  errors: null,
};
const signUpReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      success: payload.response,
    }),

    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.SET_INITIAL_STATE]: () => initialState,
  },
  initialState
);

export default signUpReducer;
