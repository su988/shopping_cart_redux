import React from 'react';
import { Link } from 'react-router-dom';
import { Text, useMediaQuery, Container, Box, Flex } from '@chakra-ui/react';
import { CartCard } from '../CartCard';
import { CartTotal } from '../CartTotal';
import { CartEmpty } from '../CartEmpty/CartEmpty';

export const CartListing = ({ cart, totalPrice }) => {
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1280px)');
  const [isSmallerThan920] = useMediaQuery('(max-width: 920px)');

  const renderList = cart.map((product) => {
    return (
      <CartCard
        key={product.id}
        product={product}
        isSmallerThan920={isSmallerThan920}
      />
    );
  });

  return (
    <>
      <Container maxW="max-content">
        {cart.length === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <Text>
              <Link to="/">Home</Link> {'>'} Cart
            </Text>
            <Flex
              direction={isSmallerThan1200 ? 'column' : 'row'}
              alignItems={isSmallerThan1200 ? 'center' : 'start'}
            >
              <Box mb="10">{renderList}</Box>
              <CartTotal
                totalPrice={totalPrice}
                isSmallerThan1200={isSmallerThan1200}
              />
            </Flex>
          </>
        )}
      </Container>
    </>
  );
};
