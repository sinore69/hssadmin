"use server";
import { Doctor } from "@/interfaces/interface";
import prisma from "@/lib/prisma";
export async function addNewDoctor(formData: Doctor) {
  const res = await prisma.doctors.create({
    data: {
      email: formData.email,
      name: formData.name,
      contactNumber: formData.contactNumber,
      specialization: formData.specialization,
      yoe: parseInt(formData.yoe),
      schedule: formData.schedule,
    },
  });
  console.log(res);
}
