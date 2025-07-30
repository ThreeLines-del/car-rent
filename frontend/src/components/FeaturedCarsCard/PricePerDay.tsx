import React from "react";

interface PricePerDayType {
  children: React.ReactNode;
}

const PricePerDay = ({ children }: PricePerDayType) => {
  return (
    <h1 className="text-[#cf1a17] text-lg font-semibold">
      ₵ {children} <span className="text-xs">/day</span>
    </h1>
  );
};

export default PricePerDay;
