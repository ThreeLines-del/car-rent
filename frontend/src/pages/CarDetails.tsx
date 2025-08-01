import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Car } from "../../types/types";
import ProductImageGallery from "../components/ProductImageGallery";
import Button from "../components/Button";
import SpecsTable from "../components/SpecsTable/SpecsTable";
import Row from "../components/SpecsTable/Row";
import Spec from "../components/SpecsTable/Spec";
import StarRating from "../components/StarRating";

const CarDetails = () => {
  const { id } = useParams();
  const [data, error, loading] = useFetch<Car>(
    `http://localhost:3000/api/car/${id}`
  );

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading car details.</div>;

  // Prepare an image list (e.g., use imageUrl + variations if needed)
  const imageList = [data.imageUrl, "/icons/1.jpg", "/icons/2.jpg"];

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex min-h-[550px]">
        {/* Left Column */}
        <div className="w-2/3 py-6 pl-20 pr-10">
          <ProductImageGallery images={imageList} />
        </div>

        {/* Right Column */}
        <div className="w-1/3 pr-20">
          <div className="flex gap-3 flex-col mt-5 px-2">
            <div className="text-gray-800">
              <h1 className="text-4xl">{data.make}</h1>
              <h1 className="text-4xl">{data.model}</h1>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <p>
                <span className="text-xs text-gray-500 font-semibold">
                  YEAR
                </span>
                : {data.year}
              </p>
            </div>
            <div className="text-sm flex flex-col gap-2">
              <p className="text-xs text-gray-500 font-semibold">STARTING AT</p>
              <p className="text-2xl font-outfit text-gray-800">
                ₵{data.pricePerDay}/day
              </p>
              <StarRating rating={data.rating} showText />
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <p>{data.description}</p>
              <p>
                <span className="text-xs text-gray-500 font-semibold">
                  COLOR
                </span>
                : {data.color}
              </p>
            </div>

            <Button className="bg-[#cf1a17] mt-2 py-3">Book Now</Button>

            <div className="text-sm mt-5 flex flex-col gap-2">
              <p className="text-xs text-gray-500 font-semibold">
                SPECIFICATIONS
              </p>
              <SpecsTable>
                <Row>
                  <Spec
                    specText={data.fuelType}
                    specImage={"/icons/fuel.png"}
                  />
                  <Spec
                    specText={data.mileage}
                    specImage={"/icons/mileage.png"}
                  />
                </Row>
                <Row>
                  <Spec
                    specText={data.transmission}
                    specImage={"/icons/transmission.png"}
                  />
                  <Spec specText={data.seats} specImage={"/icons/seats.png"} />
                </Row>
              </SpecsTable>
            </div>

            <div className="text-sm flex flex-col gap-2">
              <p className="text-xs text-gray-500 font-semibold">FEATURES</p>
              <div className="flex flex-wrap gap-2">
                {data.features.map((feature, index) => (
                  <Button key={index} className="!text-gray-400 bg-gray-200">
                    {feature}
                  </Button>
                ))}
              </div>

              <p className="text-gray-800">
                <span className="text-xs text-gray-500 font-semibold">
                  NUMBER OF BOOKINGS
                </span>
                : {data.numBookings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
