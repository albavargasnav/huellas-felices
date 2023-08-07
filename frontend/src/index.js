import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App from './components/app';
import { AuthProvider } from './components/auth/context';

const jwt = storage.get('auth');
configureClient({ jwt });

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider isInitiallyLogged={!!jwt}>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);
