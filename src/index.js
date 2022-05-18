import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext, GlobalContextProvider } from './components/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);


