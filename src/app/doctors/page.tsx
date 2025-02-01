"use client";
import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Schedule, Doctor } from "@/interfaces/interface";
import { addNewDoctor } from "@/functions/addnewdoctor";
// import { test } from "@/lib/test";

export default function DoctorManagement() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [formData, setFormData] = useState<Doctor>({
    name: "",
    specialization: "",
    contactNumber: "",
    email: "",
    yoe: "",
    schedule: [],
  });
  const [scheduleEntry, setScheduleEntry] = useState<Schedule>({
    day: "",
    time: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setScheduleEntry((prevSchedule) => ({ ...prevSchedule, [name]: value }));
  };

  const addScheduleEntry = () => {
    setFormData((prevData) => ({
      ...prevData,
      schedule: [...prevData.schedule, scheduleEntry],
    }));
    setScheduleEntry({ day: "", time: "" });
  };

  const addDoctor = () => {
    // setDoctors((prevDoctors) => [
    //   ...prevDoctors,
    //   { id: Date.now(), ...formData },
    // ]);
    setFormData({
      name: "name name",
      specialization: "cardio",
      contactNumber: "9191919191",
      email: "a@gmail.com",
      yoe: "15",
      schedule: [],
    });
    addNewDoctor(formData);
  };

  const removeDoctor = (contactNumber: string) => {
    setDoctors((prevDoctors) =>
      prevDoctors.filter((doctor) => doctor.contactNumber !== contactNumber)
    );
  };

  const filterDoctorsByDay = (day: string) => {
    return doctors.filter((doctor) =>
      doctor.schedule.some(
        (schedule) => schedule.day.toLowerCase() === day.toLowerCase()
      )
    );
  };
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Doctor Management</h1>
      {/* <button onClick={() => test()}>add doctor</button> */}
      <div className="bg-white p-6 shadow-xl rounded-xl max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Doctor Information</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addDoctor();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name!}
            onChange={handleInputChange}
            placeholder="Doctor Name"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="specialization"
            value={formData.specialization!}
            onChange={handleInputChange}
            placeholder="Specialization"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber!}
            onChange={handleInputChange}
            placeholder="Contact Number"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email!}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="yoe"
            value={formData.yoe!}
            onChange={handleInputChange}
            placeholder="Years of Experience"
            className="w-full p-2 border rounded-lg"
            required
          />
          <Button type="submit" className="w-full">
            Add Doctor
          </Button>
          <div className="space-y-2">
            <h3 className="font-semibold">Schedule</h3>
            <input
              type="text"
              name="day"
              value={scheduleEntry.day!}
              onChange={handleScheduleChange}
              placeholder="Day (e.g., Monday)"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="text"
              name="time"
              value={scheduleEntry.time!}
              onChange={handleScheduleChange}
              placeholder="Time (e.g., 9:00 AM - 1:00 PM)"
              className="w-full p-2 border rounded-lg"
            />
            <Button type="button" onClick={addScheduleEntry} className="w-full">
              Add Schedule Entry
            </Button>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Doctor List</h2>
        <div className="grid grid-cols-1 gap-4">
          {doctors.map((doctor) => (
            <Card
              key={doctor.contactNumber}
              className="border bg-white p-4 rounded-lg"
            >
              <CardContent>
                <p>
                  <strong>Name:</strong> {doctor.name}
                </p>
                <p>
                  <strong>Specialization:</strong> {doctor.specialization}
                </p>
                <p>
                  <strong>Contact Number:</strong> {doctor.contactNumber}
                </p>
                <p>
                  <strong>Email:</strong> {doctor.email}
                </p>
                <p>
                  <strong>Yoe:</strong> {doctor.yoe} years
                </p>
                <div>
                  <strong>Schedule:</strong>
                  <ul>
                    {doctor.schedule.map((schedule, index) => (
                      <li key={index}>
                        {schedule.day} - {schedule.time}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  onClick={() => removeDoctor(doctor.contactNumber!)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white"
                >
                  Remove Doctor
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Filter by Day</h2>
        <input
          type="text"
          placeholder="Enter day (e.g., Monday)"
          className="w-full p-2 border rounded-lg mb-4"
          onChange={(e) => setDoctors(filterDoctorsByDay(e.target.value))}
        />
      </div>
    </div>
  );
}
