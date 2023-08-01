import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App from './components/app';
import { AuthProvider } from './components/auth/context';

const accessToken = storage.get('auth');
configureClient({ accessToken });

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider isInitiallyLogged={!!accessToken}>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);
