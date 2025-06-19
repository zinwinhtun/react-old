import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductCart = ({product: { id,title,price,image,rating: { rate }}}) => {
  // Access the carts from the cart store
  const {carts , addToCart} = useCartStore();
  const  navigate = useNavigate();
  //add to cart function
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent div
    const newCart = {
      id : Date.now(), // Generate a unique ID for the cart item
      productId: id,
      quantity: 1,
      price,
    };

    addToCart(newCart);
    toast.success("Added to cart");
  }

  //handle added to cart
  const handleAdded = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent div
    toast.error("Already added to cart");
  }

  //go to product detail page
  const goToProductDetail = () => {
   navigate(`/productdetail/${id}`);
   
  };

  return (
    <div onClick={goToProductDetail} 
      className="p-5 border border-black flex flex-col items-start"
    >
      <img src={image} className="h-40 m-auto" />
      <p className="font-bold line-clamp-2 my-2">{title}</p>
      {/* rarting star  */}
      <Rating rate={rate} />
      <div className="flex flex-wrap justify-between w-full items-end mt-auto">
        <p>${price}</p>
        {carts.find((cart) => cart.productId == id) ? (
          <button onClick={handleAdded} className="border border-black px-3 py-1 bg-black text-white text-sm mt-5 block mx-auto">
            Added
          </button>
        ) : (
          <button onClick={handleAddToCart} className="border border-black px-3 py-1 text-sm mt-5 block mx-auto">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
