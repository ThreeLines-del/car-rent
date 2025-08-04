import React from "react";
import StarRating from "../StarRating";

interface PriceDivType {
  children: React.ReactNode;
  rating: number;
}

const PriceDiv = ({ children, rating }: PriceDivType) => {
  return (
    <div className="flex justify-between mt-5 items-center">
      {children}
      <div className="relative flex justify-center items-center p-2 rounded-sm overflow-hidden">
        <StarRating className="" rating={rating} />
        <div className="absolute inset-0 bg-gray-50 opacity-5"></div>
      </div>
    </div>
  );
};

export default PriceDiv;
