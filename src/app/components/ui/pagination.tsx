// "@/components/ui/pagination.tsx"
import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => currentPage > 1 && onPageChange(currentPage - 1);
  const handleNext = () => currentPage < totalPages && onPageChange(currentPage + 1);

  return (
    <div className="flex items-center space-x-2">
      <button onClick={handlePrev} disabled={currentPage === 1} className="px-3 py-1 border rounded-md">
        Prev
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 border rounded-md ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={handleNext} disabled={currentPage === totalPages} className="px-3 py-1 border rounded-md">
        Next
      </button>
    </div>
  );
};
