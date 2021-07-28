import axios from 'axios';

const URL = 'https://fakestoreapi.com/products';

export const fetchProductsData = async () => {
  const response = await axios.get(URL).catch((err) => console.log('Err', err));

  return response.data;
};
