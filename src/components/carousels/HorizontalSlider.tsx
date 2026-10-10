import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalSliderProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  children,
  title,
  subtitle,
  action,
  className = ''
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable > 0) {
        setScrollProgress((scrollLeft / totalScrollable) * 100);
      }
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => current.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const amount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Header if provided */}
      {(title || action) && (
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            {subtitle && (
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#337F6A] block mb-1">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#173F36] font-medium">
                {title}
              </h2>
            )}
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {action}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full border border-stone-200 bg-white/80 hover:bg-white text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer shadow-xs hover:border-[#337F6A]"
                aria-label="Previous items"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full border border-stone-200 bg-white/80 hover:bg-white text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer shadow-xs hover:border-[#337F6A]"
                aria-label="Next items"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {children}
      </div>

      {/* Progress Bar indicator */}
      <div className="w-full max-w-xs mx-auto h-0.5 bg-stone-200 rounded-full mt-4 overflow-hidden">
        <div
          className="h-full bg-[#337F6A] transition-all duration-300 rounded-full"
          style={{ width: `${Math.max(10, scrollProgress)}%` }}
        />
      </div>
    </div>
  );
};
