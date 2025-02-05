"use client";
import React, { useState } from "react";

const General = () => {
  // const [hospitalName, setHospitalName] = useState("Hindsvaasthseva");
  const [contactEmail, setContactEmail] = useState(
    "contact@hindsvaasthseva.com"
  );
  const [contactNumber, setContactNumber] = useState("+911234567890");
  // const [timeZone, setTimeZone] = useState("Asia/Kolkata (IST)");
  const [theme, setTheme] = useState("Light");
  const [fontSize, setFontSize] = useState("Small");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Notifications
            </label>
            <input
              type="text"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              SMS Alerts
            </label>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Two-Factor Authentication
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>Enable 2FA</option>
              <option>Disable 2FA</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Change Password
            </label>
            <input
              type="password"
              placeholder="Update Password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Appearance</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Theme
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Font Size
            </label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Integrations</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              WhatsApp Integration
            </label>
            <button className="mt-1 px-4 py-2 bg-blue-500 text-white rounded-md">
              Connect WhatsApp Business API
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment Gateway
            </label>
            <button className="mt-1 px-4 py-2 bg-green-500 text-white rounded-md">
              Configure payment methods
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default General;
