"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Doctor } from "@/interfaces/interface";
import DeleteIcon from "./delete";
import Editcard from "./editcard";

function DoctorCard(props: { doctor: Doctor }) {
  const { doctor } = props;
  const [editableDoctor, setEditableDoctor] = useState(doctor);
  const [isToggle, setIsToggle] = useState<boolean>(true);
  function toggle() {
    setIsToggle(!isToggle);
  }
  return (
    <div>
      {editableDoctor ? (
        <Card className="rounded-2xl shadow-md bg-white p-4">
          {isToggle ? (
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex flex-row">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-2"></div>
                  <div className="">
                    <h2 className="text-lg font-semibold">{editableDoctor.name}</h2>
                    <p className="text-gray-500">{editableDoctor.specialization}</p>
                  </div>
                </div>
                <DeleteIcon data={editableDoctor} />
              </div>
              <div className="mt-4">
                <p className="text-gray-700">🕒 {editableDoctor.schedule}</p>
              </div>
              <div className="mt-4 flex space-x-4">
                {/* Use doctor.yoe and doctor.availability */}
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {`${doctor.yoe}+ Years of Experience`}
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={toggle}>
                  View Profile
                </Button>
              </div>
            </CardContent>
          ) : (
            <Editcard
              setIsToggle={setIsToggle}
              doctor={doctor}
              editableDoctor={editableDoctor}
              setEditableDoctor={setEditableDoctor}
            />
          )}
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DoctorCard;
