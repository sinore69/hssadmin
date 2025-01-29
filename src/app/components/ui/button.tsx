// "@/components/ui/button.tsx"
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium focus:outline-none";
  const variantStyles =
    variant === "default"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "border border-gray-300 text-gray-700 hover:bg-gray-100";

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};
