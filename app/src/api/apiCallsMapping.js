import * as signUpActions from "../pages/signUpPage/actions";
import * as signUpAPI from "../pages/signUpPage/api";

import * as loginActions from "../pages/LoginPage/actions";
import * as loginAPI from "../pages/LoginPage/api";

import * as getItemActions from "../pages/MarketPage/actions";
import * as getItemAPI from "../pages/MarketPage/api";

import * as getItemsInfoActions from "../pages/PokemonPage/actions";
import * as getItemsInfoAPI from "../pages/PokemonPage/api";

import * as orderActions from "../pages/OrderPage/actions";
import * as orderAPI from "../pages/OrderPage/api";

import * as getOrderActions from "../pages/HomePage/actions";
import * as getOrderAPI from "../pages/HomePage/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [signUpActions.SIGN_UP_REQUEST]: signUpAPI.signUp,
    [loginActions.LOGIN_REQUEST]: loginAPI.login,
    [getItemActions.GET_ITEMS_REQUEST]: getItemAPI.getItems,
    [getItemsInfoActions.GET_ITEM_INFO_REQUEST]: getItemsInfoAPI.getItemInfo,
    [orderActions.POST_ORDER_REQUEST]: orderAPI.postOrder,
    [getOrderActions.GET_ORDER_REQUEST]: getOrderAPI.getOrder,
  };
  if (!mapping.hasOwnProperty(action.type)) {
    throw Error("Not Mapped action");
  }

  return mapping[action.type];
};

export default apiCallsMapping;
