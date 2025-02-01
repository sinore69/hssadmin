"use server";

import { Doctor } from "@/interfaces/interface";
import prisma from "@/lib/prisma";

export async function getDoctos() {
  const res = await prisma.doctors.findMany();
  return res as unknown as Doctor[];
}
