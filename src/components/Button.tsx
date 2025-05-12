
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}) => {
  return (
    <button 
      className={cn(
        variant === 'primary' 
          ? 'bg-[#2E7D32] text-white border border-[#388E3C] shadow-md hover:bg-[#266c2a] transition-colors uppercase font-semibold tracking-wide rounded-md'
          : 'bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide rounded-md',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
