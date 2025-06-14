import { Link } from "react-router";
import Continer from "./Continer";

export default function Header() {
  return (
    <header className="p-4 bg-gray-100 text-center">
      <Continer>
        <div className="mb-4 flex justify-between items-center">
        <Link to={'/'} className="text-3xl font-bold">Online Store</Link>
        <Link to={'/mycart'} className="border border-black px-4 py-2 relative">
          my cart
          <span className="inline-block bg-red-500 text-white rounded-full px-2 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            1
          </span>
        </Link>
      </div></Continer>
    </header>
  );
}
