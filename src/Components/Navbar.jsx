import React from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className={`absolute w-full flex p-5 items-center justify-between `}>
        <div className="logo">
          <img className="w-32" src={logo} alt="logo" />
        </div>
        <ul className="flex items-center">
          <li className="mx-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              Products
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              Login
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/cart">
              <img className="w-8" src={cartIcon} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
