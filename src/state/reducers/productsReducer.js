import { SET_PRODUCTS, SELECTED_PRODUCT } from '../constants/ActionTypes';

const initialState = {
  products: [],
};

export function productsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SELECTED_PRODUCT:
      return {
        state,
      };
    default:
      return state;
  }
}

export default productsReducer;
