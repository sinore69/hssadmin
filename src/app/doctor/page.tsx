"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaCalendarAlt, FaUserPlus, FaClipboardList } from 'react-icons/fa';

interface ReferralInfo {
  patientName: string;
  referredBy: string;
}

export default function DoctorDashboard() {
  const [referralCode, setReferralCode] = useState<string>('');
  const [referralInfo, setReferralInfo] = useState<ReferralInfo | null>(null);

  const handleReferralCheck = () => {
    // Simulating referral check logic
    setReferralInfo({
      patientName: 'John Doe',
      referredBy: 'Dr. Emily Smith',
    });
  };

  const handleReferralCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReferralCode(e.target.value);
  };

  const handleGenerateReferral = (e: FormEvent) => {
    e.preventDefault();
    // Referral generation logic can go here
    console.log('Referral generated');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctor Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule with Larger Emphasis */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center mb-6">
            <FaCalendarAlt className="text-blue-600 mr-3" /> Schedule for Today
          </h2>
          <ul className="text-gray-600 text-lg space-y-3">
            <li>10:00 AM - John Doe (Orthopedic Checkup)</li>
            <li>11:30 AM - Jane Smith (Follow-up Consultation)</li>
            <li>02:00 PM - Michael Brown (Physiotherapy)</li>
          </ul>
        </div>

        <div className="space-y-8">
          {/* Generate Referral */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
              <FaUserPlus className="text-green-600 mr-2" /> Generate Referral
            </h2>
            <form onSubmit={handleGenerateReferral} className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Patient Name</label>
                <input type="text" className="w-full p-2 border rounded-md focus:ring focus:ring-green-200" placeholder="Enter patient name" />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Referred To</label>
                <input type="text" className="w-full p-2 border rounded-md focus:ring focus:ring-green-200" placeholder="Enter doctor/institution name" />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Generate Referral</button>
            </form>
          </div>

          {/* Check Referral */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
              <FaClipboardList className="text-purple-600 mr-2" /> Check Referral Code
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                value={referralCode}
                onChange={handleReferralCodeChange}
                className="w-full p-2 border rounded-md focus:ring focus:ring-purple-200"
                placeholder="Enter referral code"
              />
              <button
                onClick={handleReferralCheck}
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
              >
                Check Referral
              </button>
              {referralInfo && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  <p className="text-gray-700">Patient Name: {referralInfo.patientName}</p>
                  <p className="text-gray-700">Referred By: {referralInfo.referredBy}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
