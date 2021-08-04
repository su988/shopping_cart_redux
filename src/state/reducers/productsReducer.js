import {
  GET_PRODUCTS,
  SET_CATEGORY,
  SORT_BY_PRICE,
} from '../constants/ActionTypes';

const initialState = {
  products: [],
  selectedProduct: [],
  category: '',
  sortBy: '',
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        sortBy: payload,
      };

    default:
      return state;
  }
};
