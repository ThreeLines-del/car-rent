const Mileage = ({ children }) => {
  return (
    <div className="flex gap-1">
      <img className="h-4" src={"/icons/mileage.png"} alt="" />
      <div className="flex flex-col">
        <p className="text-gray-600">Mileage</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Mileage;
