import React from "react";

interface CardDetailsType {
  children: React.ReactNode;
}

const DetailsDiv = ({ children }: CardDetailsType) => {
  return <div className="flex gap-5 justify-center mt-6">{children}</div>;
};

export default DetailsDiv;
