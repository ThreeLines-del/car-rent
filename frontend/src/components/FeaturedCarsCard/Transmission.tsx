import React from "react";

interface TransmissionType {
  children: React.ReactNode;
}

const Transmission = ({ children }: TransmissionType) => {
  return (
    <div className="flex gap-1">
      <img className="h-4" src={"/icons/transmission.png"} alt="" />
      <div className="flex flex-col">
        <p className="text-gray-600">Transmission</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Transmission;
