import React from 'react';
import { useDispatch } from 'react-redux';
import { Select } from '@chakra-ui/react';
import { sortByPrice } from '../../state/actions/productActions';

export const SortPrice = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(sortByPrice(e.target.value));
  };
  return (
    <Select
      placeholder="Sort by Price"
      mt={'4em'}
      maxW={40}
      color="teal"
      fontWeight="semibold"
      onChange={handleChange}
    >
      <option value="min">Low to High</option>
      <option value="max">High to Low</option>
    </Select>
  );
};
