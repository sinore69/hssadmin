"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Doctor } from "@/interfaces/interface";
import { addNewDoctor } from "@/functions/addnewdoctor";
import { useRouter } from "next/navigation";
export default function DoctorManagement() {
  const [formData, setFormData] = useState<Doctor>({
    name: "",
    specialization: "",
    contactNumber: "",
    email: "",
    yoe: "",
    schedule: "",
  });
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addDoctor = async () => {
    await addNewDoctor(formData);
    router.push("/admin");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="pt-10">
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
            <h3 className="font-semibold">Schedule</h3>
            <input
              type="text"
              name="schedule"
              value={formData.schedule!}
              onChange={handleInputChange}
              placeholder="(e.g., Monday 11:00 - 13:00)"
              className="w-full p-2 border rounded-lg"
            />
            <Button type="submit" className="w-full">
              Add Doctor
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
