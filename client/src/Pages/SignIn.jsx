import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useLoginMutation } from "../Services/api";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../Redux/UserReducer";
import { showAlert, setTokenWithExpiry } from "../Utils/Utils";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginApi] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      const res = await loginApi({
        email: formData.email,
        password: formData.password,
      });

      if (res.error) {
        return showAlert("error", "Something went wrong!", res.error.data.message);
      }

      dispatch(userLoggedIn(res.data.user));
      setTokenWithExpiry(res.data.token);
      showAlert("success", "Logged in successfully", "You have been logged in successfully");
      navigate("/");
    } catch (error) {
      showAlert("error", "Something went wrong!", error.data.message);
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue comparing products</p>
        </div>

        <div className="bg-white rounded-xl p-8 space-y-6 shadow-premium hover:shadow-premium-hover transition-shadow duration-300">
          {/* <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
              <FaGoogle className="text-blue-500" size={18} />
              <span className="font-medium">Continue with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
              <FaGithub className="text-gray-700" size={18} />
              <span className="font-medium">Continue with GitHub</span>
            </button>
          </div> */}

          {/* Divider */}
          {/* <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div> */}

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors pr-10" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="/forgot-password" className="font-medium text-blue-500 hover:text-blue-600">
                  Forgot password?
                </a>
              </div>
            </div> */}

            <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-[#2A3A6A] hover:to-[#4B8DFF] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-md">
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="font-medium text-blue-500 hover:text-blue-600 transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
