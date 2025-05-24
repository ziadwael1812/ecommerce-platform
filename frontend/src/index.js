import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this imports tailwind base styles
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'; // Ensure this path is correct
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
