import React from "react";

interface ModelType {
  children: React.ReactNode;
}

const Model = ({ children }: ModelType) => {
  return <h1 className="text-white mt-1">{children}</h1>;
};

export default Model;
