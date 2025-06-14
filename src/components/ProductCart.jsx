import React from "react";
import Rating from "./Rating";
import { Link } from "react-router";

const ProductCart = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link to={`/productdetail/${id}`} className="p-5 border border-black flex flex-col items-start">
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
    </Link>
  );
};

export default ProductCart;
