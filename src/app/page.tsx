import Link from 'next/link';
import { FaUserShield, FaUserMd, FaHospitalAlt } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Healthcare Portal</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 max-w-4xl">
        {/* Admin Card */}
        <Link href={"/admin"} className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:shadow-xl transition-shadow">
          <FaUserShield className="text-blue-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">Admin</h2>
          <p className="text-gray-600 mt-2 text-center">Manage appointments, payments, and overall system administration.</p>
        </Link>

        {/* Doctor Card */}
        <Link href={"doctor"} className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:shadow-xl transition-shadow">
          <FaUserMd className="text-green-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">Doctor</h2>
          <p className="text-gray-600 mt-2 text-center">View patient details, track appointments, and manage healthcare services.</p>
        </Link>

        {/* Institution Card */}
        <Link href={"institution"} className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:shadow-xl transition-shadow">
          <FaHospitalAlt className="text-red-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">Institution</h2>
          <p className="text-gray-600 mt-2 text-center">Manage hospital operations, staff, and service offerings.</p>
        </Link>
      </div>
    </div>
  );
}
