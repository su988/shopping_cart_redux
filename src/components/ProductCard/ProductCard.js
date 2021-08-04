import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Center, Image, Flex, Badge, Text } from '@chakra-ui/react';

import { mapCategoryToColors } from '../../utils/mapCategoryToColor';
import { AddToCartButton } from '../AddToCartButton';

export const ProductCard = ({ product }) => {
  return (
    <Box p="5" maxW="320px" borderWidth="1px" key={product.id} pos="relative">
      <Center>
        <Link to={`product/${product.id}`}>
          <Image
            borderRadius="md"
            src={product.image}
            boxSize="200px"
            fit="contain"
          />
        </Link>
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

      <Text mt={2} mb={6} fontSize="sm" color="gray.500" noOfLines={[1, 2, 3]}>
        {product.description}
      </Text>
      <AddToCartButton product={product} />
    </Box>
  );
};
