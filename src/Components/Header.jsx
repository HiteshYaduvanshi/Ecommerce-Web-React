import React from "react";
import Navbar from "./Navbar";
import image1 from "../assets/image1.png";

function Header() {
  return (
    <>
      <div className="custom-radial-gradient w-full h-screen">
        <div className="flex justify-around items-center h-screen">
          <div className="basis-1/2 mx-16">
            <h1 className="font-bold text-6xl capitalize">
              give your workout <br /> a new style!
            </h1>
            <p className="mt-7">
              Success isn't always about gratness. Its about consistency.
              Consistent <br /> hard work gain success. Greatness will come.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-[#ff523b] text-white px-5 py-2 rounded-3xl hover:bg-[#563434]"
            >
              Explore Now &#8594;
            </a>
          </div>
          <div className="basis-1/2 mx-10">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
