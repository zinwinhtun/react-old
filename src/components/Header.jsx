export default function Header() {
  return (
    <header className="p-4 bg-gray-100 text-center">
      <div className="mb-4 flex justify-between items-center  ">
        <h1 className="text-3xl font-bold">Online Store</h1>
        <button className="border border-black px-4 py-2 relative">
          my cart
          <span className="inline-block bg-red-500 text-white rounded-full px-2 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            1
          </span>
        </button>
      </div>
    </header>
  );
}
