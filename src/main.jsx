// import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/Routes';
import './index.css';

// fake APIs in development
import makeServer from './fakeAPIs/index';
if (import.meta.env.DEV) {
  makeServer();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRoutes />
  // use React.StrictMode to detect side effect in development - it is commented for submission only!
  // <React.StrictMode>
  //   <AppRoutes />
  // </React.StrictMode>
);
