// "@/components/ui/card.tsx"
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>;
};

export const CardContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
