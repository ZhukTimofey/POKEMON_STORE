import React from "react";
import PropTypes from "prop-types";

import Header from "../../../../commonComponents/Header";
import PokemonPageInfo from "../PokemonPageInfo";
import PokemonPageSkeleton from "../PokemonPageSkeleton";

const PokemonPageLayout = ({
  item,
  isLoading,
  addItemToCart,
  isMainPage,
  handleLogout,
}) => {
  return (
    <div>
      <div>
        <Header isMainPage={isMainPage} handleLogout={handleLogout} />
      </div>
      <div>
        {isLoading ? (
          <PokemonPageSkeleton />
        ) : !item ? (
          <div>Oops something went wrong, We'll fix it soon</div>
        ) : (
          <PokemonPageInfo item={item} addItemToCart={addItemToCart} />
        )}
      </div>
    </div>
  );
};

PokemonPageLayout.propTypes = {
  item: PropTypes.shape({
    abilities: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string, value: PropTypes.number })
    ),
  }),
  isLoading: PropTypes.bool.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  isMainPage: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default PokemonPageLayout;
