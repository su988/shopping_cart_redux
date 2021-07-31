import { GET_PRODUCTS, SET_CATEGORY } from '../constants/ActionTypes';

export const getProducts = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload,
  };
};

export const setCategory = (payload) => {
  return {
    type: SET_CATEGORY,
    payload,
  };
};
