import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart, selectCartItems, selectCartTotal } from '../store/cartSlice';

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  if (cartItems.length === 0) {
    return <p className="text-center text-xl mt-10">Your cart is empty.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
            <div className="flex items-center">
              <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                className="w-16 text-center border rounded py-1 px-2 mr-4"
                min="1"
              />
              <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Total: ${cartTotal.toFixed(2)}</h2>
          <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 mr-2">
            Clear Cart
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;