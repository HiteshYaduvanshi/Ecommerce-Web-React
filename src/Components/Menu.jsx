import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const fadeIn = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const BurgerContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 80px;
  z-index: 999;
`;

const BurgerLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`;

const AnimatedBurgerLine = styled(BurgerLine)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const CloseButton = styled.div`
  position: fixed;
  top: 5px;
  right: 75px;
  z-index: 998;
  cursor: pointer;
`;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BurgerContainer onClick={toggleMenu}>
        {[1, 2, 3].map((index) => (
          <AnimatedBurgerLine
            key={index}
            style={{
              transform: isOpen
                ? `rotate(${index === 1 ? 45 : -45}deg)`
                : "rotate(0)",
              backgroundColor: isOpen ? "transparent" : "#333",
            }}
          />
        ))}
      </BurgerContainer>
      {isOpen && (
        <>
          <CloseButton onClick={closeMenu}>
            <p className="text-6xl">&times;</p>
          </CloseButton>
          <div className="absolute top-[80px] left-0 px-7 w-full bg-[#555]">
            <ul className="text-center">
              <li className="m-3">
                <NavLink
                  to="/Ecommerce-Web-React/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#ff513b] font-semibold text-xl"
                        : "text-white text-xl"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="m-3">
                <NavLink
                  to="/Ecommerce-Web-React/products"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#ff513b] font-semibold text-xl"
                        : "text-white text-xl"
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="m-3">
                <NavLink
                  to="/Ecommerce-Web-React/about"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#ff513b] font-semibold text-xl"
                        : "text-white text-xl"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="m-3">
                <NavLink
                  to="/Ecommerce-Web-React/contact"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#ff513b] font-semibold text-xl"
                        : "text-white text-xl"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="m-3">
                <NavLink
                  to="/Ecommerce-Web-React/login"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#ff513b] font-semibold text-xl"
                        : "text-white text-xl"
                    }`
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Menu;
