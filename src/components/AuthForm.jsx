import React, { useState, useEffect } from "react";
import {
  Lock,
  Mail,
  Phone,
  User,
  Landmark,
  Building2,
  BadgeIndianRupee,
} from "lucide-react";
import rxpressWhite from "../assets/rxpress-white.png";

export default function AuthForm() {
  const [active, setActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    gstin: "",
    companyName: "",
    pan: "",
    tan: "",
    tanHolder: "",
    whatsapp: "",
    alternate: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", registerData);
  };

  // Mobile View
  if (isMobileView) {
    return (
      <div className="w-full max-w-md mx-auto p-4">
        {!active ? (
          // Mobile Login Form
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-center mb-4">
              <img src={rxpressWhite} alt="RxPress Logo" className="h-12" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-6">
              Welcome Back!
            </h1>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    onChange={handleLoginChange}
                    className="w-full p-3 border rounded-lg pl-10"
                    placeholder="Enter your username"
                    required
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="w-full p-3 border rounded-lg pl-10"
                    placeholder="Enter your password"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <a href="#" className="text-sm text-blue-600">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
              >
                Login
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                New Here?{" "}
                <button
                  onClick={() => setActive(true)}
                  className="text-blue-600 font-medium"
                >
                  Create an account
                </button>
              </p>
            </div>
          </div>
        ) : (
          // Mobile Registration Form
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-center mb-4">
              <img src={rxpressWhite} alt="RxPress Logo" className="h-12" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-6">
              Create Account
            </h1>
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              {/* Inputs */}
              {[
                {
                  name: "companyName",
                  placeholder: "Your company/firm name",
                  icon: <Building2 />,
                },
                {
                  name: "gstin",
                  placeholder: "Your GSTIN number",
                  icon: <Landmark />,
                },
                {
                  name: "pan",
                  placeholder: "Your PAN number",
                  icon: <BadgeIndianRupee />,
                },
                {
                  name: "tan",
                  placeholder: "Your TAN number",
                  icon: <BadgeIndianRupee />,
                },
                {
                  name: "tanHolder",
                  placeholder: "TAN holder's name",
                  icon: <User />,
                },
                {
                  name: "whatsapp",
                  placeholder: "Your WhatsApp number",
                  icon: <Phone />,
                },
                {
                  name: "alternate",
                  placeholder: "Alternate contact number (Optional)",
                  icon: <Phone />,
                },
                {
                  name: "email",
                  placeholder: "Your email address",
                  icon: <Mail />,
                  type: "email",
                },
                {
                  name: "password",
                  placeholder: "Create a password",
                  icon: <Lock />,
                  type: "password",
                },
              ].map((field) => (
                <div key={field.name}>
                  <div className="relative">
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={registerData[field.name]}
                      onChange={handleRegisterChange}
                      required={field.name !== "alternate"}
                      className="w-full p-3 border rounded-lg pl-10"
                      placeholder={field.placeholder}
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      {field.icon}
                    </span>
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium mt-4"
              >
                Register
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => setActive(false)}
                  className="text-blue-600 font-medium"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop View
  return (
    <div className="relative w-[850px] h-[550px] bg-white m-5 rounded-3xl shadow-xl overflow-hidden">
      {/* Registration Form */}
      <div
        className={`absolute left-0 w-1/2 h-full bg-white flex items-center text-center p-10 z-[1] transition-all duration-[1.8s] ease-in-out delay-[1.2s] overflow-hidden ${
          active
            ? "pointer-events-auto opacity-100 translate-x-0"
            : "pointer-events-none opacity-0 -translate-x-full"
        }`}
      >
        <form className="w-full" onSubmit={handleRegisterSubmit}>
          <div className="flex justify-center mb-6">
            <img src={rxpressWhite} alt="RxPress Logo" className="h-16" />
          </div>
          <h1 className="text-3xl font-semibold mb-4 text-center">
            Registration
          </h1>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-left">
            {[
              { name: "gstin", placeholder: "GSTIN", icon: <Landmark /> },
              {
                name: "companyName",
                placeholder: "Company/Firm Name",
                icon: <Building2 />,
              },
              { name: "pan", placeholder: "PAN", icon: <BadgeIndianRupee /> },
              { name: "tan", placeholder: "TAN", icon: <BadgeIndianRupee /> },
              {
                name: "tanHolder",
                placeholder: "TAN Holder Name",
                icon: <User />,
              },
              {
                name: "whatsapp",
                placeholder: "Whatsapp No.",
                icon: <Phone />,
              },
              {
                name: "alternate",
                placeholder: "Alternate No.",
                icon: <Phone />,
              },
              {
                name: "email",
                placeholder: "Gmail",
                icon: <Mail />,
                type: "email",
              },
            ].map((field) => (
              <div className="relative" key={field.name}>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={registerData[field.name]}
                  onChange={handleRegisterChange}
                  required={!["alternate"].includes(field.name)}
                  className="w-full py-2.5 px-4 pr-12 bg-gray-100 rounded-lg outline-none text-sm text-gray-700"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500">
                  {field.icon}
                </span>
              </div>
            ))}
            <div className="col-span-2 relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
                className="w-full py-2.5 px-4 pr-12 bg-gray-100 rounded-lg outline-none text-sm text-gray-700"
              />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-11 mt-6 bg-blue-800 rounded-lg text-white font-semibold text-sm shadow-md"
          >
            Register
          </button>
        </form>
      </div>

      {/* Login Form */}
      <div
        className={`absolute right-0 w-1/2 h-full bg-white flex items-center text-center p-10 z-[1] transition-all duration-[1.8s] ease-in-out delay-[1.2s] ${
          active
            ? "pointer-events-none opacity-0 translate-x-full"
            : "pointer-events-auto opacity-100 translate-x-0"
        }`}
      >
        <form className="w-full" onSubmit={handleLoginSubmit}>
          <div className="flex justify-center mb-6">
            <img src={rxpressWhite} alt="RxPress Logo" className="h-16" />
          </div>
          <h1 className="text-3xl font-semibold mb-4">Login</h1>
          <div className="relative my-5">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleLoginChange}
              required
              className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-sm text-gray-700"
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
          <div className="relative my-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
              className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-sm text-gray-700"
            />
            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
          <div className="text-left text-sm text-gray-600 mb-4">
            <a href="#">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full h-11 bg-blue-800 rounded-lg text-white font-semibold text-sm shadow-md"
          >
            Login
          </button>
        </form>
      </div>

      {/* Toggle Panel */}
      <div className="absolute w-full h-full z-[2] pointer-events-none overflow-hidden">
        <div
          className={`absolute left-[-250%] w-[300%] h-full bg-blue-800 rounded-[150px] z-[2] transition-all duration-[1800ms] ease-in-out ${
            active ? "!left-1/2" : ""
          }`}
        >
          {/* Left Panel */}
          <div
            className={`absolute w-1/2 h-full flex flex-col justify-center items-center text-white transition-opacity duration-500 ease-in-out ${
              active ? "opacity-0" : "opacity-100 delay-[1200ms]"
            } left-0`}
          >
            <img src={rxpressWhite} alt="RxPress Logo" className="h-16 mb-4" />
            <h1 className="text-3xl font-semibold">New Here?</h1>
            <p className="mb-5">Create an account to get started</p>
          </div>

          {/* Right Panel */}
          <div
            className={`absolute w-1/2 h-full flex flex-col justify-center items-center text-white transition-opacity duration-500 ease-in-out ${
              active ? "opacity-100 delay-[1200ms]" : "opacity-0"
            } right-0`}
          >
            <img src={rxpressWhite} alt="RxPress Logo" className="h-16 mb-4" />
            <h1 className="text-3xl font-semibold">Welcome Back!</h1>
            <p className="mb-5">Already have an account?</p>
          </div>
        </div>

        {/* Buttons */}
        {!active ? (
          <div className="absolute w-1/2 h-full flex flex-col justify-center items-center z-[3] left-0 pointer-events-auto text-center text-white">
            <img src={rxpressWhite} alt="RxPress Logo" className="h-16 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">New Here?</h2>
            <p className="mb-4">Sign up and start your journey with us.</p>
            <button
              className="w-[160px] h-[46px] border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition"
              onClick={() => setActive(true)}
            >
              Register
            </button>
          </div>
        ) : (
          <div className="absolute w-1/2 h-full flex flex-col justify-center items-center z-[3] right-0 pointer-events-auto text-center text-white">
            <img src={rxpressWhite} alt="RxPress Logo" className="h-16 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Welcome Back!</h2>
            <p className="mb-4">Already have an account? Login here.</p>
            <button
              className="w-[160px] h-[46px] border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition"
              onClick={() => setActive(false)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
