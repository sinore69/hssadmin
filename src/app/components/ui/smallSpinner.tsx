import React from "react";

const SmallSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-full px-4 py-2 bg-blue-600 text-white rounded-lg">
      <div className="w-4 h-4 border-2 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default SmallSpinner;
