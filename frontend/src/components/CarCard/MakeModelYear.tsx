interface MakeModelYearType {
  make: string;
  model: string;
  year: number;
}

const MakeModelYear = ({ make, model, year }: MakeModelYearType) => {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-semibold text-gray-800">
        {make} {model}
      </p>

      <p className="text-xs text-gray-500">{year}</p>
    </div>
  );
};

export default MakeModelYear;
