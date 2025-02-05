"use server";
import { Doctor } from "@/interfaces/interface";
import prisma from "@/lib/prisma";

export async function deleteDoctor(data: Doctor) {
  await prisma.doctors
    .delete({
      where: {
        contactNumber: data.contactNumber,
      },
    })
    .then()
    .catch((err) => console.log(err));
}
