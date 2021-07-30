import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Box } from '@chakra-ui/react';
import { CartCard } from '../CartCard';

export const CartListing = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);

  const renderList = cart.map((product) => {
    return <CartCard key={product.id} product={product} />;
  });

  return (
    <>
      <Container mt="20" maxW="max-content">
        {cart.length === 0 ? <Box>Cart is Empty</Box> : renderList}
      </Container>
    </>
  );
};
