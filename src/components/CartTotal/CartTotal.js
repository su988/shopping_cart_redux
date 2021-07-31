import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

export const CartTotal = ({ totalPrice, isSmallerThan1200 }) => {
  return (
    <Box
      w={isSmallerThan1200 ? '100%' : '300px'}
      maxH="200px"
      ml={isSmallerThan1200 ? '0' : '2em'}
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
  );
};
