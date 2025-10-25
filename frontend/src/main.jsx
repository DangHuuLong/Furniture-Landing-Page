import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import { CartProvider } from "./contexts/CartContext";
import { ToastProvider } from './contexts/ToastContext';
import ToastContainer from '../components/ToastContainer.jsx';
import { ComparisonProvider } from './contexts/ComparisonContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <ComparisonProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ComparisonProvider>
      <ToastContainer />
    </ToastProvider>
  </StrictMode>,
)
