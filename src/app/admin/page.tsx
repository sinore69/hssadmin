import DoctorList from "../components/cards/doctors";
import Appointments from "../components/cards/appointment";
import Payments from "../components/cards/payments";
import General from "../components/cards/general";
export default function Home() {
  return (
    <div className="flex flex-col gap-y-2">
      <DoctorList />
      <Appointments />
      <Payments />
      <General />
    </div>
  );
}
