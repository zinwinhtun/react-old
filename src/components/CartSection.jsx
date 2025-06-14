import React from 'react'
import Cart from './Cart';
import carts from '../data/cart';
import { Link } from 'react-router';

const CartSection = () => {
  return (
    <>
      {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
      ))}

      <div className="border-t border-black p-3 flex flex-col items-end">
        <div className="">
          <p className="font-bold">Total</p>
          <p className="font-bold text-xl">$ {carts.reduce((acc, cart) => acc +  cart.product.price * cart.quantity , 0)}</p>
        </div>
        <div className="">
          <Link className="border border-black px-3 py-1 text-sm mt-5 block bg-black text-white">Checkout</Link>
        </div>
      </div>
      
    </>
  )
}

export default CartSection
