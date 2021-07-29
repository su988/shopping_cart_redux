import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  Button,
} from '@chakra-ui/react';
import { mapCategoryToColors } from '../utils/mapCategoryToColor';
import { MdShoppingCart } from 'react-icons/md';

export const ProductCard = () => {
  const { products } = useSelector((state) => state.allProducts);

  console.log(products);

  const renderList = products?.map((product) => {
    return (
      <Box p="5" maxW="320px" borderWidth="1px" key={product.id}>
        <Center>
          <Image
            borderRadius="md"
            src={product.image}
            boxSize="200px"
            fit="contain"
          />
        </Center>
        <Flex align="baseline" mt={2}>
          <Badge colorScheme={mapCategoryToColors[product.category]}>
            {product.category}
          </Badge>
        </Flex>
        <Text mt={2} fontSize="l" fontWeight="semibold" lineHeight="short">
          {product.title}
        </Text>
        <Text mt={2} fontSize="lg">
          ${product.price}
        </Text>
        <Text mt={2} fontSize="sm" color="gray.500" isTruncated noOfLines={3}>
          {product.description}
        </Text>
        <Button
          leftIcon={<MdShoppingCart />}
          colorScheme="teal"
          variant="solid"
          mt={4}
          width="100%"
        >
          Add to Cart
        </Button>
      </Box>
    );
  });

  return <div>{renderList}</div>;
};
