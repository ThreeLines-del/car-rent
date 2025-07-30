interface PriceType {
  pricePerDay: number;
}

const Price = ({ pricePerDay }: PriceType) => {
  return (
    <p className="text-xs font-semibold text-[#cf1a17]">
      ₵{pricePerDay}
      <span className="text-gray-600">/day</span>
    </p>
  );
};

export default Price;
