import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from '../../router/Router';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-stone-500 space-x-2 py-3 overflow-x-auto ${className}`}>
      <Link to="/" className="flex items-center hover:text-[#173F36] transition-colors">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Главная</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
          {item.to ? (
            <Link to={item.to} className="hover:text-[#173F36] transition-colors whitespace-nowrap">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#173F36] font-medium truncate max-w-[200px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
