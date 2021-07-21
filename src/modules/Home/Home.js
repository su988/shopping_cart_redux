import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store';

export const Home = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { addToCart, removeFromCart } = bindActionCreators(
    actionCreators,
    dispatch,
  );

  console.log(cart);
  return (
    <div>
      <h1>this is home</h1>
    </div>
  );
};
