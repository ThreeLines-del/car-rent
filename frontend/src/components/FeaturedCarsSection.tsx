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
    <div className="px-48 mt-5">
      <div className="flex justify-between h-10 items-center">
        <p className="text-xl text-gray-800 border-l-2 border-red-600 leading-5 pl-1 font-semibold">
          Featured Cars
        </p>
        <div className="flex gap-1">
          <p className="text-xs text-red-600">EXPLORE ALL</p>
          <FaLongArrowAltRight className="text-red-600 text-sm" />
        </div>
      </div>

      <div className="h-90 border">
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
              <PriceDiv>
                <PricePerDay>{item.pricePerDay}</PricePerDay>
              </PriceDiv>
            </CardDetails>
          </FeaturedCarsCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarsSection;
