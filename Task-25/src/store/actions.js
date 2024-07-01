import {
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionType";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const increaseQuantity = (product) => {
  return {
    type: INCREASE_QUANTITY,
    payload: product,
  };
};

export const decreaseQuantity = (product) => {
  return {
    type: DECREASE_QUANTITY,
    payload: product,
  };
};
