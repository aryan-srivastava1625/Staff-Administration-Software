import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import './index.css';
import App from './App.jsx';
import AuthProvider from './context/AuthProvider.jsx';

localStorage.clear();


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
  </StrictMode>
);
