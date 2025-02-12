import React from 'react';
import { Home, Calendar, Users, BarChart, Settings } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="md:w-48 lg:w-64 h-screen bg-white shadow-md flex flex-col absolute">
      {/* Logo */}
      <div className="p-4 text-2xl font-bold text-center border-b text-black">Logo</div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-4">
        <Link href="/dashboard" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Home className="w-5 h-5 mr-3" /> Home
        </Link>
        <Link href="/appointments" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Calendar className="w-5 h-5 mr-3" /> Appointments
        </Link>
        <Link href="/patients" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Users className="w-5 h-5 mr-3" /> Patients
        </Link>
        <Link href="/analytics" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <BarChart className="w-5 h-5 mr-3" /> Analytics
        </Link>
        <Link href="/settings" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5 mr-3" /> Settings
        </Link>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <p className="text-sm text-gray-500">&copy; 2025 Healthcare Inc.</p>
      </div>
    </div>
  );
};

export default Sidebar;
