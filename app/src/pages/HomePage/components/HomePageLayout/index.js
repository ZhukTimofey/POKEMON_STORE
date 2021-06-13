import { withStyles } from "@material-ui/core";
import moment from "moment";
import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";
import HomePageUserCard from "../HomePageUserInfo";
import Header from "../../../../commonComponents/Header";
import ItemTable from "../../../../commonComponents/ItemTable";

const HomePageLayout = ({
  classes,
  userInfo,
  handleShowOrders,
  orders,
  isOrdersShown,
  isMainPage,
  isCartPage,
  handleLogout,
}) => {
  return (
    <div>
      <Header isMainPage={isMainPage} handleLogout={handleLogout} />

      <HomePageUserCard
        handleShowOrders={handleShowOrders}
        isOrdersShown={isOrdersShown}
        userInfo={userInfo}
        orders={orders}
      />
      {isOrdersShown && (
        <div className={classes.order}>
          {orders.map(({ createdAt, totalPrice, itemsList }) => (
            <div>
              <div className={classes.orderInfo}>
                <div>{moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</div>
                <div>Price of order:{totalPrice}</div>
              </div>
              <ItemTable
                itemsList={itemsList}
                isCartPage={isCartPage}
                classes={classes}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
HomePageLayout.propTypes = {
  userInfo: PropTypes.shape({
    token: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }),
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      customerId: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
      itemList: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired,
        })
      ),
      createdAt: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    })
  ),
  handleShowOrders: PropTypes.func.isRequired,
  isOrdersShown: PropTypes.bool.isRequired,
  isMainPage: PropTypes.bool.isRequired,
  isCartPage: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(HomePageLayout);
