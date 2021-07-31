import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Box, Container, Text } from '@chakra-ui/react';
import { ProductListing } from '../../components/ProductListing';
import { fetchProductsData } from '../../api';
import { getProducts } from '../../state/actions/productActions';
import { CategoryRadio } from '../../components/CategoryRadio';
import { filterByCategory } from '../../utils/filterByCategory';
import { SortPrice } from '../../components/SortPrice/SortPrice';
import { sortProducts } from '../../utils/sortByPrice';

export const Home = () => {
  const productsFromStore = useSelector((state) => state.allProducts.products);
  const { category, sortBy } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(productsFromStore);

  const getProductsData = async () => {
    const data = await fetchProductsData();
    return dispatch(getProducts(data));
  };

  useEffect(() => {
    if (products.length === 0) {
      getProductsData();
    }
  }, []);

  useEffect(() => {
    setProducts(productsFromStore);
  }, [productsFromStore]);

  useEffect(() => {
    setProducts(
      sortProducts(filterByCategory(productsFromStore, category), sortBy),
    );
  }, [category, sortBy]);

  if (products.length === 0) {
    return <Text fontSize="4xl">Loading...</Text>;
  }

  return (
    <Container centerContent="true" maxW="max-content" mt={40}>
      <Flex>
        <Box minW="200px" position="fixed">
          <CategoryRadio />
          <SortPrice />
        </Box>
        <Box ml="15em">
          <ProductListing products={products} />
        </Box>
      </Flex>
    </Container>
  );
};
