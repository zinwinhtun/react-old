import React from "react";
import { useParams } from "react-router";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id == id);
  console.log(currentProduct);
  return (
    <div className="p-5 ">
      <p>Home/Product Detail</p>
      <div className="border border-black m-4">
        <div className="flex items-center">
          <div className="p-3 ms-5">
            <img
              src={currentProduct.image}
              className="w-[300px] mt-5"
              alt=""
            />
            <div className="flex flex-wrap justify-center mt-5 ">
              <img src={currentProduct.image} className="w-[70px]" />
              <img src={currentProduct.image} className="w-[70px]" />
              <img src={currentProduct.image} className="w-[70px]" />
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-start">
            <h1 className="font-bold my-2">
              {currentProduct.title}
            </h1>
            <p>
              <span className="font-bold">Price:</span> ${currentProduct.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
