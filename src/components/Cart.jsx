import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const Cart = ({ cart:{id,productId,quantity} }) => {
  const {products} = useProductStore();
  
  const product = products.find((el) => el.id === productId);

  const {increaseQuantity, decreaseQuantity, removeCartItem} = useCartStore();


  const handleIncrease = () => {
    increaseQuantity(id);
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    }else{
      toast.error("Removed from cart")&& removeCartItem(id);
    }
  }


  
  return (
    <div className="grid grid-cols-6 items-center justify-center text-center border border-black p-3 my-3">
      <div className="col-span-1 mx-auto">
        <img src={product.image} className="h-18" alt="" />
      </div>
      <div className="col-span-3 ">
        <p className="font-bold">{product.title}</p>
        <p className="text-sm  text-gray-600">Price - $ {product.price}</p>
      </div>
      <div className="col-span-1">
        <p>Quantity</p>
        <div className="mt-2">
          <button onClick={handleDecrease} className="border border-black bg-black text-white px-2 py-1 text-sm">-</button>
          <span className="mx-2">{quantity}</span>
          <button onClick={handleIncrease} className="border border-black bg-black text-white px-2 py-1 text-sm">+</button>
        </div>
      
      </div>
      <div className="col-span-1">
        <p className="">$ {(product.price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
