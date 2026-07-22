import React from 'react';
import { Star } from 'lucide-react';

export default function RatingStars({ rating = 5.0, reviewsCount = null, size = 'sm' }) {
  const starSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
  };

  const currentSize = starSizes[size] || starSizes.sm;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1.5 select-none">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, idx) => {
          const isFilled = idx < fullStars || (idx === fullStars && hasHalfStar);
          return (
            <Star
              key={idx}
              className={`${currentSize} ${
                isFilled
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-slate-600 fill-slate-800'
              }`}
            />
          );
        })}
      </div>
      <span className="text-xs font-semibold text-slate-200">
        {rating.toFixed(1)}
      </span>
      {reviewsCount !== null && (
        <span className="text-xs text-slate-400">({reviewsCount})</span>
      )}
    </div>
  );
}
