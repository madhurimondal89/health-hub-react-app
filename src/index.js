// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS styles
import App from './App'; // Your main App component

// This is the entry point of your React application.
// It finds the 'root' div in your public/index.html file.
const root = ReactDOM.createRoot(document.getElementById('root'));

// It then tells React to render your main <App /> component inside that div.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);