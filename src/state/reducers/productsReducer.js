import { GET_PRODUCTS, SET_CATEGORY } from '../constants/ActionTypes';

const initialState = {
  products: [],
  category: '',
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
    default:
      return state;
  }
};
