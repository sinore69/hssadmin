"use server";
export async function getAppointments(id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/hospitals/${id}`
  );
  const json = await res.json();
  return json;
}
