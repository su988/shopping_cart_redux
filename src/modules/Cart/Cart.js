import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { CartListing } from '../../components/CartListing';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

export const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    setTotalPrice(calcTotalPrice(cart));
  }, [cart]);

  return (
    <Box mt="9em" mb="4em">
      <CartListing totalPrice={totalPrice} cart={cart} />
    </Box>
  );
};
