import { useParams } from "react-router-dom";
import { Car, NewBookingType } from "../../types/types";
import ProductImageGallery from "../components/ProductImageGallery";
import Button from "../components/Button";
import SpecsTable from "../components/SpecsTable/SpecsTable";
import Row from "../components/SpecsTable/Row";
import Spec from "../components/SpecsTable/Spec";
import StarRating from "../components/StarRating";
import { useContext, useEffect, useState } from "react";
import carsService from "../services/carsService";
import BookingsContext from "../contexts/BookingsContext";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>();
  const { addBooking } = useContext(BookingsContext);
  const [bookingDetails, setBookingDetails] = useState<NewBookingType>({
    carId: "6882c699f5c7bfd7322c16ac",
    endDate: new Date(),
    startDate: new Date(),
    status: "pending",
    payment: {
      method: "credit_card",
      status: "pending",
      transactionId: "txn_87900123",
    },
    dropoffLocation: {
      city: "Kumasi",
      country: "Ghana",
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    pickupLocation: {
      city: "Accra",
      country: "Ghana",
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    totalPrice: 200,
  });

  useEffect(() => {
    if (id) {
      carsService.getSingleCar(id).then((data) => setCar(data));
    }
  }, [id]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const onBoookingClick = async () => {
    const newBooking = await addBooking(bookingDetails);
    console.log(newBooking);
  };

  if (!car) return <div>Error loading car details.</div>;

  // Prepare an image list (e.g., use imageUrl + variations if needed)
  const imageList = [car.imageUrl, "/icons/1.jpg", "/icons/2.jpg"];

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex">
        {/* Left Column */}
        <div className="w-2/3 py-6 pl-20 pr-10 flex flex-col gap-6">
          <ProductImageGallery images={imageList} />

          <div className="bg-gray-50 p-5 rounded-sm">
            <p className="text-xs text-gray-500 font-semibold mb-5">
              DESCRIPTION
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <p>{car.description}</p>
              <p>
                <span className="text-xs text-gray-500 font-semibold">
                  YEAR
                </span>
                : {car.year}
              </p>
              <p>
                <span className="text-xs text-gray-500 font-semibold">
                  COLOR
                </span>
                : {car.color}
              </p>
            </div>

            <div className="text-sm mt-5 flex flex-col gap-2">
              <p className="text-xs text-gray-500 font-semibold">
                SPECIFICATIONS
              </p>
              <SpecsTable>
                <Row>
                  <Spec specText={car.fuelType} specImage={"/icons/fuel.png"} />
                  <Spec
                    specText={car.mileage}
                    specImage={"/icons/mileage.png"}
                  />
                </Row>
                <Row>
                  <Spec
                    specText={car.transmission}
                    specImage={"/icons/transmission.png"}
                  />
                  <Spec specText={car.seats} specImage={"/icons/seats.png"} />
                </Row>
              </SpecsTable>

              <p className="text-xs text-gray-500 font-semibold">FEATURES</p>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature, index) => (
                  <Button key={index} className="!text-gray-400 bg-gray-200">
                    {feature}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/3 pr-20">
          <div className="flex gap-3 flex-col mt-5 px-2">
            <div className="text-gray-800">
              <h1 className="text-4xl">{car.make}</h1>
              <h1 className="text-4xl">{car.model}</h1>
            </div>

            <div className="text-sm flex flex-col gap-2">
              <p className="text-xs text-gray-500 font-semibold">STARTING AT</p>
              <p className="text-2xl font-outfit text-gray-800">
                ₵{car.pricePerDay}/day
              </p>
              <StarRating rating={car.rating} showText />
            </div>

            <div className="bg-amber-200 border h-90">
              <div>
                <p className="text-xs text-gray-500 font-semibold">
                  PICK UP DATE
                </p>
                <input type="date" />
                <p className="text-xs text-gray-500 font-semibold">
                  RETURN DATE
                </p>
                <input type="date" />
              </div>

              <div>
                <p className="text-xs text-gray-500 font-semibold">
                  PICK UP LOCATION
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  DROP OFF LOCATION
                </p>
              </div>

              <div>
                <p>Total price</p>
              </div>
            </div>

            <Button
              onClick={onBoookingClick}
              className="bg-[#cf1a17] mt-2 py-3"
            >
              Book Now
            </Button>

            <div className="text-sm flex flex-col gap-2">
              <p className="text-gray-800">
                <span className="text-xs text-gray-500 font-semibold">
                  NUMBER OF BOOKINGS
                </span>
                : {car.numBookings}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-90 border">
        <h1>You may also like</h1>
      </div>
    </div>
  );
};

export default CarDetails;
