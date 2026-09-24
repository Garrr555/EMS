/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router";
import { EyeIcon, EyeOffIcon, UserPlus } from "lucide-react";
import { useAuthStore } from "../store/auth.store";
import { useState } from "react";
import CustomFetch from "../config/db";
import { toast } from "react-toastify"

type Props = {
  role?: string;
  title?: string;
  subtitle?: string;
};

const Register = ({ role, title, subtitle }: Props) => {
  const navigate = useNavigate();

  const { setTokenData } = useAuthStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    platform: "",
  });

  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await CustomFetch.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        platform: formData.platform,
      });
      console.log(response);
      if (response.status == 200) {
        setTokenData(response.data.user, response.data.token);
        navigate("/register");
        toast.success(response.data.message);
      } else {
        toast.error("Gagal Login");
      }
    } catch (error: any) {
      setError(error.response.data.error);
      if (error.response.status === 401) {
        toast.error("Anda bukan" + role);
      }
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex items-start justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md animate-fade-in">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-medium text-zinc-800">
              {title}
            </h1>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              {subtitle}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className=" ">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Name Employee
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
                placeholder="john smith"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className=" ">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Department Employee
              </label>
              <input
                type="text"
                value={formData.platform}
                onChange={handleChange}
                name="platform"
                required
                placeholder="john@example.com"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className=" ">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Employee
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
                placeholder="john@example.com"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className=" ">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password Employee
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  required
                  placeholder="****************"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPass ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-md text-sm font-semibold hover:from-indigo-700 hover:to-indigo-600 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-[0.98] flex items-center justify-center"
            >
              <UserPlus className="mx-2" /> Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
