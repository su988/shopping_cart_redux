import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsData } from '../api';
import { setProducts } from '../state/actions/productActions';
import { ProductCard } from './ProductCard';

export const ProductListing = () => {
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const getProductsData = async () => {
    const data = await fetchProductsData();
    return dispatch(setProducts(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  if (products.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ProductCard />
    </div>
  );
};
