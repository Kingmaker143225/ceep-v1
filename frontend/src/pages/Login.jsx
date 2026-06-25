
import { useState } from "react";
import { useLocation } from "wouter";
import { LogIn } from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("student");

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!form.username || form.username.length < 3) {
      err.username = "Username is required";
    }
    if (!form.password || form.password.length < 4) {
      err.password = "Password is required";
    }
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    setErrors(err);

    if (Object.keys(err).length === 0) {
      try {
        const apiBaseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
        const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: form.username,
            password: form.password,
            role: activeTab,
          }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          sessionStorage.setItem("authToken", result.token);
          sessionStorage.setItem("user", JSON.stringify(result.user));

          if (activeTab === "student") {
            setLocation("/student-dashboard");
          } else {
            setLocation("/admin-dashboard");
          }
        } else {
          setErrors({ submit: result.message || "Invalid credentials" });
        }
      } catch (error) {
        console.error("Login error:", error);
        setErrors({ submit: "Connection failed. Please try again." });
      }
    }
  };

  const baseInput =
    "w-full h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500";

  const baseBtn =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-[#06254D] skew-y-[-5deg] -z-10"></div>

      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8 text-white">
          <h1 className="text-4xl font-serif font-bold mb-2">
            TG ECET-2026
          </h1>
          <p className="opacity-80">Official Examination Portal</p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden">

          {/* Tabs */}
          <div className="bg-gray-100 p-2 grid grid-cols-2">
            <button
              onClick={() => setActiveTab("student")}
              className={`py-2 rounded-md font-semibold ${
                activeTab === "student"
                  ? "bg-white shadow text-[#06254D]"
                  : "text-gray-600"
              }`}
            >
              Student Login
            </button>

            <button
              onClick={() => setActiveTab("admin")}
              className={`py-2 rounded-md font-semibold ${
                activeTab === "admin"
                  ? "bg-white shadow text-[#06254D]"
                  : "text-gray-600"
              }`}
            >
              Admin Login
            </button>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[#06254D]">
                  {activeTab === "student"
                    ? "Welcome Back"
                    : "System Administration"}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {activeTab === "student"
                    ? "Sign in to access your application"
                    : "Sign in to manage portal"}
                </p>
              </div>

              {errors.submit && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2.5 rounded-md text-center font-medium">
                  {errors.submit}
                </div>
              )}

              {/* Username */}
              <div>
                <label className="text-sm font-medium block mb-1">
                  {activeTab === "student"
                    ? "Registration No. / Email"
                    : "Admin ID"}
                </label>

                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder={
                    activeTab === "student"
                      ? "e.g. PGCET2026..."
                      : "admin@pgcet.ts"
                  }
                  className={baseInput}
                />

                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-medium">Password</label>
                  <a href="#" className="text-xs text-blue-600">
                    Forgot password?
                  </a>
                </div>

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={baseInput}
                />

                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className={`${baseBtn} w-full h-12 text-base bg-[#06254D] text-white hover:opacity-90`}
              >
                <LogIn className="w-5 h-5 mr-2" />
                Sign In
              </button>

            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2026 Telangana State Council of Higher Education.</p>
          <p>All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}