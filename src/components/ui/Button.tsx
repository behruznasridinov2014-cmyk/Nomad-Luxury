import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'glass' | 'glass-dark' | 'outline' | 'link' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconRight?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  iconRight = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#337F6A]/40 disabled:opacity-50 disabled:cursor-not-allowed select-none group';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-[#173F36] text-[#F7F6F0] hover:bg-[#337F6A] shadow-md hover:shadow-lg shadow-[#173F36]/15 hover:-translate-y-0.5',
    secondary: 'bg-[#E2F1EB] text-[#173F36] hover:bg-[#9BD8CA]/30 border border-[#337F6A]/20 hover:-translate-y-0.5',
    glass: 'bg-white/70 text-[#173F36] backdrop-blur-md border border-white/80 hover:bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-0.5',
    'glass-dark': 'bg-[#173F36]/75 text-white backdrop-blur-md border border-white/20 hover:bg-[#173F36]/90 shadow-lg hover:-translate-y-0.5',
    outline: 'border border-[#173F36]/30 text-[#173F36] hover:bg-[#173F36] hover:text-[#F7F6F0] hover:-translate-y-0.5',
    link: 'text-[#173F36] hover:text-[#337F6A] px-0 py-0 rounded-none border-b border-transparent hover:border-[#337F6A]',
    icon: 'p-2 rounded-full border border-stone-200/80 hover:bg-stone-100 text-stone-700'
  };

  return (
    <button
      className={`${baseStyles} ${variant !== 'link' && variant !== 'icon' ? sizeStyles[size] : ''} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {iconRight && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
};
