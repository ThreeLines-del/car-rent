import { Star, StarHalf, StarOff } from "lucide-react";

interface StarRatingProps {
  rating: number; // e.g. 3.5
  outOf?: number; // default 5
  showText?: boolean; // optionally show "x / 5"
  className?: string; // for styling
}

const StarRating = ({
  rating,
  outOf = 5,
  showText = false,
  className = "",
}: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 <= 0.75;
  const emptyStars = outOf - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400 fill-yellow-400"
        />
      ))}
      {hasHalf && (
        <StarHalf className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      ))}
      {showText && (
        <span className="ml-2 text-sm text-gray-600">
          {rating.toFixed(1)} / {outOf}
        </span>
      )}
    </div>
  );
};

export default StarRating;
