"use server";

import prisma from "lib/prisma";

interface AdminAuthResponse {
  success: boolean;
  message: string;
}

export async function isAdminLoggedIn(
  email: string,
  password: string
): Promise<AdminAuthResponse> {
  const res = await prisma.hospital.findFirst({
    where: {
      hospitalemail: email,
    },
  });

  if (!res) {
    return {
      success: false,
      message: "Email not found. Please check and try again.",
    };
  }

  if (res.password !== password) {
    return {
      success: false,
      message: "Incorrect password. Please try again.",
    };
  }

  return {
    success: true,
    message: "Login successful.",
  };
}
