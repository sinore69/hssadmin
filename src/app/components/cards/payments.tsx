import React from 'react';

const Payments= () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Payments</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Pending Payments</h2>
          <p className="text-2xl font-bold">32,450</p>
          <p className="text-sm text-gray-600">8 invoices pending</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Completed Payments</h2>
          <p className="text-2xl font-bold">212,550</p>
          <p className="text-sm text-gray-600">45 payments this month</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">TRANSACTION ID</th>
              <th className="py-2">PATIENT</th>
              <th className="py-2">SERVICE</th>
              <th className="py-2">AMOUNT</th>
              <th className="py-2">STATUS</th>
              <th className="py-2">DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">TRX-2023-001</td>
              <td className="py-2">Rahul Sharma</td>
              <td className="py-2">Laboratory Test</td>
              <td className="py-2">2,500</td>
              <td className="py-2 text-green-500">Completed</td>
              <td className="py-2">2023-12-01</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">TRX-2023-002</td>
              <td className="py-2">Priya Patel</td>
              <td className="py-2">Emergency Care</td>
              <td className="py-2">15,000</td>
              <td className="py-2 text-yellow-500">Pending</td>
              <td className="py-2">2023-12-02</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">TRX-2023-003</td>
              <td className="py-2">Amit Kumar</td>
              <td className="py-2">General Checkup</td>
              <td className="py-2">1,200</td>
              <td className="py-2 text-green-500">Completed</td>
              <td className="py-2">2023-12-03</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Generate Report</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Export Data</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;