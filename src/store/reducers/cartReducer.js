const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addToCart':
      return state;
    case 'removeFromCart':
      return state;
    default:
      return state;
  }
};

export default cartReducer;
