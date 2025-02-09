"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DoctorList from "../../components/cards/doctors";
import Appointments from "../../components/cards/appointment";
import Payments from "../../components/cards/payments";
import General from "../../components/cards/general";
import LoadingSpinner from "@/app/components/ui/spinner";

export default function AdminLogin() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace this with your actual login state logic

  useEffect(() => {
    const checkLogin = async () => {
      // Simulate login check (replace this with real logic)
      const loggedIn = localStorage.getItem("isAdminLoggedin");
      if (loggedIn === null || loggedIn === "false") {
        router.push("/adminlogin");
      } else {
        setIsLoggedIn(true);
      }
      setIsChecking(false);
    };

    checkLogin();
  }, [router]);

  if (isChecking) {
    return <LoadingSpinner />; // Optional loading indicator
  }

  if (!isLoggedIn) {
    return null; // Prevent rendering until redirection completes
  }

  return (
    <div className="flex flex-col gap-y-2">
      <DoctorList />
      <Appointments />
      <Payments />
      <General />
    </div>
  );
}
