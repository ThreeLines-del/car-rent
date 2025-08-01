import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <nav className="h-12 flex justify-between items-center px-32 bg-white shadow">
        <NavLink to={"."}>
          <h1 className="font-bold">
            <span className="text-[#cf1a17]">AUTO</span>RENT
          </h1>
        </NavLink>

        <ul className="flex gap-5 text-sm">
          <li>
            <p>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#cf1a17" } : undefined
                }
                to={"."}
              >
                Home
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#cf1a17" } : undefined
                }
                to={"cars"}
              >
                Cars
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#cf1a17" } : undefined
                }
                to={"about"}
              >
                About
              </NavLink>
            </p>
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
