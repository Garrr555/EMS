import { Link } from "react-router";
import LoginLeftSide from "../../components/LoginLeftSide";
import { portalOptions } from "../../data/portalOptions";
import { ArrowRightIcon } from "lucide-react";

const LoginLanding = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in relative z-10">
          {/* Header */}
          <div className="md-10 text-center md:text-left">
            <h2 className="text-3xl font-medium text-slate-900 mb-3 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-slate-500">
              Select your portal to securly access the system
            </p>
          </div>

          {/* Portal List */}
          <div className="space-y-4">
            {portalOptions.map((option, i) => (
              <Link
                key={i}
                to={option.to}
                className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-400"
              >
                <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">
                  <h3 className="text-lg text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors">
                    {option.title}
                  </h3>
                  <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center md:text-left text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Peace. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
