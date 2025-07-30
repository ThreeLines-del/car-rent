import React from "react";

interface MakeType {
  children: React.ReactNode;
}

const Make = ({ children }: MakeType) => {
  return <h1 className="text-[#cf1a17] font-semibold">{children}</h1>;
};

export default Make;
