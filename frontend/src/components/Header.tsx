import Button from "./Button";

const Header = () => {
  return (
    <header>
      <nav className="h-12 flex justify-between items-center px-32 bg-white">
        <h1 className="font-bold">
          <span className="text-red-600">AUTO</span>RENT
        </h1>

        <ul className="flex gap-5 text-sm">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Cars</p>
          </li>
          <li>
            <p>About</p>
          </li>
        </ul>

        <div className="flex gap-2 text-sm items-center">
          <img src="/icons/user.png" alt="" />
          <Button className="bg-blue-950">Bookings</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
