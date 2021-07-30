import { SET_PRODUCTS } from '../constants/ActionTypes';

export const setProducts = (payload) => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};
