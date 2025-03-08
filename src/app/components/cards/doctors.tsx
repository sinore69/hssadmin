"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Select, SelectItem } from "../ui/select";
import Link from "next/link";
import { Doctor } from "interfaces/interface";
import Doctorcard from "../ui/doctorcard";
import LoadingSpinner from "../ui/spinner";
import { getDoctors } from "../../../functions/getDoctors";

const DoctorList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([
    // {
    //   name: "Dr. Priya Shah",
    //   specialization: "Neurologist",
    //   schedule: "",
    //   yoe: "15",
    //   email: "",
    //   contactNumber: "",
    // },
    // {
    //   name: "Dr. Amit Kumar",
    //   specialization: "Cardiologist",
    //   schedule: "",
    //   yoe: "12",
    //   email: "",
    //   contactNumber: "",
    // },
  ]);
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: Doctor[] = await getDoctors();
        if (!response) {
          throw new Error("Network response was not ok");
        }
        if (response.length >= 1) {
          setDoctors(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-8 bg-gray-100 rounded-lg">
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
          className="bg-blue-500 text-white hover:bg-blue-600 rounded-md p-1 font-semibold text-center"
          href={"/adddoctors"}
        >
          Add Doctor
        </Link>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold pl-5 pt-4 pb-3">Available Doctors</h2>
            <div className="grid grid-cols-2 gap-4">
              {doctors?.map((doctor, index) => (
                <Doctorcard key={index} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
