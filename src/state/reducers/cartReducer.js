import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../constants/ActionTypes';

const initialState = {
  cart: [],
  total: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const existingItem = state.cart.find((item) => {
        return item.id === payload.id;
      });

      if (existingItem) {
        existingItem.quantity += 1;
        return {
          ...state,
          total: state.total + 1,
        };
      }

      return {
        ...state,
        total: state.total + 1,
        cart: [...state.cart, { ...payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      const selectedProduct = state.cart.find((item) => item.id === payload);
      return {
        ...state,
        total: state.total - selectedProduct.quantity,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        total: state.total + 1,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        total: state.total - 1,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      };
    default:
      return state;
  }
};
