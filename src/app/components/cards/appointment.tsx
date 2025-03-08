"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { getAppointments } from "functions/getAppointments";
import LoadingSpinner from "../ui/spinner";

interface Appointment {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
  userId: {
    id: number;
    name: string | null;
    email: string;
    phoneNumber: string;
  };
  doctorId: number;
  createdAt: string;
  updatedAt: string;
}

interface DoctorAppointment {
  id: number;
  name: string;
  specialization: string;
  Appointments: Appointment[];
}

interface Department {
  deptId: number;
  deptName: string;
  Doctors: DoctorAppointment[];
}

interface Hospital {
  hospital: {
    hospitalId: number;
    hospitalName: string;
    Departments: Department[];
  };
}

export default function AppointmentCard() {
  const [hospital, setHospital] = useState<Hospital["hospital"]>();

  const appointmentsList = hospital?.Departments?.flatMap((department) =>
    department.Doctors.flatMap((doctor) =>
      doctor.Appointments.map((appointment) => ({
        doctorName: doctor.name,
        specialization: doctor.specialization,
        patientName: appointment.userId.name || "N/A",
        patientEmail: appointment.userId.email,
        date: appointment.date,
        startTime: appointment.startTime,
        endTime: appointment.endTime,
        status: appointment.status,
      }))
    )
  );

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: Hospital = await getAppointments(1);
        if (!response) {
          throw new Error("Network response was not ok");
        }
        setHospital(response.hospital);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold pl-5 pt-4">Appointment Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {appointmentsList && appointmentsList?.length > 0 ? (
              appointmentsList?.map((appointment, index) => (
                <Card key={index} className="border rounded-xl shadow-lg p-4">
                  <CardContent>
                    <p className="text-sm">
                      Doctor:{" "}
                      <span className="font-medium">
                        {appointment.doctorName}
                      </span>
                    </p>
                    <p className="text-sm">
                      Specialization: {appointment.specialization}
                    </p>
                    <p className="text-sm">
                      Patient: {appointment.patientName}
                    </p>
                    <p className="text-sm">Email: {appointment.patientEmail}</p>
                    <p className="text-sm">
                      Date: {new Date(appointment.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm">
                      Time: {appointment.startTime} - {appointment.endTime}
                    </p>
                    <p className="text-sm">
                      Status:{" "}
                      <span className="text-green-600 font-medium">
                        {appointment.status}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No Appointments Available
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
