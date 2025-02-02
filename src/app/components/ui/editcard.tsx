import React, { useState } from "react";
import { Doctor } from "@/interfaces/interface";
import { CardHeader } from "./cardHeader";
import { editDoctor } from "@/functions/editDoctor";
import SmallSpinner from "./smallSpinner";
const EditableDoctorCard: React.FC<{
  doctor: Doctor;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
  editableDoctor: Doctor;
  setEditableDoctor: React.Dispatch<React.SetStateAction<Doctor>>;
}> = ({ doctor, setIsToggle, editableDoctor, setEditableDoctor }) => {
  const handleChange =
    (field: keyof Doctor) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditableDoctor({
        ...editableDoctor,
        [field]: event.target.value,
      });
    };

  const handleSave = async () => {
    console.log("Edited Doctor Data:", editableDoctor);
    setSpinner(true);
    const res = await editDoctor(doctor, editableDoctor);
    setSpinner(false);
    setIsToggle(true);
    window.location.reload();
  };

  const handleCancel = () => {
    setEditableDoctor(doctor);
    setIsToggle(true);
  };

  const [spinner, setSpinner] = useState<boolean>(false);

  return (
    <div className="p-4 shadow-lg border rounded-lg w-full">
      <CardHeader
        name={editableDoctor.name}
        specialization={editableDoctor.specialization}
        handleChange={handleChange}
      />

      <div className="mt-4 p-4">
        <div className="flex items-center gap-2">
          <span>Schedule:</span>
          <input
            type="text"
            className="border-b border-gray-200 focus:outline-none w-full"
            value={editableDoctor.schedule}
            onChange={handleChange("schedule")}
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span>Email:</span>
          <input
            type="email"
            className="border-b border-gray-200 focus:outline-none w-full"
            value={editableDoctor.email}
            onChange={handleChange("email")}
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span>Contact:</span>
          <input
            type="tel"
            className="border-b border-gray-200 focus:outline-none w-full"
            value={editableDoctor.contactNumber}
            onChange={handleChange("contactNumber")}
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span>Experience:</span>
          <input
            type="text"
            className="border-b border-gray-200 focus:outline-none w-full"
            value={editableDoctor.yoe}
            onChange={handleChange("yoe")}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
          {spinner ? (
            <SmallSpinner />
          ) : (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={handleSave}
            >
              Save
            </button>
          )}
        </>
      </div>
    </div>
  );
};

export default EditableDoctorCard;
