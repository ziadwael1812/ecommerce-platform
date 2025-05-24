import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductsPage from './pages/Products'; // Renamed for clarity
import CartPage from './pages/Cart'; // Renamed for clarity
import LoginPage from './pages/Login'; // Renamed for clarity
import RegisterPage from './pages/Register'; // Renamed for clarity
// import ProfilePage from './pages/Profile'; // Example for future profile page
// import OrderHistoryPage from './pages/OrderHistory'; // Example for future order history

import { loginSuccess } from './store/authSlice'; // To rehydrate auth state

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user and token are in localStorage and rehydrate auth state
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    if (user && token) {
      dispatch(loginSuccess({ user, token })); // Dispatch loginSuccess with stored user and token
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Add other routes here e.g., Profile, Order History, Admin Dashboard */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
