import LandingPageComponentPage from "../pages/LandingPageComponentPage";
import { Route, Routes } from "react-router-dom";
import DashboardHomepage from "../pages/DashboardHomepage";
import Modal from "../component/Auth/Modal";
import AdminSignUpPage from "../pages/AdminSignUppage";
import TrackPage from "../pages/TrackPage";
const Approute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageComponentPage />} />
      <Route path="/auth/*" element={<Modal />} />
      <Route path="/dashboard" element={<DashboardHomepage />} />
      <Route path="/admin-signup" element={<AdminSignUpPage />} />
      <Route path="/track/:email" element={<TrackPage />} />
    </Routes>
  );
};
export default Approute;
