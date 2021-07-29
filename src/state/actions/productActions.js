import { SET_PRODUCTS } from '../constants/ActionTypes';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
