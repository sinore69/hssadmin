"use server";

import { Doctor } from "@/interfaces/interface";
import prisma from "@/lib/prisma";

export async function editDoctor(doctors: Doctor, editableDoctor: Doctor) {
  const res = await prisma.doctors.update({
    where: {
      contactNumber: doctors.contactNumber,
    },
    data: {
      name: editableDoctor.name,
      contactNumber: editableDoctor.contactNumber,
      email: editableDoctor.email,
      schedule: editableDoctor.schedule,
      specialization: editableDoctor.specialization,
      yoe: parseInt(editableDoctor.yoe),
    },
  });
  return res;
}
