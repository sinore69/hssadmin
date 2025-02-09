"use server";

import prisma from "@/lib/prisma";

export async function isAdminLoggedIn(): Promise<boolean> {
  const res: {
    hospitalid: number;
    hospitalname: string;
    hospitalemail: string;
    password: string;
  } | null = await prisma.hospital.findFirst({
    where: {
      hospitalid: 1,
    },
  });
  if (res?.password === "default") {
    // console.log("true");
    return true;
  }
//   console.log("false");
  return false;
}
