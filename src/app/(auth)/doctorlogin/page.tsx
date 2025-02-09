"use client"
import { isDoctorLoggedIn } from "@/functions/doctorauth";
import { useRouter } from "next/navigation";
import React from "react";

const DoctorLogin: React.FC = () => {
  const router = useRouter();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    async function authCheck() {
      const res = await isDoctorLoggedIn();
      if (res) {
        localStorage.setItem("isDoctorLoggedIn", "true");
        router.push("/doctor");
      }
    }
    authCheck();
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-8">
          Doctor Login
        </h2>
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
