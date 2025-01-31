
export interface Schedule {
  day: string;
  time: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  contactNumber: string;
  email: string;
  experience: string;
  schedule: Schedule[];
}