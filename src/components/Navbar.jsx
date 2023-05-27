import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav 
      className="
        w-full 
        flex justify-between items-center 
        fixed top-0
        z-10 
        py-5 px-8 text-sm 
        font-light
        bg-white
      "
    >
      <ul className="flex items-center gap-2">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
          >
            Shopi
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Clothes
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Furnitures
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Toys
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-2">
        <li className="text-black/70">
          emiacevedoposos@gmail.com
        </li>

        <li>
          <NavLink
            to="/my-orders"
          >
            My Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/my-account"
          >
            My Account
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sign-in"
          >
            Sign In
          </NavLink>
        </li>

        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;