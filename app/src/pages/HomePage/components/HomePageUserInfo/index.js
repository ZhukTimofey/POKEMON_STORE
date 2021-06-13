import React from "react";
import {
  withStyles,
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
} from "@material-ui/core";

import styles from "./styles";

const HomePageUserCard = ({
  handleShowOrders,
  isOrdersShown,
  userInfo,
  classes,
  orders,
}) => {
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          User info
        </Typography>
        <Typography variant="h5" component="h2">
          {userInfo.userName} {userInfo.lastName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {userInfo.roles}
        </Typography>
        <Typography variant="body2" component="p">
          {userInfo.phone}
        </Typography>
        <Typography variant="body2" component="p">
          {userInfo.gender}
        </Typography>
        <Typography variant="body2" component="p">
          number of your orders : {orders.length}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleShowOrders}>
          {isOrdersShown ? "Hide your orders" : "Show your orders"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(HomePageUserCard);
