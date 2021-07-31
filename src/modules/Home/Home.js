import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery, Flex, Box, Container } from '@chakra-ui/react';
import { ProductListing } from '../../components/ProductListing';
import { fetchProductsData } from '../../api';
import { getProducts } from '../../state/actions/productActions';
import { CategoryRadio } from '../../components/CategoryRadio';
import { filterByCategory } from '../../utils/filterByCategory';
import { SortPrice } from '../../components/SortPrice/SortPrice';
import { sortProducts } from '../../utils/sortByPrice';
import { ProductLoadingSpinner } from '../../components/ProductLoadingSpinner/ProductLoadingSpinner';

export const Home = () => {
  const productsFromStore = useSelector((state) => state.allProducts.products);
  const { category, sortBy } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(productsFromStore);
  const [isMobileView] = useMediaQuery('(max-width: 990px)');

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

  return (
    <Container centerContent="true" maxW="max-content" mt="9em">
      {products.length === 0 ? (
        <ProductLoadingSpinner />
      ) : (
        <Flex direction={isMobileView ? 'column' : 'row'}>
          <Box position={isMobileView ? null : 'fixed'}>
            <CategoryRadio />
            <SortPrice />
          </Box>
          <Box
            ml={{ md: '0', lg: '15em' }}
            mt={{ base: '2em', md: '0', lg: '0' }}
          >
            <ProductListing products={products} />
          </Box>
        </Flex>
      )}
    </Container>
  );
};
