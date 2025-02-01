import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-full">
      <div className="w-16 h-16 border-2 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
