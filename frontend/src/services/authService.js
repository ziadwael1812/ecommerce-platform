import axios from 'axios';

const API_URL = '/api/auth/'; // Base URL for auth endpoints

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'signup', userData);
  // Note: Signup doesn't typically return user data or token directly.
  // It usually just confirms registration.
  return response.data; // This might be a message like { message: "User registered successfully!" }
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'signin', userData);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data)); // Store the whole user object from response
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  // No API call needed for simple JWT logout, just remove from local storage
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
