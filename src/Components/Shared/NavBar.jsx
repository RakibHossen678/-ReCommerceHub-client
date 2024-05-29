import { Button,  Navbar } from "flowbite-react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} className="lg:w-16 cursor-pointer  w-10" />
        </Link>
        <span className="self-center whitespace-nowrap lg:text-3xl text-lg font-semibold dark:text-white bg-gradient-to-r from-orange-700 via-[#07332F] to-[#155e75] text-transparent bg-clip-text bg-300% animate-gradient">
          ReCommerceHub
        </span>
      </Navbar.Brand>
      <div className="flex lg:space-x-4 md:order-2">
        <Button className="">Login</Button>
        <Navbar.Toggle />
      </div>
      <div className="">
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#155E75] border-b-2 border-b-[#155E75]" : ""
              }
            >
              Home
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to="/allProducts"
              className={({ isActive }) =>
                isActive ? "text-[#155E75] border-b-2 border-b-[#155E75]" : ""
              }
            >
              All Products
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to="/addProducts"
              className={({ isActive }) =>
                isActive ? "text-[#155E75] border-b-2 border-b-[#155E75]" : ""
              }
            >
              Add Product
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to="/purchase"
              className={({ isActive }) =>
                isActive ? "text-[#155E75] border-b-2 border-b-[#155E75]" : ""
              }
            >
              {" "}
              My Purchases
            </NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
