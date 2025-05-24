import axios from 'axios';

const API_URL = '/api/orders/';

const createOrder = (orderData, token) => {
  return axios.post(API_URL, orderData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getMyOrders = (token) => {
  return axios.get(API_URL + 'my-orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Add other order service methods if needed

const orderService = {
  createOrder,
  getMyOrders,
};

export default orderService;
