import React, { useState } from "react";
import {
  User,
  Lock,
  Mail,
  Github,
  Linkedin,
  Facebook,
  GanttChartSquare as Google,
} from "lucide-react";

export default function AuthForm() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-[850px] h-[550px] bg-white m-5 rounded-3xl shadow-xl overflow-hidden">
      {/* Registration Form (Now on LEFT) */}
      {active && (
        <div className="absolute left-0 w-1/2 h-full bg-white flex items-center text-center p-10 z-[1] transition-all duration-[1.8s] ease-in-out delay-[1.2s] ">
          <form className="w-full">
            <h1 className="text-3xl font-semibold mb-2">Registration</h1>
            <div className="relative my-6">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-base text-gray-700"
              />
              <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            <div className="relative my-6">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-base text-gray-700"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            <div className="relative my-6">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-base text-gray-700"
              />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-blue-800 rounded-lg text-white font-semibold text-base shadow-md"
            >
              Register
            </button>
            <p className="text-sm my-4">or register with social platforms</p>
            <div className="flex justify-center gap-3">
              {[Google, Facebook, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex p-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </form>
        </div>
      )}

      {/* Login Form (Now on RIGHT) */}
      {!active && (
        <div className="absolute w-1/2 h-full bg-white flex items-center text-center p-10 z-[1] transition-all duration-[1.8s] ease-in-out delay-[1.2s] !right-0">
          <form className="w-full">
            <h1 className="text-3xl font-semibold mb-2">Login</h1>
            <div className="relative my-6">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-base text-gray-700"
              />
              <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            <div className="relative my-6">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-base text-gray-700"
              />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            <div className="text-left text-sm text-gray-600 mb-4">
              <a href="#">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-blue-800 rounded-lg text-white font-semibold text-base shadow-md"
            >
              Login
            </button>
            <p className="text-sm my-4">or login with social platforms</p>
            <div className="flex justify-center gap-3">
              {[Google, Facebook, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex p-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </form>
        </div>
      )}

      {/* Toggle Panel */}
      <div className="absolute w-full h-full z-[2]">
        <div
          className={`absolute left-[-250%] w-[300%] h-full bg-blue-800 rounded-[150px] z-[2] transition-left duration-[1800ms] ease-in-out ${
            active ? "!left-1/2" : ""
          }`}
        ></div>

        {/* Panel content */}
        {!active ? (
          <div className="absolute w-1/2 h-full flex flex-col justify-center items-center text-white z-[2] transition-all duration-500 ease-in-out left-0 delay-[1200ms]">
            <h1 className="text-3xl font-semibold">New Here?</h1>
            <p className="mb-5">Create an account to get started</p>
            <button
              className="w-[160px] h-[46px] border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition"
              onClick={() => setActive(true)}
            >
              Register
            </button>
          </div>
        ) : (
          <div className="absolute w-1/2 h-full flex flex-col justify-center items-center text-white z-[2] transition-all duration-500 ease-in-out right-0 delay-[1200ms]">
            <h1 className="text-3xl font-semibold">Welcome Back!</h1>
            <p className="mb-5">Already have an account?</p>
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
