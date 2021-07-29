import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from '../constants/ActionTypes';

const initialState = {
  cart: [],
  qty: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return state;
    case REMOVE_FROM_CART:
      return state;
    case UPDATE_QUANTITY:
      return state;
    default:
      return state;
  }
};
