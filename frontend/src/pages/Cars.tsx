import { Link, useSearchParams } from "react-router-dom";
import { Car } from "../../types/types";
import Hero from "../components/Hero/Hero";
import CarCard from "../components/CarCard/CarCard";
import MakeModelYear from "../components/CarCard/MakeModelYear";
import Price from "../components/CarCard/Price";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import carsService from "../services/carsService";

const Cars = () => {
  const [carsList, setCarsList] = useState<Car[]>();

  useEffect(() => {
    carsService.getAll().then((data) => setCarsList(data));
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("make");

  function handleFilterChange(key: string, value: string) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const displayedCars = typeFilter
    ? carsList?.filter((car) => car.make.toLocaleLowerCase() === typeFilter)
    : carsList;

  const cars = [
    { key: "make", value: "Toyota" },
    { key: "make", value: "Tesla" },
    { key: "make", value: "Ford" },
    { key: "make", value: "Nissan" },
    { key: "make", value: "Honda" },
    { key: "make", value: "Hyundai" },
  ];

  return (
    <div className="flex-1">
      <Hero src="/icons/4.jpg">
        <h1 className="text-white text-3xl">Browse cars</h1>
        <div className="h-20 w-96 bg-white flex items-center justify-center">
          <select name="make" id=""></select>
          <select name="model" id=""></select>
          <p>price</p>
          <button className="border">search</button>
        </div>
      </Hero>

      <div>
        <div className="px-28 mt-5 flex flex-col items-center gap-5">
          <div className="flex justify-between h-10 items-center w-full">
            <p className="text-xl text-gray-800 border-l-2 border-red-600 leading-5 pl-1 font-semibold">
              Explore Cars
            </p>
            <div className="flex gap-3">
              {cars.map((item, index) => (
                <Button
                  key={index}
                  className={`!text-gray-500 py-1 shadow ${
                    typeFilter === item.value.toLocaleLowerCase()
                      ? "!text-white bg-[#cf1a17] shadow"
                      : ""
                  }`}
                  onClick={() =>
                    handleFilterChange(item.key, item.value.toLocaleLowerCase())
                  }
                >
                  {item.value}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 w-fit gap-5">
            {displayedCars?.map((item, index) => (
              <Link key={index} to={item._id}>
                <CarCard src={item.imageUrl}>
                  <MakeModelYear
                    make={item.make}
                    model={item.model}
                    year={item.year}
                  />
                  <Price pricePerDay={item.pricePerDay} />
                </CarCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
