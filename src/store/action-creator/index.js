export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };
};

export const removeFromCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });
  };
};
