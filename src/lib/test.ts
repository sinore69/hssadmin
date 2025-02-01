"use server"
import prisma from "./prisma";
export async function test() {
  // Run inside `async` function
  const res=await prisma.maid.create({
    data:{
        email:"maial",
        name:"name"
    }
  })
  console.log(res,"&&&")
  const allUsers = await prisma.maid.findMany();
  console.log(allUsers,"**");
}
