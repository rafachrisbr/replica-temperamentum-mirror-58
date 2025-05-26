/**
 * @file Button.tsx
 * @description Componente de botão personalizado
 * @author Temperamentum
 */

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * @typedef {Object} ButtonProps
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 * @property {'primary' | 'secondary'} [variant='primary'] - Variante visual do botão
 * @property {React.ReactNode} children - Conteúdo do botão
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

/**
 * @component Button
 * @description Componente de botão personalizado com variantes visual
 * @param {ButtonProps} props - Propriedades do componente
 * @returns {JSX.Element} Componente de botão
 * @example
 * <Button variant="primary" onClick={handleClick}>
 *   Clique aqui
 * </Button>
 */
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