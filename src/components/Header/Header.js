import React from 'react';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { total } = useSelector((state) => state.cart);

  return (
    <Box h={20} px={4} pt={8} pb={8}>
      <Flex align="center">
        <Link to="/">
          <Text fontSize="2xl">Redux shop</Text>
        </Link>
        <Spacer />
        <Box>
          <Text
            fontSize="xl"
            padding="1"
            as="span"
            color="teal"
            fontWeight="bold"
          >
            {total}
          </Text>
          <Link to="/cart">
            <MdShoppingCart size="2em" />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
