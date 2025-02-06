type Department = {
  deptId: number;
  deptName: string;
  deptDesc: string;
  deptImage: string;
  createdAt: string;
  updatedAt: string;
};

interface Hospital {
  hospitalId: number;
  hospitalName: string;
  location: string;
  rating: number;
  description: string;
  highlights: string;
  imageUrl: string;
  numberOfBeds: number | null;
}

interface Doctor {
  id: number;
  name: string;
  category: string;
  specialization: string;
  consultation: number;
  createdAt: string;
  updatedAt: string;
  Departments: Department[];
  Hospitals: Hospital[];
}

// Function to parse doctors and hospital information
export function parseDoctors(data: Doctor[]): { doctorId: number; doctorName: string; hospitalName: string }[] {
  const result: { doctorId: number; doctorName: string; hospitalName: string }[] = [];

  data.forEach((doctor) => {
    doctor.Hospitals.forEach((hospital) => {
      result.push({
        doctorId: doctor.id,
        doctorName: doctor.name,
        hospitalName: hospital.hospitalName,
      });
    });
  });

  return result;
}

// Example data
const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "Soumili Roy",
    category: "Private",
    specialization: "Orthopaedic",
    consultation: 600,
    createdAt: "2025-01-31T12:47:38.000Z",
    updatedAt: "2025-01-31T12:47:38.000Z",
    Departments: [
      {
        deptId: 2,
        deptName: "Psyiciatry",
        deptDesc: "Department focused on bones",
        deptImage: "https://hss-k04a.onrender.com/department/image/file-1738327561180-350565088.jpg",
        createdAt: "2025-01-31T12:46:01.000Z",
        updatedAt: "2025-01-31T12:46:01.000Z",
      },
    ],
    Hospitals: [
      {
        hospitalId: 1,
        hospitalName: "Tech Campus",
        location: "Howrah",
        rating: 4.5,
        description: "A leading  hospital for innovation and high end labs.",
        highlights: "State-of-the-art labs, Collaborative spaces.",
        imageUrl: "https://content.jdmagicbox.com/comp/kolkata/i1/033pxx33.xx33.140702123703.i2i1/catalogue/ohio-heart-hospital-and-medical-centre-new-town-kolkata-private-hospitals-dvhz0.jpg",
        numberOfBeds: null,
      },
    ],
  },
  {
    id: 2,
    name: "Saikat Das",
    category: "Private",
    specialization: "Orthopaedic",
    consultation: 800,
    createdAt: "2025-01-31T12:48:13.000Z",
    updatedAt: "2025-01-31T12:48:13.000Z",
    Departments: [
      {
        deptId: 1,
        deptName: "Orthopaedic",
        deptDesc: "Department focused on bones",
        deptImage: "https://hss-k04a.onrender.com/department/image/file-1738327536860-766403667.jpg",
        createdAt: "2025-01-31T12:45:36.000Z",
        updatedAt: "2025-01-31T12:45:36.000Z",
      },
    ],
    Hospitals: [
      {
        hospitalId: 1,
        hospitalName: "Tech Campus",
        location: "Howrah",
        rating: 4.5,
        description: "A leading  hospital for innovation and high end labs.",
        highlights: "State-of-the-art labs, Collaborative spaces.",
        imageUrl: "https://content.jdmagicbox.com/comp/kolkata/i1/033pxx33.xx33.140702123703.i2i1/catalogue/ohio-heart-hospital-and-medical-centre-new-town-kolkata-private-hospitals-dvhz0.jpg",
        numberOfBeds: null,
      },
      {
        hospitalId: 2,
        hospitalName: "Health Campus",
        location: "Kolkata",
        rating: 4.5,
        description: "A leading  hospital with affordable prices.",
        highlights: "State-of-the-art labs, Collaborative spaces.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyAYW5AqGungXTFEIytKsd4s-CYUW7Q12H-tUK9gqeMNGPRuZkOQryq7bEDSjeoHGnvA&usqp=CAU",
        numberOfBeds: null,
      },
    ],
  },
];

console.log(parseDoctors(doctorsData));
