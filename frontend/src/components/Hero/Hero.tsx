import React from "react";

interface HeroType {
  children: React.ReactNode;
  src: string;
}

const Hero = ({ children, src }: HeroType) => {
  return (
    <div className="h-90 relative">
      <img
        className="h-full w-full object-cover mix-blend-multiply"
        src={src}
        alt=""
      />
      <div className="inset-0 absolute bg-blue-950 opacity-25"></div>
      <div className="absolute bottom-0 top-0 right-0 left-0 flex flex-col gap-5 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Hero;
