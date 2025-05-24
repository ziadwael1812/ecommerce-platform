import axios from 'axios';

const API_URL = '/api/products/';

const getProducts = () => {
  return axios.get(API_URL);
};

// Add other product service methods like getProductById, createProduct etc. if needed

const productService = {
  getProducts,
};

export default productService;
