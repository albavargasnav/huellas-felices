import { Route, Routes, Navigate } from "react-router-dom";
import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import UserPage from "../users/UserPage/UserPage";
import { LoginPage, RequireAuth } from '../auth';
import NotFoundPage from './NotFoundPage';
import Layout from '../layout';
import RegistrationPage from '../auth/RegistrationPage/RegistrationPage';
import LandingPage from '../pages/pages/LandingPage';
import InfoProtePage from "../pages/pages/InfoProtePage";
import InfoAdopcionPage from "../pages/pages/InfoAdopcionPage";
import RecoveryPasswordPage from "../auth/RecoveryPasswordPage/RecoveryPasswordPage";
import GeneratePasswordPage from "../auth/GeneratePasswordPage/GeneratePasswordPage";

function App() {
  return (
    <Routes>
    <Route path="/adverts"element={<Layout />}>
      <Route index element={<AdvertsPage />} />
      <Route path="new" element={<NewAdvertPage /> } />
      <Route path=":advertId" element={<RequireAuth> <AdvertPage /></RequireAuth>}></Route>
      <Route path="info-prote" element={<InfoProtePage />} />
      <Route path="info-adopcion" element={<InfoAdopcionPage />} />
    </Route>
    <Route path="/users" element={<RequireAuth> <Layout /></RequireAuth>}>
      <Route path=":userId" element={<UserPage />} />
      <Route path="name/:name" element={<UserPage />} />
    </Route>
      <Route path="/login" element={<Layout />}>
        <Route index element={<LoginPage />} />
      </Route>
      <Route path="/register" element={<Layout />}>
        <Route index element={<RegistrationPage />} />
      </Route>
    <Route path="/recoverypassword" element={<RecoveryPasswordPage />} />
    <Route path="/generatepassword" element={<GeneratePasswordPage />} />
    



    <Route path="/404" element={<Layout />}>
      <Route index element={<NotFoundPage />} />
    </Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<LandingPage />} />
    </Route>
    <Route path="/contacto" element={<Layout />}>
      <Route index element={<InfoProtePage />} />
    </Route>
    <Route path="/info-adopcion" element={<Layout />}>
      <Route index element={<InfoAdopcionPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/404" />} />
  </Routes>
  
);
}
export default App;