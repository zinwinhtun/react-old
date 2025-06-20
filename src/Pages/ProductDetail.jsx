import React from "react";
import { useParams } from "react-router";
import Rating from "../components/Rating";
import Continer from "../components/Continer";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { slag } = useParams();
  const {products} = useProductStore();
  const currentProduct = products.find((product) => product.slag == slag);
  const {carts , addToCart} = useCartStore();
  //add to cart function
  const handelAddToCart = () => {
    const newCart = {
      id: Date.now(), // Generate a unique ID for the cart item
      productId: currentProduct.id,
      quantity: 1,
      price: currentProduct.price,
    };

    addToCart(newCart);
    toast.success("Added to cart");

    
  }
  return (
    <Continer className="px-5">
      <Breadcrumb currentPage="Product Detail" />
      <div className="flex md:flex-row flex-col items-center border lg:border-black mt-5">
          <div className="img w-1/2 my-5">
            <img src={currentProduct.image} className="h-40 m-auto" alt="" />
          </div>
          <div className="details w-1/2 my-5">
            <p className="font-bold line-clamp-2 my-2">{currentProduct.title}</p>
            <div className="flex flex-wrap justify-between my-4 w-full items-end mt-auto">
              <p className="font-bold bg-gray-200 px-2">{currentProduct.category}</p>
              <p className="me-5">$ {currentProduct.price}</p> 
            </div>
            <p className="text-sm text-gray-500 md:px-3 lg:px-5">{currentProduct.description}</p>
            <div className="mt-3">
              <Rating rate={currentProduct.rating.rate} />
            </div>
            {carts.find((cart) => cart.productId == currentProduct.id) ? (
              <button  className="border border-black px-3 py-1 bg-black text-white text-sm mt-5 block mx-auto">
                Added
              </button>    
            ) :<button onClick={handelAddToCart} className="border border-black px-3 py-1 text-sm mt-5 block mx-auto">
                Add to Cart
              </button>}
            
          </div>
      </div>
    </Continer>
  );
};

export default ProductDetail;
