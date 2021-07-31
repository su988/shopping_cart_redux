export const filterByCategory = (products, category) => {
  return products.filter((item) =>
    category === 'all' ? item : item.category === category,
  );
};
