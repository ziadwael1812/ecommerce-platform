import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  total: JSON.parse(localStorage.getItem('cartTotal')) || 0,
};

const saveCartToLocalStorage = (cartItems, total) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('cartTotal', JSON.stringify(total));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      saveCartToLocalStorage(state.cartItems, state.total);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      saveCartToLocalStorage(state.cartItems, state.total);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }

      state.total = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      saveCartToLocalStorage(state.cartItems, state.total);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
      saveCartToLocalStorage(state.cartItems, state.total);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotal = (state) => state.cart.total;

export default cartSlice.reducer;