import { IoMdHeartEmpty } from "react-icons/io";

const PriceDiv = ({ children }) => {
  return (
    <div className="flex justify-between mt-5 items-center">
      {children}
      <div className="relative flex justify-center items-center p-2 rounded-sm overflow-hidden">
        <IoMdHeartEmpty className="scale-110" />
        <div className="absolute inset-0 bg-gray-50 opacity-5"></div>
      </div>
    </div>
  );
};

export default PriceDiv;
