import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Authentication from "../components/Auth/Authentication";
import Dashboard from "../pages/Dashboard/page";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🔐 Routes with MainLayout */}
      <Route element={<Authentication />}>
        <Route element={<MainLayout />}>
          {/* Add more layout-protected routes here */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Route>
      </Route>
      <Route path="/login" element={<>hello from login</>} />
      {/* 🪪 Public routes without layout */}

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
