import Hero from "../components/Hero/Hero";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbSteeringWheel } from "react-icons/tb";
import { RiLockStarLine } from "react-icons/ri";
import { BsLightningCharge } from "react-icons/bs";
import FeaturedCarsSection from "../components/FeaturedCarsSection";
import Button from "../components/Button";

const Home = () => {
  const whyChooseUS = [
    {
      icon: <IoMdCheckmarkCircleOutline />,
      string: "Affordable Rates with no hidden fees",
    },
    {
      icon: <TbSteeringWheel />,
      string: "Wide Selection of economy, luxury, and electric vehicles",
    },
    {
      icon: <RiLockStarLine />,
      string: "Fully Insured rentals with 24/7 customer support",
    },
    {
      icon: <BsLightningCharge />,
      string: "Flexible Booking options—hourly, daily, or weekly",
    },
  ];

  return (
    <section className="flex-1">
      <Hero src={"/icons/1.jpg"}>
        <div className="flex flex-col items-end">
          <h1 className="text-4xl text-white">
            Drive Your Way - Reliable Cars,
          </h1>
          <h1 className="text-white text-sm">Unmatched Convenience</h1>
        </div>
        <div className="flex gap-5">
          <Button className="bg-[#cf1a17]">Browse Cars</Button>
          <Button className="bg-[#cf1a17]">Book Now</Button>
        </div>
      </Hero>

      <div className="px-60 flex flex-col gap-5">
        <div className="grid grid-cols-2 p-2 mt-5">
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs font-semibold text-[#cf1a17] border-b">
              20% OFF FOR ONLINE BOOOKING
            </p>
            <div>
              <h1 className="text-2xl font-semibold">We're Your Trusted</h1>
              <h1 className="text-2xl font-semibold text-[#cf1a17]">
                Car Rental
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-gray-600 border-l-2 border-[#cf1a17] pl-2 leading-5">
              For 15 years, we've raised the standard of car rentals with one of
              the most innovative and reliable car rental programs ever created.
              A comprehensive range of vehicles ensures you find the perfect
              ride for every journey.
            </p>
          </div>
        </div>

        <div className="flex gap-20 items-center">
          <img src="/icons/logos.png" className="h-44 w-60" />
          <div className="flex gap-5 font-outfit font-light">
            <p className="text-xs">
              <span className="text-3xl">{">"}</span>
              <span className="text-8xl text-[#cf1a17]">7k</span> cars
            </p>
            <p className="text-xs">
              <span className="text-8xl text-[#cf1a17]">15</span> years
            </p>
            <p className="text-xs">
              <span className="text-3xl">{">"}</span>{" "}
              <span className="text-8xl text-[#cf1a17]">10</span> brands
            </p>
          </div>
        </div>
      </div>

      <div className="px-48 h-80 bg-gray-50 mt-5 py-5 flex items-center">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-2xl">Why Choose Us</h1>
          <div className="grid grid-cols-4 gap-2">
            {whyChooseUS.map((item) => (
              <div className="h-40 px-2 flex flex-col gap-2 items-center justify-center rounded-md bg-gray-100">
                <span className="text-2xl text-[#cf1a17]">{item.icon}</span>
                <p className="text-sm text-center">{item.string}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FeaturedCarsSection />
    </section>
  );
};

export default Home;
