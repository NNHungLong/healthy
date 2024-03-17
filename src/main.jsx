import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/Routes';
import './index.css';

// fake APIs in development
import makeServer from './fakeAPIs/index';
if (import.meta.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
