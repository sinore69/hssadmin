"use server";
import prisma from "./prisma";
// export async function test() {
//   // Run inside `async` function
//   const res=await prisma.maid.create({
//     data:{
//         email:"maial",
//         name:"name"
//     }
//   })
//   console.log(res,"&&&")
//   const allUsers = await prisma.maid.findMany();
//   console.log(allUsers,"**");
// }
export async function test() {
  // Run inside `async` function
  // const res = await prisma.hospital.create({
  //   data: {
  //     hospitalemail: "hospital@gmail.com",
  //     hospitalname: "hospital",
  //     password: "default",
  //     hospitalid: 1,
  //   },
  // });
  const result = await prisma.doctors.create({
    data: {
      contactNumber: "01",
      email: "a@gmail.com",
      name: "saptarshi dutta",
      password: "default",
      schedule: "none",
      specialization: "none",
      yoe: 69,
    },
  });
  console.log("&&&", result);
}
