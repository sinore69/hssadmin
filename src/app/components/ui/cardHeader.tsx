import { Doctor } from "@/interfaces/interface";
export const CardHeader: React.FC<{
  name: string;
  specialization: string;
  handleChange: (
    field: keyof Doctor
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ name, specialization, handleChange }) => (
  
  <div className="flex items-center gap-4 p-4">
    <div className="flex flex-col gap-2">
      <input
        type="text"
        className="text-xl font-semibold border-b border-gray-200 focus:outline-none w-full"
        value={name}
        onChange={handleChange("name")}
      />
      <input
        type="text"
        className="text-sm text-gray-600 border-b border-gray-200 focus:outline-none w-full mt-1"
        value={specialization}
        onChange={handleChange("specialization")}
      />
    </div>
  </div>
);
