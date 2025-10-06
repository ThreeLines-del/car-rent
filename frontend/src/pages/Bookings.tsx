import CarBookingCard from "../components/CarBookingCard";

const Bookings = () => {
  return (
    <div className="flex-1 px-16 py-8">
      <div className="bg-green-200 grid grid-cols-3 gap-8 h-90">
        <div className="bg-red-400 col-span-2">
          <CarBookingCard />
        </div>
        <div className="bg-purple-500"></div>
      </div>
    </div>
  );
};

export default Bookings;
