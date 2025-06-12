import React from "react";
import Rating from "./Rating";

const ProductCart = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <div className="p-5 border border-black flex flex-col items-start">
      <img src={image} className="h-40 m-auto" />
      <p className="font-bold line-clamp-2 my-2">{title}</p>
      {/* rarting star  */}
     <Rating  rate={rate}/>
      <div className="flex flex-wrap justify-between mt-2 w-full items-end mt-auto">
        <p>${price}</p>
        <button className="border border-black px-3 py-1 text-sm">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
