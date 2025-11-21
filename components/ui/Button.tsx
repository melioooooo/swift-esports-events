import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 font-heading font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm md:text-base clip-path-slant";
  
  const variants = {
    primary: "bg-swift-coral text-white hover:bg-white hover:text-swift-coral border border-transparent",
    secondary: "bg-white text-swift-black hover:bg-swift-coral hover:text-white",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-swift-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};