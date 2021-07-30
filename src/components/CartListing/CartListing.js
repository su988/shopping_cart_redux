import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Box, Flex, Text, Button } from '@chakra-ui/react';
import { CartCard } from '../CartCard';

export const CartListing = () => {
  const { cart } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.price * item.quantity;
    });

    setTotalPrice(price.toFixed(2));
  }, [cart]);

  const renderList = cart.map((product) => {
    return <CartCard key={product.id} product={product} />;
  });

  return (
    <>
      <Container mt="20" mb="20" maxW="max-content">
        {cart.length === 0 ? (
          <Box>Cart is Empty</Box>
        ) : (
          <Flex>
            <Box>{renderList}</Box>
            <Box
              w="300px"
              maxH="200px"
              ml="2em"
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              p="2em"
            >
              <Flex justifyContent="space-between">
                <Text fontSize="2xl" color="gray">
                  Total:
                </Text>
                <Text fontSize="2xl" color="teal" fontWeight="bold">
                  ${totalPrice}
                </Text>
              </Flex>
              <Button colorScheme="teal" variant="solid" width="100%" mt="4em">
                Checkout
              </Button>
            </Box>
          </Flex>
        )}
      </Container>
    </>
  );
};
