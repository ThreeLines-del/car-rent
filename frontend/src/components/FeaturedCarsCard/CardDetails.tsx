import React from "react";

interface CardDetailsType {
  children: React.ReactNode;
}

const CardDetails = ({ children }: CardDetailsType) => {
  return <div className="text-white text-xs flex flex-col">{children}</div>;
};

export default CardDetails;
