import React from 'react';

const Appointments = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold mb-4">Upcoming Appointments</h1>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="font-semibold">Rahul Sharma - General Checkup</h2>
            <p className="text-sm text-gray-600">Dr. Amit Kumar</p>
          </div>
          <div className="text-sm text-gray-600">○ Today, 10:00 AM</div>
        </div>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-blue-700">Edit</button>
          <button className="text-red-500 hover:text-red-700">Cancel</button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="font-semibold">Priya Patel - Dental Consultation</h2>
            <p className="text-sm text-gray-600">Dr. Meera Shah</p>
          </div>
          <div className="text-sm text-gray-600">○ Tomorrow, 11:30 AM</div>
        </div>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-blue-700">Edit</button>
          <button className="text-red-500 hover:text-red-700">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;