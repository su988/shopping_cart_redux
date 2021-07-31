import React from 'react';
import { Container, Box, Flex } from '@chakra-ui/react';
import { CartCard } from '../CartCard';
import { CartTotal } from '../CartTotal';
import { CartEmpty } from '../CartEmpty/CartEmpty';

export const CartListing = ({ cart, totalPrice }) => {
  const renderList = cart.map((product) => {
    return <CartCard key={product.id} product={product} />;
  });

  return (
    <>
      <Container mt="20" maxW="max-content">
        {cart.length === 0 ? (
          <CartEmpty />
        ) : (
          <Flex>
            <Box mb="10">{renderList}</Box>
            <CartTotal totalPrice={totalPrice} />
          </Flex>
        )}
      </Container>
    </>
  );
};
