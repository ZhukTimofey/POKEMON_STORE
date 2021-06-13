import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import signUp from "../pages/signUpPage/reducers";
import signIn from "../pages/LoginPage/reducers";
import getItems from "../pages/MarketPage/reducers";
import getItemInfo from "../pages/PokemonPage/reducers";
import order from "../pages/OrderPage/reducer";
import homePage from "../pages/HomePage/reducer";

const authBlackListedFields = createBlacklistFilter("authReducer", [
  "isLoading",
  "errors",
]);
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"],
  transforms: [authBlackListedFields],
};

// const rootReducer = combineReducers({
//   signUp,
//   signIn,
//   getPokemon,
//   getPokemonInfo,
//   order,
//   profile,
// });

const appReducer = combineReducers({
  signUp,
  signIn,
  getItems,
  getItemInfo,
  order,
  homePage,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
