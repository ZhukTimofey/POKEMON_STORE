import React, { useCallback, useEffect, useState } from "react";

import OrderPageLayout from "../component/OrderPageLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_QUANTITY,
  DECREMENT_QUANTITY,
  POST_ORDER_REQUEST,
  REMOVE_ITEM,
} from "../actions";
import { ROUTES } from "../../../routes/routesNames";
import { USER_LOGOUT } from "../../LoginPage/actions";
import { useHistory } from "react-router-dom";

const OrderPageContainer = () => {
  const isCartPage = true;
  const isMainPage = false;

  const history = useHistory();
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.order.itemList);
  const userData = useSelector((state) => state.signIn);

  const [open, setOpen] = useState({ postOrder: false });

  const handleOpenModal = useCallback(
    (index) => {
      console.log(open);
      setOpen((state) => {
        open[index] = true;
        return {
          ...state,
        };
      });
    },
    [open]
  );

  const handleCloseModal = useCallback(
    (index) => {
      console.log(open);

      setOpen((state) => {
        open[index] = false;
        return {
          ...state,
        };
      });
    },
    [open]
  );

  useEffect(() => {
    for (let i = 0; i < itemList.length; i++) {
      open[i] = false;
    }
    console.log(open);
  }, []);

  const result = itemList.reduce(function (sum, current, index) {
    const price = itemList[index].price;
    return sum + price;
  }, 0);

  const handleAddQuantity = useCallback((index) => {
    dispatch(ADD_QUANTITY(index));
  }, []);

  const handleDecrementQuantity = useCallback((index) => {
    dispatch(DECREMENT_QUANTITY(index));
  }, []);

  const handleRemoveItem = useCallback((index) => {
    dispatch(REMOVE_ITEM(index));
  }, []);

  const handlePostOrder = useCallback(() => {
    const orderPost = {
      customerId: userData.id,
      totalPrice: result,
      itemsList: itemList,
    };
    dispatch(POST_ORDER_REQUEST(orderPost));
  }, [dispatch]);

  //

  const handleOpenOrderModal = useCallback(
    (index) => {
      setOpen((state) => {
        open.postOrder = true;
        return {
          ...state,
        };
      });
    },
    [open]
  );

  const handleCloseOrderModal = useCallback(
    (index) => {
      setOpen((state) => {
        open.postOrder = false;
        return {
          ...state,
        };
      });
    },
    [open]
  );

  const handleLogout = useCallback(() => {
    history.push(`${ROUTES.LOGIN_PAGE}`);
    dispatch(USER_LOGOUT());
  }, [dispatch]);

  return (
    <OrderPageLayout
      isMainPage={isMainPage}
      itemList={itemList}
      name={userData.userName}
      handleAddQuantity={handleAddQuantity}
      handleDecrementQuantity={handleDecrementQuantity}
      handleRemoveItem={handleRemoveItem}
      result={result}
      handlePostOrder={handlePostOrder}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      open={open}
      openPostOrder={open.postOrder}
      handleCloseOrderModal={handleCloseOrderModal}
      handleOpenOrderModal={handleOpenOrderModal}
      isCartPage={isCartPage}
      handleLogout={handleLogout}
    />
  );
};

export default OrderPageContainer;
