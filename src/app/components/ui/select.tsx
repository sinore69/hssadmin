// "@/components/ui/select.tsx"
import React, { useState } from "react";

interface SelectProps {
  children: React.ReactNode;
}

interface SelectItemProps {
  value: string;
}

export const Select: React.FC<SelectProps> = ({ children }) => <div className="relative">{children}</div>;

export const SelectTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="border px-4 py-2 w-full bg-white rounded-md">{children}</button>
);

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="absolute bg-white border mt-1 w-full rounded-md z-10">{children}</div>
);

export const SelectItem: React.FC<React.PropsWithChildren<SelectItemProps>> = ({
  children,
  value
}) => (
  <div className="px-4 py-2 hover:bg-gray-100" data-value={value}>
    {children}
  </div>
);