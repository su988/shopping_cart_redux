import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SimpleGrid } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { fetchProductsData } from '../../api';
import { setProducts } from '../../state/actions/productActions';
import { ProductCard } from '../ProductCard';

export const ProductListing = () => {
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const getProductsData = async () => {
    const data = await fetchProductsData();
    return dispatch(setProducts(data));
  };

  useEffect(() => {
    if (products.length === 0) {
      getProductsData();
    }
  }, []);

  if (products.length === 0) {
    return <Text fontSize="4xl">Loading...</Text>;
  }

  return (
    <SimpleGrid columns={[1, 2, 4]} spacing="20px" mb={20}>
      <ProductCard />
    </SimpleGrid>
  );
};
