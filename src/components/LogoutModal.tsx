import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/auth.store";
import { toast } from "react-toastify";

type LogoutModalProps = {
  setLogoutOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogoutModal = ({ setLogoutOpen }: LogoutModalProps) => {
  const { removeTokenData } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeTokenData();
    toast.success("Logout Berhasil");
    navigate("/login");
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-slate-900 shadow-2xl">
        {/* Icon */}
        <div className="p-6 pb-4">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-500/10 ring-1 ring-rose-500/20">
            <LogOutIcon className="h-6 w-6 text-rose-400" />
          </div>

          <h2 className="text-base font-semibold text-white">Log Out</h2>

          <p className="mt-2 text-[13px] leading-5 text-slate-400">
            Are you sure you want to log out of your account? You will need to
            sign in again to access your account.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 border-t border-white/6 p-4">
          <button
            onClick={() => setLogoutOpen(false)}
            className="rounded-md border border-white/10 px-4 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md bg-rose-500 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-rose-600"
          >
            <LogOutIcon className="h-4 w-4" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
