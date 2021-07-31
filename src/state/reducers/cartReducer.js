import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../constants/ActionTypes';

const initialState = {
  products: [],
  total: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const existingItem = state.products.find((item) => {
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
        cart: [...state.products, { ...payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      const selectedProduct = state.products.find(
        (item) => item.id === payload,
      );
      return {
        ...state,
        total: state.total - selectedProduct.quantity,
        cart: state.products.filter((item) => item.id !== payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        total: state.total + 1,
        cart: state.products.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        total: state.total - 1,
        cart: state.products.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      };
    default:
      return state;
  }
};
