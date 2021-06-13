import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GET_ORDER_REQUEST, SET_INIT_STATE } from "../actions";
import { USER_LOGOUT } from "../../LoginPage/actions";
import { ROUTES } from "../../../routes/routesNames";

import HomePageLayout from "../components/HomePageLayout";

const HomePageContainer = () => {
  const isCartPage = false;
  const isMainPage = false;

  const history = useHistory();
  const userData = useSelector((state) => state.signIn);
  const homePageState = useSelector((state) => state.homePage);

  const [state, setState] = useState({
    isOrdersShown: false,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_ORDER_REQUEST());
  }, []);

  const handleShowOrders = useCallback(() => {
    setState((state) => {
      return {
        ...state,
        isOrdersShown: !state.isOrdersShown,
      };
    });
  }, [state]);

  const setInitialState = useCallback(() => {
    dispatch(SET_INIT_STATE());
  }, []);

  const handleLogout = useCallback(() => {
    history.push(`${ROUTES.LOGIN_PAGE}`);
    dispatch(USER_LOGOUT());
  }, [dispatch]);

  return (
    <HomePageLayout
      userInfo={userData}
      handleShowOrders={handleShowOrders}
      orders={homePageState.successGet.response}
      isOrderReceived={homePageState.isOrderReceived}
      setInitialState={setInitialState}
      isOrdersShown={state.isOrdersShown}
      isMainPage={isMainPage}
      isCartPage={isCartPage}
      handleLogout={handleLogout}
    />
  );
};

export default HomePageContainer;
