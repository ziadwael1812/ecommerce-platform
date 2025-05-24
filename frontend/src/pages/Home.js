import React from 'react';

const HomePage = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Welcome to E-Shop</h1>
      <p className="text-xl text-gray-700 mb-8">
        Your one-stop shop for the best products online.
      </p>
      <a
        href="/products"
        className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Shop Now
      </a>
    </div>
  );
};

export default HomePage;
