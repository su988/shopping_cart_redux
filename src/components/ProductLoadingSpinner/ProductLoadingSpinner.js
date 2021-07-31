import React from 'react';
import { CircularProgress } from '@chakra-ui/react';

export const ProductLoadingSpinner = () => {
  return (
    <>
      <CircularProgress
        isIndeterminate
        color="teal"
        size="100px"
        mt={40}
        thickness="8px"
      />
    </>
  );
};
