"use server";

import prisma from "@/lib/prisma";

export async function isDoctorLoggedIn(
  email: string,
  password: string
): Promise<{ success: boolean; message: string }> {
  const doctor = await prisma.doctors.findFirst({
    where: {
      email: email,
    },
  });

  if (!doctor) {
    return { success: false, message: "Email not found" };
  }

  if (doctor.password !== password) {
    return { success: false, message: "Incorrect password" };
  }

  return { success: true, message: "Login successful" };
}
