import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import MarketPageLayout from "../components/MarketPageLayout";
import { GET_ITEMS_REQUEST, SET_PAGE } from "../actions";
import { ROUTES } from "../../../routes/routesNames";
import { ADD_ITEM_TO_CART } from "../../OrderPage/actions";
import { USER_LOGOUT } from "../../LoginPage/actions";

const MarketPageContainer = () => {
  const isMainPage = true;
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector((state) => state.getItems);
  const order = useSelector((state) => state.order.itemList);

  useEffect(() => {
    dispatch(GET_ITEMS_REQUEST(items.page));
  }, [items.page]);

  const handleGoToDetails = useCallback((id, name) => {
    history.push(`${ROUTES.MARKET_PAGE}/${id}/${name}`);
  }, []);

  const addItemToCart = useCallback(
    (id) => {
      dispatch(ADD_ITEM_TO_CART(items.data.find((item) => item.id === id)));
    },
    [items, dispatch]
  );

  const handleLogout = useCallback(() => {
    history.push(`${ROUTES.LOGIN_PAGE}`);
    dispatch(USER_LOGOUT());
  }, [dispatch]);

  const handleChangePage = useCallback((event, value) => {
    dispatch(SET_PAGE(value));
  }, []);
  return (
    <MarketPageLayout
      isMainPage={isMainPage}
      items={items.data}
      isLoading={items.isLoading}
      handleGoToDetails={handleGoToDetails}
      addItemToCart={addItemToCart}
      cartValue={order.length}
      page={items.page}
      handleLogout={handleLogout}
      handleChangePage={handleChangePage}
    />
  );
};

export default MarketPageContainer;
