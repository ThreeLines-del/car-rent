import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const CarBookingCard = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="border">
      <div className="grid grid-cols-3 h-44">
        <div className="flex justify-center items-center">
          <img className="h-40 w-60 object-cover" src="/icons/1.jpg" alt="" />
        </div>
        <div className="col-span-2 relative">
          {visible ? (
            <IoIosArrowUp
              onClick={() => setVisible(false)}
              className="text-xl absolute right-0 m-2"
            />
          ) : (
            <IoIosArrowDown
              onClick={() => setVisible(true)}
              className="text-xl absolute right-0 m-2"
            />
          )}
        </div>
      </div>
      <div className={`${visible ? "" : "hidden"}`}>hsgsd</div>
    </div>
  );
};

export default CarBookingCard;
