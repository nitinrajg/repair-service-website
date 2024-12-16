import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-md transition-colors duration-200";
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-red-700",
    secondary: "bg-white text-primary border border-primary hover:bg-gray-50"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}