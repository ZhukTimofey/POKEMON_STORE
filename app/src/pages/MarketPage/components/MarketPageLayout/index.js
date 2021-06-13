import React from "react";
import { withStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import PropTypes from "prop-types";

import PokemonCard from "../pokemonCard";
import Skelet from "../skelet";
import styles from "./styles";
import Header from "../../../../commonComponents/Header";

const MarketPageLayout = ({
  classes,
  cartValue,
  items,
  isLoading,
  handleGoToDetails,
  addItemToCart,
  page,
  handleLogout,
  handleChangePage,
  isMainPage,
}) => {
  return (
    <div>
      <Header
        cartValue={cartValue}
        handleLogout={handleLogout}
        isMainPage={isMainPage}
      />

      <div className={classes.marketSection}>
        {isLoading ? (
          <div>
            <Skelet />
          </div>
        ) : (
          items.map(({ name, image, price, id }) => (
            <PokemonCard
              name={name}
              image={image}
              price={price}
              handleGoToDetails={() => handleGoToDetails(id, name)}
              addItemToCart={() => addItemToCart(id)}
            />
          ))
        )}
      </div>
      <div className={classes.rootPagination}>
        <Pagination
          count={45}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};
MarketPageLayout.propTypes = {
  cartValue: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  handleGoToDetails: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

export default withStyles(styles)(MarketPageLayout);
