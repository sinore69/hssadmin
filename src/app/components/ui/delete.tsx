"use client";
import { deleteDoctor } from "functions/deleteDoctor";
import { Doctor } from "interfaces/interface";
import { FaTrash } from "react-icons/fa";
  
const DeleteIcon = (props: { data: Doctor }) => {
  const { data } = props;
  return (
    <div
      className="group cursor-pointer hover:shadow-lg rounded-lg"
      onClick={() => {
        deleteDoctor(data);
        window.location.reload();
      }}
    >
      <FaTrash className="text-gray-600 group-hover:text-red-500 transition-colors duration-300 h-7 w-7 p-1" />
    </div>
  );
};

export default DeleteIcon;
