import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewsCount?: number;
  size?: 'sm' | 'md';
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  reviewsCount,
  size = 'sm',
  className = ''
}) => {
  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center text-amber-500">
        <Star className={`${iconSize} fill-amber-400 text-amber-400`} />
      </div>
      <span className={`font-semibold text-stone-800 ${textSize}`}>
        {rating.toFixed(2)}
      </span>
      {reviewsCount !== undefined && (
        <span className={`text-stone-400 ${textSize}`}>
          ({reviewsCount})
        </span>
      )}
    </div>
  );
};
