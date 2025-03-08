"use client";
import Referral from "app/components/cards/referral";
import LoadingSpinner from "app/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function DoctorDashboard() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace this with your actual login state logic

  useEffect(() => {
    const checkLogin = async () => {
      // Simulate login check (replace this with real logic)
      const loggedIn = localStorage.getItem("isDoctorLoggedIn");
      if (loggedIn === null || loggedIn === "false") {
        router.push("/doctorlogin");
      } else {
        setIsLoggedIn(true);
      }
      setIsChecking(false);
    };

    checkLogin();
  }, [router]);

  if (isChecking) {
    return <LoadingSpinner />; // Optional loading indicator
  }

  if (!isLoggedIn) {
    return null; // Prevent rendering until redirection completes
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Doctor Dashboard
      </h1>

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
          <Referral />
        </div>
      </div>
    </div>
  );
}
