import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

const ItemTable = ({
  classes,
  itemsList,
  handleAddQuantity,
  handleDecrementQuantity,
  handleOpenModal,
  handleCloseModal,
  handleRemoveItem,
  open,
  isCartPage,
}) => {
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell>Names</TableCell>
            <TableCell>Images</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            {isCartPage && <TableCell align="right"></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsList.map((row, index) => (
            <TableRow key={itemsList.name}>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={row.image} alt="" />
              </TableCell>
              <TableCell align="center">
                {isCartPage && (
                  <IconButton
                    aria-label="add"
                    onClick={() => handleAddQuantity(index)}
                  >
                    <AddIcon />
                  </IconButton>
                )}
                {row.quantity}
                {isCartPage && (
                  <IconButton
                    aria-label="decrement"
                    onClick={() => handleDecrementQuantity(index)}
                    disabled={row.quantity <= 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                )}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              {isCartPage && (
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleOpenModal(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Dialog
                    open={open[index]}
                    onClose={() => handleCloseModal(index)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Are you sure you want to remove {row.name} from your
                        cart?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={() => handleCloseModal(index)}
                        color="primary"
                      >
                        Disagree
                      </Button>
                      <Button
                        onClick={() => {
                          handleCloseModal(index);
                          handleRemoveItem(index);
                        }}
                        color="primary"
                        autoFocus
                      >
                        {" "}
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemTable;
