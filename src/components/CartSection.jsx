import React from "react";
import Cart from "./Cart";
import { Link } from "react-router";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";

import emptyCartImage from "../../public/shopping.png"; // Assuming you have an empty cart image

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();
  // Calculate total price
  // Assuming each cart item has a productId and quantity and products is an array of product objects with id and price properties
  const total = carts.reduce((acc, cart) => {
    const product = products.find((el) => el.id === cart.productId);
    return acc + product.price * cart.quantity;
  }, 0);

  const Tax =( total * 0.05) *1; // Assuming a tax rate of 10% & converting to number type
  // Calculate net total 
  const netTotal = total + Tax;
  
  return (
    <>
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}

      {carts.length === 0 && (
        <img src={emptyCartImage} alt="empty" className="mx-auto my-5 block" />
      )}
      
      

      <div className="border-t border-black p-3 flex justify-between items-center">
        <div className="">
          <p className="font-bold">Tax</p>
          <p className="font-bold text-xl">$ {Tax.toFixed(2)}</p>
        </div>
        <div className="">
          <p className="font-bold">Total</p>
          <p className="font-bold text-xl">$ {total.toFixed(2)}</p>
        </div>
        <div className="">
          <p className="font-bold">Net Total</p>
          <p className="font-bold text-xl">
           $ {netTotal.toFixed(2)}
          </p>
        </div>
        <div className="">
          <Link className="border border-black px-3 py-1 text-sm mt-5 block bg-black text-white">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartSection;
