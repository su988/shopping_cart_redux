import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsData } from '../api';
import { setProducts } from '../state/actions/productActions';

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

  return (
    <div>
      <div>Prodcut Listing</div>
    </div>
  );
};
