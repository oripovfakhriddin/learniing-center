import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminLayout from "./components/layouts/admin-layout";
import SuperAdminLayout from "./components/layouts/superadmin-layout";
import UserLayout from "./components/layouts/user-layout";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import VerificationPage from "./pages/Auth/VerificationPage";
import AboutPage from "./pages/User/AboutPage";
import ContactUsPage from "./pages/User/ContactUsPage";
import HomePage from "./pages/User/HomePage";
import OfflineCoursePage from "./pages/User/OfflineCoursePage";
import OnlineCoursePage from "./pages/User/OnlineCoursePage";
import SelfStudyPage from "./pages/User/SelfStudyPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactUsPage />} />
            <Route path="self-study" element={<SelfStudyPage />} />
            <Route path="offline-course" element={<OfflineCoursePage />} />
            <Route path="online-course" element={<OnlineCoursePage />} />
            <Route path="verification" element={<VerificationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route />
          </Route>
          <Route path="super-admin" element={<SuperAdminLayout />}>
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
