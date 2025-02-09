"use server";

import prisma from "@/lib/prisma";

export async function isDoctorLoggedIn(): Promise<boolean> {
  const res: {
    contactNumber: string;
    name: string;
    email: string;
    specialization: string;
    yoe: number;
    schedule: string;
    password: string;
  } | null = await prisma.doctors.findFirst({
    where: {
      contactNumber: "01",
      email:"a@gmail.com"
    },
  });
  if (res?.password === "default") {
    console.log("true");
    return true;
  }
    console.log("false");
  return false;
}
