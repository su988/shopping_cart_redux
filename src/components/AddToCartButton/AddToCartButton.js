import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
import { addToCart } from '../../state/actions/cartActions';

export const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    dispatch(addToCart(product));
  };

  useEffect(() => {
    if (isLoading) {
      let timer = setTimeout(() => setIsLoading(false), 200);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading]);
  return (
    <Button
      leftIcon={<MdShoppingCart />}
      colorScheme="teal"
      variant="solid"
      width="100%"
      pos="absolute"
      bottom="0"
      right="0"
      isLoading={isLoading}
      loadingText="Adding to Cart"
      onClick={handleClick}
    >
      Add to Cart
    </Button>
  );
};
