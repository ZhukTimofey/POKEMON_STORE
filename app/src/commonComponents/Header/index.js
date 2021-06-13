import React from "react";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routesNames";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import style from "./style";

const Header = ({ classes, cartValue, handleLogout, isMainPage }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <img
              className={classes.Logo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
              alt=""
            />
          </div>

          {isMainPage ? (
            <div className={classes.menuButton}>
              <Link
                to={ROUTES.HOME_PAGE}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <IconButton aria-label="home">
                  <HomeIcon />
                </IconButton>
              </Link>
              <IconButton aria-label="cart">
                <Link
                  to={ROUTES.ORDER_PAGE}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Badge
                    classes={classes.badge}
                    badgeContent={cartValue}
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </Link>
              </IconButton>

              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Link
                to={ROUTES.MARKET_PAGE}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Button color="inherit">Go to market</Button>
              </Link>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(style)(Header);
