/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth.store";
import type { UserType } from "../types/type";
import Loading from "../components/Loading";
import AdminDashboard from "../components/AdminDashboard";
import EmployeeDashboard from "../components/EmployeeDashboard";

const Dashboard = () => {
  const { user } = useAuthStore();
  const [data, setData] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(user);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loading />;
  if (!data)
    return (
      <p className="text-center text-slate-500">Failed to load dashboard</p>
    );
  if (user?.role === "admin") {
    return <AdminDashboard {...data} />;
  } else {
    return <EmployeeDashboard {...data} />;
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
