import { combineReducers } from 'redux';
// import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

const reducers = combineReducers({
  // cart: cartReducer,
  allProducts: productsReducer,
});

export default reducers;
