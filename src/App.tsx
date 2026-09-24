import { Navigate, Route, Routes } from "react-router";
import PublicRoute from "./guard/PublicRoute";
import LoginLanding from "./pages/auth/LoginLanding";
import RegisterLanding from "./pages/auth/RegisterLanding";
import ProtectedRoute from "./guard/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Payslips from "./pages/Payslips";
import Settings from "./pages/Settings";
import Layout from "./pages/Layout";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginLanding />} />
          <Route path="/register" element={<RegisterLanding />} />

          <Route
            path="/login/admin"
            element={
              <LoginForm
                role="admin"
                title="Admin Portal"
                subtitle="Sign in to manage the organization"
              />
            }
          />

          <Route
            path="/login/employee"
            element={
              <LoginForm
                role="employee"
                title="Employee Portal"
                subtitle="Sign in to accsess your account"
              />
            }
          />
        </Route>

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/payslips" element={<Payslips />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route path="/print/payslips/:id" element={<Payslips />} />
          <Route path="*" element={<Navigate to={"/dashboard"} replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
