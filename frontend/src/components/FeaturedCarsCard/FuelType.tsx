import React from "react";

interface FuelTypeType {
  children: React.ReactNode;
}

const FuelType = ({ children }: FuelTypeType) => {
  return (
    <div className="flex gap-1">
      <img className="h-4" src={"/icons/fuel.png"} alt="" />
      <div className="flex flex-col">
        <p className="text-gray-600">Fuel Type</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default FuelType;
