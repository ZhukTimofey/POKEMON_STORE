import React, { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_ITEM_INFO_REQUEST } from "../actions";
import { ADD_ITEM_TO_CART } from "../../OrderPage/actions";
import { USER_LOGOUT } from "../../LoginPage/actions";
import { ROUTES } from "../../../routes/routesNames";

import PokemonPageLayout from "../components/PokemonPageLayout";

const PokemonPageContainers = () => {
  const isMainPage = false;
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.getItemInfo);

  useEffect(() => {
    dispatch(GET_ITEM_INFO_REQUEST(params.id));
  }, [dispatch]);

  const addItemToCart = useCallback(() => {
    dispatch(ADD_ITEM_TO_CART(item.data));
  }, [item, dispatch]);

  const handleLogout = useCallback(() => {
    history.push(`${ROUTES.LOGIN_PAGE}`);
    dispatch(USER_LOGOUT());
  }, [dispatch]);

  return (
    <PokemonPageLayout
      isMainPage={isMainPage}
      item={item.data}
      isLoading={item.isLoading}
      addItemToCart={addItemToCart}
      handleLogout={handleLogout}
    />
  );
};

export default PokemonPageContainers;
