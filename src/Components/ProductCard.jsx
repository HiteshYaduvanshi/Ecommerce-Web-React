import React from "react";

function ProductCard({
  imgScr,
  productName,
  ratingOne,
  ratingTwo,
  ratingThree,
  ratingFour,
  ratingFive,
  price,
}) {
  return (
    <>
      <div className="basis-[25%] px-2 mt-16 hover:translate-y-[-10px]">
        <img src={imgScr} alt="product img" />
        <h2 className="capitalize mt-3 text-[20px] font-semibold my-1">
          {productName}
        </h2>
        <ul className="flex">
          <li className="text-[#ff523b] mx-1">{ratingOne}</li>
          <li className="text-[#ff523b] mx-1">{ratingTwo}</li>
          <li className="text-[#ff523b] mx-1">{ratingThree}</li>
          <li className="text-[#ff523b] mx-1">{ratingFour}</li>
          <li className="text-[#ff523b] mx-1">{ratingFive}</li>
        </ul>
        <p className="mt-1 font-semibold text-[#555]">{price}</p>
      </div>
    </>
  );
}

export default ProductCard;
