import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'light' | 'subtle' | 'dark';
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'light',
  className = '',
  hoverEffect = false
}) => {
  const variantClass = {
    light: 'glass-panel text-[#26332F]',
    subtle: 'glass-panel-subtle text-[#26332F]',
    dark: 'glass-panel-dark text-white'
  }[variant];

  return (
    <div
      className={`rounded-2xl transition-all duration-300 ${variantClass} ${
        hoverEffect ? 'hover:-translate-y-1 hover:shadow-xl' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
