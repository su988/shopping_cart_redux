import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Text, Box, Flex, Image } from '@chakra-ui/react';
import { IoMdArrowRoundBack } from 'react-icons/io';

export const CartEmpty = () => {
  return (
    <Box textAlign="center">
      <Flex>
        <Text fontWeight="bold" color="teal" mb="2em" fontSize="2xl" mr="1em">
          Cart is empty
        </Text>
        <Link to="/">
          <Button leftIcon={<IoMdArrowRoundBack />} colorScheme="teal">
            Go Back
          </Button>
        </Link>
      </Flex>

      <Image src="/empty-cart.png" />
    </Box>
  );
};
