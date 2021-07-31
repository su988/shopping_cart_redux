import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { cart, total } = useSelector((state) => state.cart);

  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });

    setTotalQty(total);
  }, [cart, total]);

  return (
    <Box
      h={'5em'}
      backgroundColor="teal"
      px="1em"
      pt="10px"
      pb="10px"
      position="fixed"
      minW="100%"
      zIndex="1"
      top="0"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link to="/">
          <Text fontWeight="bold" fontSize="2xl" color="white">
            Redux shop
          </Text>
        </Link>
        <Box>
          <Text fontSize="xl" as="span" color="white" fontWeight="bold">
            {totalQty}
          </Text>
          <Link to="/cart">
            <MdShoppingCart size="2em" color="white" />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
