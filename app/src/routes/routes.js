import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./routesNames";
import SignUpPageContainer from "../pages/signUpPage/container/SignUpPageContainer";
import LoginPageContainer from "../pages/LoginPage/container/LoginPageContainer";
import MarketPageContainer from "../pages/MarketPage/container/MarketPageContainer";
import PokemonPageContainers from "../pages/PokemonPage/container/PokemonPageContainers";
import OrderPageContainer from "../pages/OrderPage/container/OrderPageContainer";
import HomePageContainer from "../pages/HomePage/container/HomePageContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.SIGN_UP_PAGE} component={SignUpPageContainer} />
      <Route exact path={ROUTES.LOGIN_PAGE} component={LoginPageContainer} />
      <Route exact path={ROUTES.MARKET_PAGE} component={MarketPageContainer} />
      <Route
        exact
        path={ROUTES.MARKET_PAGE_POKEMON}
        component={PokemonPageContainers}
      />
      <Route exact path={ROUTES.ORDER_PAGE} component={OrderPageContainer} />
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
    </Switch>
  );
};

export default Routes;
