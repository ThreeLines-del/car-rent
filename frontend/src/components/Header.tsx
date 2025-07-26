const Header = () => {
  return (
    <header>
      <nav className="h-15 flex justify-between items-center px-32 bg-white">
        <h1 className="font-bold">#CARRENT</h1>

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
          <img src="/public/icons/user.png" alt="" />
          <button className="border px-2 py-1">Bookings</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
