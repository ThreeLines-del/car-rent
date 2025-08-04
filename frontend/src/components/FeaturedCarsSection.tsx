import { FaLongArrowAltRight } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { Car } from "../../types/types";
import FeaturedCarsCard from "./FeaturedCarsCard/FeaturedCarsCard";
import CardDetails from "./FeaturedCarsCard/CardDetails";
import Make from "./FeaturedCarsCard/Make";
import Model from "./FeaturedCarsCard/Model";
import FuelType from "./FeaturedCarsCard/FuelType";
import Mileage from "./FeaturedCarsCard/Mileage";
import Transmission from "./FeaturedCarsCard/Transmission";
import DetailsDiv from "./FeaturedCarsCard/DetailDiv";
import PricePerDay from "./FeaturedCarsCard/PricePerDay";
import PriceDiv from "./FeaturedCarsCard/PriceDiv";
import Year from "./FeaturedCarsCard/Year";

const FeaturedCarsSection = () => {
  const [data, error, loading] = useFetch<Car[]>(
    "http://localhost:3000/api/allcars"
  );

  return (
    <div className="flex flex-col items-center">
      <div className="w-fit mt-5">
        <div className="flex justify-between h-10 items-center">
          <p className="text-xl text-gray-800 border-l-2 border-[#cf1a17] leading-5 pl-1 font-semibold">
            Featured Cars
          </p>
          <div className="flex gap-1">
            <p className="text-xs text-[#cf1a17]">EXPLORE ALL</p>
            <FaLongArrowAltRight className="text-[#cf1a17] text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          {data?.map((item) => (
            <FeaturedCarsCard src={item.imageUrl}>
              <CardDetails>
                <Make>{item.make}</Make>
                <Model>{item.model}</Model>
                <Year>{item.year}</Year>
                <DetailsDiv>
                  <FuelType>{item.fuelType}</FuelType>
                  <Mileage>{item.mileage}</Mileage>
                  <Transmission>{item.transmission}</Transmission>
                </DetailsDiv>
                <PriceDiv rating={item.rating}>
                  <PricePerDay>{item.pricePerDay}</PricePerDay>
                </PriceDiv>
              </CardDetails>
            </FeaturedCarsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarsSection;
