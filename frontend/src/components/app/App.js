import { Routes, Route, Navigate } from "react-router-dom";

import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import { LoginPage, RequireAuth } from '../auth';
import NotFoundPage from './NotFoundPage';
import Layout from '../layout';
<<<<<<< HEAD
import RegistrationPage from '../auth/RegistrationPage/RegistrationPage';
import LandingPage from '../pages/LandingPage/LandingPage';
=======
import LandingPage from '../pages/pages/LandingPage';
import InfoProtePage from "../pages/pages/InfoProtePage";
import InfoAdopcionPage from "../pages/pages/InfoAdopcionPage"
import RegistrationPage from '../auth/RegistrationPage/RegitrationPage'

>>>>>>> adca56b0475dba962594830400093ccad7413721

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
        <Route index element={ <LandingPage />} />
        <Route path="new" element={<NewAdvertPage />} />
        <Route path=":advertId" element={<AdvertPage />} />
        <Route path="info-prote" element={<InfoProtePage />} />
        <Route path="info-adopcion" element={<InfoAdopcionPage />} />
<<<<<<< HEAD
=======

>>>>>>> adca56b0475dba962594830400093ccad7413721
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
