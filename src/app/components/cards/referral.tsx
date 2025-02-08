"use client";
import { parseDoctors } from "@/functions/parser/doctorlist";
import React, { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";

function Referral() {
  const [patientName, setPatientName] = useState("");
  const [referredTo, setReferredTo] = useState("");
  const [doctors, setDoctor] = useState<
    {
      doctorId: number;
      doctorName: string;
      hospitalName: string;
    }[]
  >();
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [showDropdown, setShowDropdown] = useState(false);
  const [referralToken, setReferralToken] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`
      );
      const result = await response.json();
      const processedData = parseDoctors(result);
      setDoctor(processedData);
      // console.log(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Start API call on mount
  }, []);

  const handleGenerateReferral = (e: FormEvent) => {
    e.preventDefault();
    const token = generateToken();
    setReferralToken(token);
    console.log(
      "Referral generated for:",
      patientName,
      "to",
      referredTo,
      "with token:",
      token
    );
  };

  const generateToken = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token = "";
    for (let i = 0; i < 4; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  };

  const handleDoctorInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setReferredTo(input);
    setShowDropdown(input.length > 0);

    // Filter doctors based on input
    const filtered = doctors?.filter((doctor) =>
      doctor.doctorName.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const handleSelectDoctor = (doctorName: string) => {
    setReferredTo(doctorName);
    setShowDropdown(false);
  };

  return (
    <div className="">
      {/* Generate Referral */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
          <FaUserPlus className="text-green-600 mr-2" /> Generate Referral
        </h2>
        <form onSubmit={handleGenerateReferral} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Patient ID</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-200"
              placeholder="Enter patient ID"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>
          <div className="relative">
            <label className="block text-gray-600 mb-2">Referred To</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-200"
              placeholder="Enter doctor/institution name"
              value={referredTo}
              onChange={handleDoctorInput}
            />
            {/* Dropdown for filtered doctors */}
            {showDropdown && (
              <ul className="absolute z-10 w-full bg-white border rounded-md mt-1 shadow-md max-h-40 overflow-y-auto">
                {filteredDoctors?.map((doctor, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-green-100 cursor-pointer"
                    onClick={() =>
                      handleSelectDoctor(`${doctor.doctorName} (${doctor.hospitalName})`)
                    }
                  >
                    {doctor.doctorName}{" "}
                    <span className="text-sm text-gray-500">
                      ({doctor.hospitalName})
                    </span>
                  </li>
                ))}
                {filteredDoctors?.length === 0 && (
                  <li className="p-2 text-gray-500">No doctors found</li>
                )}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Generate Referral
          </button>
        </form>
        {referralToken && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            Referral Token: <strong>{referralToken}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default Referral;
