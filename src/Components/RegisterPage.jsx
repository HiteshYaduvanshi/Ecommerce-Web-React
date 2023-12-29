import React from "react";
import imgOne from "../assets/image1.png";

function RegisterPage() {
  return (
    <>
      <div className="custom-radial-gradient w-full h-screen flex justify-between items-center ">
        <div className="basis-1/2 pt-20 px-10">
          <img src={imgOne} alt="" />
        </div>
        <div className="basis-1/2">
          <div className="bg-white w-[300px] mx-auto h-[300px] relative text-center p-5 custom-box-shadow">
            <div className="mb-10">
              <span className="px-3 font-bold w-24 inline-block cursor-pointer relative">
                Register
                <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 block bg-[#ff523b] h-1 w-20 rounded-full"></span>
              </span>
            </div>
            <form action="">
              <input
                className="block w-full border pl-2 mb-5"
                type="text"
                placeholder="Username"
                required
              />
              <input
                className="block w-full my-5 border pl-2"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="block w-full border pl-2"
                type="password"
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="mt-7 w-full bg-[#ff513b] text-white py-2 rounded-full font-semibold hover:bg-[#563434]"
              >
                register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
