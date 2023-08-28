import { Routes, Route, Navigate } from 'react-router-dom';

import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import { LoginPage, RequireAuth } from '../auth';
import NotFoundPage from './NotFoundPage';
import Layout from '../layout';
import LandingPage from '../pages/pages/LandingPage';
import InfoProtePage from "../pages/pages/InfoProtePage";
import InfoAdopcionPage from "../pages/pages/InfoAdopcionPage"
import RegistrationPage from '../auth/RegistrationPage/RegitrationPage'


function App() {
  return (
    <Routes>
      <Route
        path="/huellas-felices"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route index element={<LandingPage />} />
        <Route path="new" element={<NewAdvertPage />} />
        <Route path=":advertId" element={<AdvertPage />} />
        <Route path="info-prote" element={<InfoProtePage />} />
        <Route path="info-adopcion" element={<InfoAdopcionPage />} />

      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registrer" element={<RegistrationPage />} />
      <Route path="/404" element={<Layout />}>
        <Route index element={<NotFoundPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/huellas-felices" />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
