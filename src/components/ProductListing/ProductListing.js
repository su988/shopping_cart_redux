import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { ProductCard } from '../ProductCard';

export const ProductListing = ({ products }) => {
  const renderList = products.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  return (
    <>
      <SimpleGrid columns={[1, 2, 4]} spacing="20px" mb={20}>
        {renderList}
      </SimpleGrid>
    </>
  );
};
