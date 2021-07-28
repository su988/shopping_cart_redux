import React from 'react';
import { useSelector } from 'react-redux';

export const ProductCard = () => {
  const { products } = useSelector((state) => state.allProducts);

  console.log(products);

  const renderList = products?.map((product) => {
    return <div>{product.title}</div>;
  });

  return <div>{renderList}</div>;
};
