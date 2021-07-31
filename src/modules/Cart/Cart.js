import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { CartListing } from '../../components/CartListing';

export const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.price * item.quantity;
    });

    setTotalPrice(price.toFixed(2));
  }, [cart]);

  return (
    <Box mt="40">
      <CartListing totalPrice={totalPrice} cart={cart} />
    </Box>
  );
};
