export const sortProducts = (products, sortBy) => {
  if (sortBy === 'min') {
    return products.sort((a, b) => a.price - b.price);
  }

  if (sortBy === 'max') {
    return products.sort((a, b) => b.price - a.price);
  }

  return products;
};
