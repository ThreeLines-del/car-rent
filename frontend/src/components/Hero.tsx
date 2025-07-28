import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-90 relative">
      <img
        className="h-full w-full object-cover mix-blend-multiply"
        src="/icons/1.jpg"
        alt=""
      />
      <div className="inset-0 absolute bg-blue-950 opacity-25"></div>
      <div className="absolute bottom-0 top-0 right-0 left-0 flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col items-end">
          <h1 className="text-4xl text-white">
            Drive Your Way - Reliable Cars,
          </h1>
          <h1 className="text-white text-sm">Unmatched Convenience</h1>
        </div>
        <div className="flex gap-5">
          <Button className="bg-red-600">Browse Cars</Button>
          <Button className="bg-red-600">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
