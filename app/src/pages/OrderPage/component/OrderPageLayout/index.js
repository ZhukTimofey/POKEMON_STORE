import React from "react";
import {
  withStyles,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "./styles";
import ItemTable from "../../../../commonComponents/ItemTable";
import Header from "../../../../commonComponents/Header";

const OrderPageLayout = ({
  classes,
  itemList,
  isMainPage,
  handleAddQuantity,
  handleDecrementQuantity,
  handleRemoveItem,
  result,
  handlePostOrder,
  handleCloseModal,
  handleOpenModal,
  openPostOrder,
  open,
  handleCloseOrderModal,
  handleOpenOrderModal,
  isCartPage,
  handleLogout,
}) => {
  return (
    <div>
      <div className={classes.rootHeader}>
        <Header isMainPage={isMainPage} handleResetState={handleLogout} />
      </div>
      {itemList.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          <ItemTable
            isCartPage={isCartPage}
            itemsList={itemList}
            handleAddQuantity={handleAddQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            handleRemoveItem={handleRemoveItem}
            open={open}
            classes={classes}
          />

          <div className={classes.totalPrice}>
            <button onClick={handleOpenOrderModal}>post order</button>
            <Dialog
              open={openPostOrder}
              onClose={handleCloseOrderModal}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to place an order?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseOrderModal} color="primary">
                  Disagree
                </Button>
                <Button
                  onClick={() => {
                    handleCloseOrderModal();
                    handlePostOrder();
                  }}
                  color="primary"
                  autoFocus
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
            <h3>Total price:</h3>
            <div>{result}</div>
          </div>
        </div>
      )}
    </div>
  );
};

OrderPageLayout.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      defaultPrice: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  isMainPage: PropTypes.bool.isRequired,
  handleAddQuantity: PropTypes.func.isRequired,
  handleDecrementQuantity: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  result: PropTypes.number.isRequired,
  handlePostOrder: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  openPostOrder: PropTypes.bool.isRequired,
  open: PropTypes.object,
  handleCloseOrderModal: PropTypes.func.isRequired,
  handleOpenOrderModal: PropTypes.func.isRequired,
  isCartPage: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(OrderPageLayout);
