import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  Button,
} from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
import { mapCategoryToColors } from '../../utils/mapCategoryToColor';
import { addToCart } from '../../state/actions/cartActions';

export const ProductCard = () => {
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const renderList = products?.map((product) => {
    return (
      <Box p="5" maxW="320px" borderWidth="1px" key={product.id} pos="relative">
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
        <Text mt={2} fontSize="lg" align="right">
          ${product.price}
        </Text>

        <Text
          mt={2}
          mb={6}
          fontSize="sm"
          color="gray.500"
          noOfLines={[1, 2, 3]}
        >
          {product.description}
        </Text>
        <Button
          leftIcon={<MdShoppingCart />}
          colorScheme="teal"
          variant="solid"
          width="100%"
          pos="absolute"
          bottom="0"
          left="0"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </Box>
    );
  });

  return <>{renderList}</>;
};
