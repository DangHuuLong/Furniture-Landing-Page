import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import { CartProvider } from "./contexts/CartContext";
import { ToastProvider } from './contexts/ToastContext';
import ToastContainer from './components/ToastContainer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <CartProvider>
        <App />
      </CartProvider>
      <ToastContainer />
    </ToastProvider>
  </StrictMode>,
)
