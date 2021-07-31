import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

export const CartTotal = ({ totalPrice }) => {
  return (
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
  );
};
