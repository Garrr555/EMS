import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30">
      <Sidebar />
      <main className="flex overflow-y-auto w-full">
        <div className="p-4 pt-16 sm:p-6 sm:pt-6 lg:p-8 mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
