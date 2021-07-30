import React from 'react';
import { Container } from '@chakra-ui/react';
import { ProductListing } from '../../components/ProductListing';

export const Home = () => {
  return (
    <Container centerContent="true" maxW="max-content" mt={10}>
      <ProductListing />
    </Container>
  );
};
