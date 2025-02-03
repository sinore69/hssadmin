export interface Schedule {
  day: string;
  time: string;
}

export interface Doctor {
  name: string;
  specialization: string;
  contactNumber: string;
  email: string;
  yoe: string;
  schedule: string;
}

export interface Appointment {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
  userId: {
    id: number;
    name: string | null;
    email: string;
    phoneNumber: string;
  };
  doctorId: number;
  createdAt: string;
  updatedAt: string;
}

export interface DoctorAppointment {
  id: number;
  name: string;
  specialization: string;
  Appointments: Appointment[];
}

export interface Department {
  deptId: number;
  deptName: string;
  Doctors: Doctor[];
}

export interface Hospital {
  hospital: {
    hospitalId: number;
    hospitalName: string;
    Departments: Department[];
  };
}
