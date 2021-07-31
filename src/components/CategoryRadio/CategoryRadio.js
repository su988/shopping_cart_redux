import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, RadioGroup, Stack, Radio } from '@chakra-ui/react';
import { setCategory } from '../../state/actions/productActions';

export const CategoryRadio = () => {
  const [value, setValue] = React.useState('all');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory(value));
  }, [value]);

  return (
    <>
      <Text>Filter by Category</Text>
      <RadioGroup onChange={setValue} value={value} colorScheme="teal">
        <Stack direction="column">
          <Radio value="all">All</Radio>
          <Radio value="women's clothing">Women's Cothing</Radio>
          <Radio value="men's clothing">Men's Clothing</Radio>
          <Radio value="jewelery">Jewelery</Radio>
          <Radio value="electronics">Electronics</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};
