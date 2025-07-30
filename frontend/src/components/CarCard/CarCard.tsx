interface CarCardType {
  children: React.ReactNode;
  src: string;
}

const CarCard = ({ children, src }: CarCardType) => {
  return (
    <div className="w-60 flex flex-col rounded-xl overflow-hidden shadow">
      <div className="h-40 w-full">
        <img className="h-full w-full" src={src} alt="" />
      </div>
      <div className="flex-1 flex justify-between p-2">{children}</div>
    </div>
  );
};

export default CarCard;
