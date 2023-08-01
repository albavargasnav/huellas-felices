import { Routes, Route, Navigate } from 'react-router-dom';

import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import { LoginPage, RequireAuth } from '../auth';
import NotFoundPage from './NotFoundPage';
import Layout from '../layout';

function App() {
  return (
    <Routes>
      <Route
        path="/adverts"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route index element={<AdvertsPage />} />
        <Route path="new" element={<NewAdvertPage />} />
        <Route path=":advertId" element={<AdvertPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/404" element={<Layout />}>
        <Route index element={<NotFoundPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
