import { createStore } from "redux";
import {
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionType";
// import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from "./actions";
const initialState = {
  product: [],
  cart: [],
  total: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
      };

    case ADD_TO_CART: {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price * action.payload.quantity,
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: state.total + item.price,
              }
            : item
        ),
        total: state.total + action.payload.price,
      };

    case DECREASE_QUANTITY:
      if (action.payload.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          total: state.total - action.payload.price,
        };
      }
      return state;

    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
