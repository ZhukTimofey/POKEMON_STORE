import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  customerId: null,
  totalPrice: null,
  itemList: [],
};
const orderReducer = handleActions(
  {
    [actions.ADD_ITEM_TO_CART]: (state, { payload }) => {
      const stateCopy = [...state.itemList];
      const {
        name: newName,
        id: newId,
        price: newPrice,
        image: newImage,
      } = payload;
      if (state.itemList.find((poke) => poke.id === newId)) {
        const newState = stateCopy.map(
          ({ id, name, price, defaultPrice, quantity, image }) => {
            if (id === newId) {
              return {
                id: id,
                name: name,
                quantity: quantity + 1,
                price: price + newPrice,
                defaultPrice: defaultPrice,
                image: image,
              };
            } else {
              return {
                id: id,
                name: name,
                quantity: quantity,
                price: price,
                defaultPrice: defaultPrice,
                image: image,
              };
            }
          }
        );
        return {
          itemList: newState,
        };
      } else {
        const newPokemon = {
          id: newId,
          name: newName,
          quantity: 1,
          price: newPrice,
          defaultPrice: newPrice,
          image: newImage,
        };
        stateCopy.push(newPokemon);
        return {
          itemList: stateCopy,
        };
      }
    },

    [actions.ADD_QUANTITY]: (state, { payload }) => {
      const stateCopy = [...state.itemList];
      const foundPokemon = stateCopy[payload];
      foundPokemon.quantity = foundPokemon.quantity + 1;
      foundPokemon.price = foundPokemon.price + foundPokemon.defaultPrice;
      return { ...state, itemList: stateCopy };
    },

    [actions.DECREMENT_QUANTITY]: (state, { payload }) => {
      const stateCopy = [...state.itemList];
      const foundPokemon = stateCopy[payload];

      if (foundPokemon.quantity > 1) {
        foundPokemon.quantity = foundPokemon.quantity - 1;
        foundPokemon.price = foundPokemon.price - foundPokemon.defaultPrice;
        return { ...state, itemList: stateCopy };
      } else {
        stateCopy.splice(payload, 1);
        return { ...state, itemList: stateCopy };
      }
    },

    [actions.REMOVE_ITEM]: (state, { payload }) => {
      const stateCopy = [...state.itemList];
      stateCopy.splice(payload, 1);
      return { ...state, itemList: stateCopy };
    },

    [actions.POST_ORDER_REQUEST]: (state, { payload }) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [actions.POST_ORDER_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      success: payload,
      itemList: [],
    }),

    [actions.POST_ORDER_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      success: payload,
    }),
  },
  initialState
);

export default orderReducer;
