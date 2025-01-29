"use client"
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectItem } from "../ui/select";
import { Pagination } from "../ui/pagination";

const doctors = [
  {
    name: "Dr. Amit Kumar",
    specialty: "Cardiologist",
    room: "Room 203",
    schedule: "Mon-Fri, 9:00 AM - 5:00 PM",
    availability: "Available",
    experience: "15+ Years Exp."
  },
  {
    name: "Dr. Priya Shah",
    specialty: "Neurologist",
    room: "Room 105",
    schedule: "Tue-Sat, 10:00 AM - 6:00 PM",
    availability: "On Leave",
    experience: "12+ Years Exp."
  }
  // Add more doctor entries as needed
];

const DoctorList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 2;

  const handlePageChange = (page: number) => setCurrentPage(page);

  const paginatedDoctors = doctors.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div className="p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <Input placeholder="Search doctors..." className="w-1/3" />
        <div className="flex space-x-4">
          <Select>
            <SelectItem value="All Departments">All Departments</SelectItem>
          </Select>
          <Select>
            <SelectItem value="Availability Status">Availability Status</SelectItem>
          </Select>
        </div>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">Add New Doctor</Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {paginatedDoctors.map((doctor, index) => (
          <Card key={index} className="rounded-2xl shadow-md bg-white p-4">
            <CardContent>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h2 className="text-lg font-semibold">{doctor.name}</h2>
                  <p className="text-gray-500">{doctor.specialty}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 mb-2">📍 {doctor.room}</p>
                <p className="text-gray-700">🕒 {doctor.schedule}</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm text-white ${
                    doctor.availability === "Available"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {doctor.availability}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {doctor.experience}
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <Button variant="outline">View Profile</Button>
                <Button>Edit Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="text-gray-600">
          Showing {resultsPerPage * (currentPage - 1) + 1} to {Math.min(resultsPerPage * currentPage, doctors.length)} of {doctors.length} results
        </p>
        <Pagination
          totalItems={doctors.length}
          itemsPerPage={resultsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DoctorList;
