import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Flex, Text, Image, Box, useMediaQuery } from '@chakra-ui/react';
import { AddToCartButton } from '../../components/AddToCartButton';

export const Product = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');

  useEffect(() => {
    setSelectedProduct(
      JSON.parse(localStorage.getItem('products')).find(
        (item) => item.id === parseInt(id),
      ),
    );
  }, [id]);

  return (
    <Flex
      p="1em"
      mt="9em"
      mb="1em"
      direction={isSmallerThan500 ? 'column' : 'row'}
      justifyContent="center"
    >
      <Image
        borderRadius="md"
        src={selectedProduct?.image}
        boxSize="300px"
        fit="contain"
        mr={isSmallerThan500 ? '0' : '3em'}
        mb={isSmallerThan500 ? '3em' : 0}
        alignSelf="center"
      />
      <Box pos="relative" maxW={'30em'}>
        <Text fontSize="2xl" mb="1em">
          {selectedProduct?.title}
        </Text>
        <Text fontSize="xl" fontWeight="semibold" color="teal" mb="1em">
          ${selectedProduct?.price}
        </Text>
        <Text mb="5em">{selectedProduct?.description}</Text>
        <AddToCartButton product={selectedProduct} />
      </Box>
    </Flex>
  );
};
