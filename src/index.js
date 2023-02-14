//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import CartProvider from "./context/cartContext"

//Estilos
import './index.css';
//Componentes
import App from './App';
//Core



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <App></App>
    </CartProvider>
  </React.StrictMode>
);
