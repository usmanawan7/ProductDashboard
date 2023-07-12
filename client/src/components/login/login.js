import React from "react";
import { useLogin } from "./login.hooks";
export default function Login() {
  const { loginHandler, loginHandlerApi } = useLogin();

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-green-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline uppercase decoration-wavy">
          Login in
        </h1>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            // type="email"
            name="email"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={loginHandler}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-greem-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={loginHandler}
          />
        </div>
        <div className="mt-6">
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            onClick={loginHandlerApi}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
