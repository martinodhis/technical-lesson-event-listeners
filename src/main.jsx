import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css'; // Assumes global/design styles are handled here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);