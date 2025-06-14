import React from "react";

const Cart = ({ cart }) => {
  //    console.log({cart});
  return (
    <div className="grid grid-cols-6 items-center justify-center text-center border border-black p-3 my-3">
      <div className="col-span-1 mx-auto">
        <img src={cart.product.image} className="h-18" alt="" />
      </div>
      <div className="col-span-3 ">
        <p className="font-bold">{cart.product.title}</p>
        <p className="text-sm  text-gray-600">Price - $ {cart.product.price}</p>
      </div>
      <div className="col-span-1">
        <p>Quantity</p>
        <div className="mt-2">
          <button className="border border-black bg-black text-white px-2 py-1 text-sm">-</button>
          <span className="mx-2">{cart.quantity}</span>
          <button className="border border-black bg-black text-white px-2 py-1 text-sm">+</button>
        </div>
      
      </div>
      <div className="col-span-1">
        <p className="">$ {cart.product.price * cart.quantity}</p>
      </div>
    </div>
  );
};

export default Cart;
