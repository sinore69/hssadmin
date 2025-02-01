"use server";
import { Doctor } from "@/interfaces/interface";
import prisma from "@/lib/prisma";

export async function deleteDoctor(data: Doctor) {
  const deleteUser = await prisma.doctors
    .delete({
      where: {
        contactNumber: data.contactNumber,
      },
    })
    .then(res=>console.log("doctor deleted successfully"))
    .catch((err) => console.log(err));
//   return deleteUser;
}
