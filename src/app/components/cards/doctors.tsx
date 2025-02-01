"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Select, SelectItem } from "../ui/select";
import { Pagination } from "../ui/pagination";
import Link from "next/link";
import { Doctor } from "@/interfaces/interface";
import { getDoctos } from "@/functions/getdoctors";
import Doctorcard from "../ui/doctorcard";
import LoadingSpinner from "../ui/spinner";

// const doctors = [
//   {
//     name: "Dr. Amit Kumar",
//     specialty: "Cardiologist",
//     room: "Room 203",
//     schedule: "Mon-Fri, 9:00 AM - 5:00 PM",
//     availability: "Available",
//     experience: "15+ Years Exp.",
//   },
//   {
//     name: "Dr. Priya Shah",
//     specialty: "Neurologist",
//     room: "Room 105",
//     schedule: "Tue-Sat, 10:00 AM - 6:00 PM",
//     availability: "On Leave",
//     experience: "12+ Years Exp.",
//   },
//   // Add more doctor entries as needed
// ];

const DoctorList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState<boolean>();
  const resultsPerPage = 2;

  const handlePageChange = (page: number) => setCurrentPage(page);

  const paginatedDoctors = doctors?.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: Doctor[] = await getDoctos();
        if (!response) {
          throw new Error("Network response was not ok");
        }
        setDoctors((prev) => [...prev, ...response]);
        // console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(); // Call the fetchData function to make the API call
  }, []); // Empty dependency array to run this effect only once when the component mounts
  return (
    <div className="p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <Input placeholder="Search doctors..." className="w-1/3" />
        <div className="flex space-x-4">
          <Select>
            <SelectItem value="All Departments">All Departments</SelectItem>
          </Select>
          <Select>
            <SelectItem value="Availability Status">
              Availability Status
            </SelectItem>
          </Select>
        </div>
        <Link
          className="bg-blue-500 text-white hover:bg-blue-600"
          href={"/doctors"}
        >
          Add New Doctor
        </Link>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {doctors?.map((doctor, index) => (
            <Doctorcard key={index} doctor={doctor} />
          ))}
        </div>
      )}
      {/* <div className="flex justify-between items-center mt-8">
        <p className="text-gray-600">
          Showing {resultsPerPage * (currentPage - 1) + 1} to{" "}
          {Math.min(
            resultsPerPage * currentPage,
            doctors?.length ? doctors?.length : 0
          )}{" "}
          of {doctors?.length} results
        </p>
        <Pagination
          totalItems={doctors?.length ? doctors?.length : 0}
          itemsPerPage={resultsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div> */}
    </div>
  );
};

export default DoctorList;
