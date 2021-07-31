import {
  GET_PRODUCTS,
  SET_CATEGORY,
  SORT_BY_PRICE,
} from '../constants/ActionTypes';

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

export const sortByPrice = (payload) => {
  return {
    type: SORT_BY_PRICE,
    payload,
  };
};
