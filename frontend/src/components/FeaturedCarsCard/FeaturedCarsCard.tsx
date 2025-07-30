import React from "react";

interface FeaturedCarsCardType {
  children: React.ReactNode;
  src: string;
}

const FeaturedCarsCard = ({ children, src }: FeaturedCarsCardType) => {
  return (
    <div className="flex relative h-44 w-[450px] rounded-md overflow-hidden">
      <div className="w-60">
        <img className="h-full w-full object-cover" src={src} alt="" />
      </div>
      <div className="bg-[#0b1426] w-full p-3">{children}</div>
    </div>
  );
};

export default FeaturedCarsCard;
